// Display ad creative builders keyed by adType query param.
// Usage in endpoints: getDisplayAdm(adType, { configUrl, pid, width, height, gpid })

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Simple image wrapped in the kraken/ad-tag pipeline.
 * Ad-tag config still loads so you can test with it. adm is just a basic image instead of a vendor creative.
 * Default when no adType query param is provided.
 */
function simpleAdm({ configUrl, pid, width, height, gpid }) {
  const ctx = uuidv4();
  const imageUrl = `https://placehold.co/${width}x${height}/e74c3c/ffffff?text=KARGO+TEST`;
  const creativeHtml = `<a href="https://example.com" target="_blank"><img src="${imageUrl}" width="${width}" height="${height}" /></a>`;
  const encodedAdm = Buffer.from(creativeHtml, 'utf8').toString('base64');

  const krakenFields = {
    kargo_id: pid,
    krg_imp_id: ctx,
    page_view_id: uuidv4(),
    krk_imp_tracker: `https://kraken.prod.kargo.com/api/v1/event/adtag-pixel?ctx=${ctx}&adtag_version={AD_TAG_VERSION}`,
    context: ctx,
    kraken_domain: 'kraken.prod.kargo.com',
    id: '25_ht2f8jk9',
    auction_type: 'open',
    size: `${width}x${height}`,
    adomain: 'testadvertiser.com',
    scylla_impression_id: uuidv4(),
    scylla_seat_bid_id: uuidv4(),
    ext: { response_type: 'banner' },
    gpid: gpid,
    adm: encodedAdm,
    tracking: {
      serve: [],
      win: [],
      view: `https://kraken.prod.kargo.com/api/v1/event/moat?ctx=${ctx}`,
      billable: [`https://kraken.prod.kargo.com/api/v1/event/billable?ctx=${ctx}&adtag_version={AD_TAG_VERSION}`],
      blocked: [`https://kraken.prod.kargo.com/api/v1/event/blocked?ctx=${ctx}`],
      click: [],
    },
  };

  return krakenScriptAdm({ configUrl, pid, krakenFields });
}

/**
 * ABA Display - uses the ad-tag native template rendering pipeline.
 * creative_optimizer tells ad-tag which template to use, adm is a base64 fakeCreative JSON.
 */
function abaDisplayAdm({ configUrl, pid, width, height, gpid }) {
  const ctx = uuidv4();
  const imageUrl = `https://placehold.co/${width}x${height}/e74c3c/ffffff?text=KARGO+TEST`;
  const fakeCreative = {
    creativeId: 'fake-123',
    assets: [{ id: 1, img: { url: imageUrl, w: width, h: height } }],
    link: { url: 'https://example.com' },
  };
  const encodedAdm = Buffer.from(JSON.stringify(fakeCreative), 'utf8').toString('base64');

  const krakenFields = {
    kargo_id: pid,
    krg_imp_id: ctx,
    page_view_id: uuidv4(),
    krk_imp_tracker: `https://kraken.prod.kargo.com/api/v1/event/adtag-pixel?ctx=${ctx}&adtag_version={AD_TAG_VERSION}`,
    context: ctx,
    kraken_domain: 'kraken.prod.kargo.com',
    id: '25_ht2f8jk9',
    auction_type: 'open',
    size: `${width}x${height}`,
    adomain: 'testadvertiser.com',
    scylla_impression_id: uuidv4(),
    scylla_seat_bid_id: uuidv4(),
    creative_optimizer: {
      template_id: 'aba-display-1',
      template_url: 'https://storage.cloud.kargo.com/ad/network/kap/templates/native/aba-display-1.min.js',
    },
    ext: { response_type: 'native' },
    gpid: gpid,
    adm: encodedAdm,
    tracking: {
      serve: [],
      win: [],
      view: `https://kraken.prod.kargo.com/api/v1/event/moat?ctx=${ctx}`,
      billable: [`https://kraken.prod.kargo.com/api/v1/event/billable?ctx=${ctx}&adtag_version={AD_TAG_VERSION}`],
      blocked: [`https://kraken.prod.kargo.com/api/v1/event/blocked?ctx=${ctx}`],
      click: [],
    },
  };

  return krakenScriptAdm({ configUrl, pid, krakenFields });
}

/**
 * Runway - banner response_type, has ad_format/deal_id/ias_tag_params, no creative_optimizer.
 * adm is a base64-encoded full HTML creative (DV3/IVO vendor tags, tracking pixels, etc).
 * For testing we use a simple placeholder image as the encoded adm.
 */
