(function () {
    // Get the current domain and URL
    var domain = window.location.hostname;
    var href = window.location.href;
  
    // Define the type (default for now)
    // var type = 'default';
    var type = 'prod';
  
    // Create the URL for the domain config API
    var domainConfigUrl = `https://public-cached.kargovideo.com/api/v1/domain-configs/domain-config?type=${type}&domain=${domain}&href=${encodeURIComponent(
      href,
    )}`;
  
    fetch(domainConfigUrl)
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(function (data) {
        window.fabrikAds = window.fabrikAds || {};
        window.fabrikAds = data;
  
        console.log('Domain Config loaded:', data);
  
        var adScript = document.createElement('script');
        adScript.async = true;
        // adScript.src = 'https://static.kargovideo.com/player/*/kargo.js';
        // Uncomment the following line if you are testing locally
        adScript.src = 'http://localhost:4443';
        document.head.appendChild(adScript);
      })
      .catch(function (error) {
        console.error('There was a problem with the fetch operation:', error);
      });
  
    // Load apstag.js (Amazon)
    (function (a9, a, p, s, t, A, g) {
      if (a[a9]) return;
      function q(c, r) {
        a[a9]._Q.push([c, r]);
      }
      a[a9] = {
        init: function () {
          q('i', arguments);
        },
        fetchBids: function () {
          q('f', arguments);
        },
        setDisplayBids: function () {},
        targetingKeys: function () {
          return [];
        },
        _Q: [],
      };
      A = p.createElement(s);
      A.async = !0;
      A.src = t;
      g = p.getElementsByTagName(s)[0];
      g.parentNode.insertBefore(A, g);
    })('apstag', window, document, 'script', '//c.amazon-adsystem.com/aax2/apstag.js');
  
    // Load Prebid.js
    var prebidScript = document.createElement('script');
    // prebidScript.async = true;
    // prebidScript.src = 'https://static.kargovideo.com/player/prebid.js';
    // document.head.appendChild(prebidScript);
  })();
  