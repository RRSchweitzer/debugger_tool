(async function() {
	try {
		const domain = window.location.hostname.replace(/^www\./, '');
		const href = window.location.href;
		const scriptTag = window.document.currentScript;
		const scriptSrc = new URL(scriptTag.src);
		const urlParams = new URLSearchParams(scriptSrc.search);
		const type = urlParams.get('type') || "prod";
		const schemaVersion = urlParams.get('schema_version') || '3.0';
		const playerVersion = urlParams.get('player_version') || '3.0.0';
		const prebidVersion = urlParams.get('prebid_version') || '';
		const domainConfigUrl = `https://public-cached.video.fabrik.com/api/v1/domain-configs/domain-config?type=${type}&domain=${domain}&schema_version=${schemaVersion}&href=${encodeURIComponent(href)}`;

		const defaultScriptUrls = {
			adScript: `https://static.kargovideo.com/player/v${playerVersion}/fabrik-ads.js`,
			prebidScript: `https://static.kargovideo.com/player/prebid${prebidVersion.length > 0 ? '-' + prebidVersion : ''}.js`
		};

		const eppoData = {};

		function loadEppoScript() {
			return new Promise((resolve, reject) => {
				const s = document.createElement('script');
				s.src = 'https://cdn.jsdelivr.net/npm/@eppo/js-client-sdk@latest/dist/eppo-sdk.min.js';
				s.onload = () => resolve('eppo loaded');
				s.onerror = err => reject(err);
				document.head.appendChild(s);
			});
		}

		function loadApsTagIframe() {
			return new Promise((resolve, reject) => {
				try {
					const iframe = document.createElement('iframe');
					iframe.style.display = 'none';
					document.body.appendChild(iframe);
					const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
					const script = iframeDoc.createElement('script');
					script.type = 'text/javascript';
					script.innerHTML = `
!function(a9,a,p,s,t,A,g){
	if(a[a9])return;
	function q(c,r){a[a9]._Q.push([c,r])}
	a[a9]={init:function(){q("i",arguments)},
	fetchBids:function(){q("f",arguments)},
	setDisplayBids:function(){},
	targetingKeys:function(){return[]},
	_Q:[]};
	A=p.createElement(s);
	A.async=!0;
	A.src=t;
	g=p.getElementsByTagName(s)[0];
	g.parentNode.insertBefore(A,g)
}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");
					`;
					iframeDoc.body.appendChild(script);
					window.amazonApsTagIframe = iframe.contentWindow;
					resolve('amazon iframe loaded');
				} catch(e) {
					reject(e);
				}
			});
		}

		function loadPrebidScript(url) {
			return new Promise((resolve, reject) => {
				const s = document.createElement('script');
				s.async = true;
				s.src = url;
				s.onload = () => resolve('prebid loaded');
				s.onerror = err => reject(err);
				document.head.appendChild(s);
			});
		}

		async function fetchDomainConfig() {
			const r = await fetch(domainConfigUrl);
			if (!r.ok) throw new Error('Network response was not ok');
			return r.json();
		}

		const [ domainData ] = await Promise.all([
			fetchDomainConfig(), 
			loadEppoScript(), 
			loadApsTagIframe()
		  ]);

		window.fabrikAds = window.fabrikAds || {};
		Object.assign(window.fabrikAds, domainData);

		await window.eppo.init({
			apiKey: 'TfwE6CF02GG5cdcRfLeGVzrMSOUEDhxaJD9SVTY8u8c',
			assignmentLogger: {
				logAssignment(a) {
					eppoData.experiments = [{
						experiment: a.experiment,
						subject: a.subject,
						variation: a.variation
					}];
				}
			}
		});

		const eppoClient = window.eppo.getInstance();
		const featureKey = 'fvp-scripts-config';
		const subjectKey = Math.random().toString(36).substring(2, 18);
		const subjectAttributes = { domain, domain_type: type };
		const scriptsUrls = eppoClient.getJSONAssignment(featureKey, subjectKey, subjectAttributes, defaultScriptUrls);

		if (Object.keys(eppoData).length) {
			window.fabrikAds.config = window.fabrikAds.config || {};
			window.fabrikAds.config.eppo = eppoData;
		}

		window.kvpbjs = window.kvpbjs || {};
		window.kvpbjs.que = window.kvpbjs.que || [];
		
		await loadPrebidScript(scriptsUrls.prebidScript).catch(e => {
			console.error('Prebid failed to load:', e);
		});

		await loadPlayerScript(scriptsUrls.adScript)

		async function loadPlayerScript(url) {
			const s = document.createElement('script');
			s.async = true;
			s.src = url;
			document.head.appendChild(s);
		}
	} catch(e) {
		console.error('Error loading scripts:', e);
	}
})();