function runwayAdm({ configUrl, pid, width, height, gpid }) {
  const ctx = uuidv4();
  const imageUrl = `https://placehold.co/${width}x${height}/3498db/ffffff?text=RUNWAY+TEST`;
  // Simple HTML creative as the encoded adm (real Runway ads have full DV3/IVO vendor markup)
  const creativeHtml = `<div style="width:${width}px;height:${height}px;"><a href="https://example.com" target="_blank"><img src="${imageUrl}" width="${width}" height="${height}" style="display:block;" /></a></div>`;
  const encodedAdm = Buffer.from(creativeHtml, 'utf8').toString('base64');

  const krakenFields = {
    creative_settings: { custom_creative_sizes: [{ width: null, height: null }] },
    kargo_id: pid,
    krg_imp_id: ctx,
    page_view_id: uuidv4(),
    krk_imp_tracker: `https://kraken.prod.kargo.com/api/v1/event/adtag-pixel?ctx=${ctx}&adtag_version={AD_TAG_VERSION}`,
    context: ctx,
    kraken_domain: 'kraken.prod.kargo.com',
    id: '74_703974386',
    ad_format: '43',
    ad_format_id: '43',
    deal_id: 'KRG-TEST-00000',
    auction_type: 'pmp',
    size: `${width}x${height}`,
    adomain: 'testadvertiser.com',
    kraken_id: '48567',
    scylla_impression_id: uuidv4(),
    scylla_seat_bid_id: uuidv4(),
    ext: { response_type: 'banner' },
    gpid: gpid,
    adm: encodedAdm,
    tracking: {
      serve: [],
      win: [],
      view: `https://kraken.prod.kargo.com/api/v1/event/moat?ctx=${ctx}`,
      billable: [`https://kraken.prod.kargo.com/api/v1/event/billable?ctx=${ctx}&adtag_version={AD_TAG_VERSION}`],
      blocked: [`https://kraken.prod.kargo.com/api/v1/event/blocked?ctx=${ctx}`],
      click: [`https://kraken.prod.kargo.com/api/v1/event/click?ctx=${ctx}`],
    },
  };

  return krakenScriptAdm({ configUrl, pid, krakenFields });
}

/**
 * Shared kraken/ad-tag script wrapper.
 * Takes arbitrary krakenFields and serializes them into the ad-tag push script.
 * The outer wrapper (load ad-tag config, push to Kargo.ads) is the same for all ad types.
 */
function krakenScriptAdm({ configUrl, pid, krakenFields }) {
  const krakenJson = JSON.stringify(krakenFields);
  return (
    '\u003cimg height="1" width="1" style="display:none" src="https://kraken.prod.kargo.com/api/v1/event/won?ctx=' +
    krakenFields.context +
    '"/\u003e' +
    '\u003cscript type="text/javascript"\u003e' +
    '(function(w){' +
    "if(typeof w.__krg_load_started==='undefined'||!w.__krg_load_started){" +
    "if(typeof(w.Kargo||{}).loaded==='undefined'){" +
    "var s=w.document.createElement('script');" +
    "s.type='text/javascript';" +
    "s.src='" +
    configUrl +
    "';" +
    'w.document.head.appendChild(s)' +
    '}' +
    'w.__krg_load_started=true' +
    '}' +
    '(w.Kargo=w.Kargo||{}).ads=w.Kargo.ads||[];' +
    'w.Kargo.ads.push({kargo_id:"' +
    pid +
    '",' +
    'source_window:window,' +
    'source_element:document.currentScript,' +
    'kraken:' +
    krakenJson +
    '});' +
    '(w.Kargo.loadAds||function(){})()' +
    '})(function(){var w=window;try{w=w.top.document?w.top:w}catch(e){}return w}());' +
    '\u003c/script\u003e'
  );
}

/**
 * Main entry point - pick the right adm builder based on adType.
 * @param {string|undefined} adType - query param value
 * @param {object} params - { configUrl, pid, width, height, gpid }
 * @returns {string} adm HTML string
 */
function getDisplayAdm(adType, { configUrl, pid, width, height, gpid }) {
  switch (adType) {
    case 'aba-display':
      return abaDisplayAdm({ configUrl, pid, width, height, gpid });
    case 'runway':
      return runwayAdm({ configUrl, pid, width, height, gpid });
    default:
      return simpleAdm({ configUrl, pid, width, height, gpid });
  }
}

module.exports = { getDisplayAdm };
