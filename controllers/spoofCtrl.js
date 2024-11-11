function randomRangeCPM(min, max) {
  cpm = (Math.random() * (max - min + 1) + min).toFixed(2);
  return cpm;
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

module.exports = {
  appnexusCacheThing: (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send();
  },
  appnexus: (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    var uuid = JSON.parse(req.body).tags[0].uuid;
    var uuid2 = JSON.parse(req.body).tags[0].uuid;
    var tagid = JSON.parse(req.body).tags[0].id;
    if (tagid === 22366045) {
      // Stick Outstream
      console.log('outstream serving');
      res.send({
        version: '3.0.0',
        tags: [
          {
            uuid: uuid,
            tag_id: tagid,
            auction_id: uuidv4(),
            adId: uuidv4(),
            nobid: false,
            no_ad_url:
              'https://nym1-ib.adnxs.com/it?an_audit=0&referrer=https%3A%2F%2Fwww.repeatcrafterme.com%2F2021%2F08%2Fintroducing-ogo-yarn.html&e=wqT_3QLoBHxoAgAAAwDWAAUBCOnqfjokGENak-_jz0tPYLxgAKjYJAA0BABENCCgAGQAAAIA9Ci5AIRESACkRCfSOATEAAAAgrkcBQDCXzfoGOPQOQPQOSABQAFj53jlgAGiypaUBeACAAQGKAQCSAQNVU0SYAQGgAQGoAQGwAQC4AQPAAQDIAQLQAQDYAQDgAQDwAQD6AQxkbS1wbC0yNzc5NzDYAvU_4AK0_FvqAkFodHRwczovL3d3dy5yZXBlYXRjcmFmdGVybWUuY29tLzIwMjEvMDgvaW50cm9kdWNpbmctb2dvLXlhcm4uaHRtbIADAIgDAZADAJgDF6ADAaoDAMAD4KgByAMA2AOzojjgAwDoAwD4AwGABACSBA0vdXQvdjMvcHJlYmlkmAQAogQOMTMwLjQ0LjEzMC4xMzeoBACyBBAIARAEGIAFIOgCKAIwADgDuAQAwAQAyAQA2gQCCADgBADwBKCejmmIBQGYBQCgBe394s2Vi9HzOsAFAMkFAAAAAAAA8D_SBQkJAAAAAAAAAADYBQHgBQHwBbLiFvoFBAgAEACQBgGYBgC4BgDBBgAAAAAAAPC_0AbJhgHaBhYKEAAAAAAAAAAAAAAAACGXkBAAGADgBgTyBgIIAIAHAYgHAKAHQKoHCDM3Mzg4OTgwugcRCAABJUgqBDEtLS044x5AAcgH9OYC0gcNNfwBIAjaBwYJKUDgBwDqBwIIAPAHqLzTAvoHEhUnVSMEgghKFQA.&s=3d3ea447743ffb80f4aa65c500d673caf0a34116',
            timeout_ms: 0,
            ad_profile_id: 1506868,
            rtb_video_fallback: false,
            ads: [
              {
                content_source: 'rtb',
                ad_type: 'video',
                notify_url:
                  'https://nym1-ib.adnxs.com/vast_track/v2?info=ZwAAAAMArgAFAQlptSNhAAAAABFW0h4_l06xLxlptSNhAAAAACCgno5pKAAwvAk49A5A0vUtSPDUclCXzfoGWLLiFmICVVNoAXABeACAAQKIAQGQAYAFmAHoAqABAKgBoJ6OabABAQ..&s=331d21a84b923f9fb5cf73fa2aef848ce8a0357f&event_type=1',
                usersync_url: 'https%3A%2F%2Facdn.adnxs.com%2Fdmp%2Fasync_usersync.html',
                buyer_member_id: 1212,
                creative_id: uuidv4(),
                media_type_id: 4,
                media_subtype_id: 64,
                cpm: 30,
                cpm_publisher_currency: 0.009243,
                publisher_currency_code: '$',
                brand_category_id: 29,
                brand_id: 373042,
                client_initiated_ad_counting: false,
                rtb: {
                  video: {
                    player_width: 300,
                    player_height: 250,
                    duration_ms: 30000,
                    content:
                      '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="vast.xsd" version="3.0"><Ad id="5925573263"><InLine><AdSystem>GDFP</AdSystem><AdTitle>External - Single Inline Linear</AdTitle><Description><![CDATA[ External - Single Inline Linear ad ]]></Description><Error><![CDATA[ https://pubads.g.doubleclick.net/pagead/interaction/?ai=B7lOY1glNZsiJDZnejvQPwfWSiAuD6qWVRgAAABABII64hW84AViLgsbBgwRgye60i8Ck2A-6AQo3Mjh4OTBfeG1syAEFwAIC4AIA6gInLzIxNzc1NzQ0OTIzL2V4dGVybmFsL3NpbmdsZV9hZF9zYW1wbGVz-AL50R6AAwGQA-ADmAPgA6gDAeAEAdIFBhCPpcSJFpAGAaAGI6gHuL6xAqgHmgaoB_PRG6gHltgbqAeqm7ECqAeDrbECqAfgvbECqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB4AcB0ggkCIBhEAEYHTICigI6CYBAgMCAgICgKEi9_cE6WJaZ45rQn4YD2AgCgAoFmAsBqg0CVVPQFQH4FgGAFwE&sigh=FTW5IiOJI2c&label=videoplayfailed[ERRORCODE] ]]></Error><Impression><![CDATA[ https://securepubads.g.doubleclick.net/pcs/view?xai=AKAOjssIvtxJDYccThIV84tqr6ZUrYLlMM811U5U_upx8B73FxA8RUSETlw5TMhNR0IyiKj5UeotBmSXnX3FFtM8h99jxtyMO5uZ59AG0-qtBqBNQuYsJnHX7G2rh7J3F82-Fu9uO9uBMHtUaxsLms7vErEIDpV_Ccgfw04OwUctPYiWEd1UWzAmN-uO7NpYgsAIwO_SWMDXuqjFpn3afPG7Qp67REHwyF8kHbzVo0kJYyuNDwWhbHnP42FvIFLzySNppcIjaYiLLVcIFsXgNW9E1cWHAlcoSGdavzeX2WzaRgWBWqYq0aItYUQReNvPG15oYuLARQQITNMqSqPKOuHRGnneltwnZtDf5-Ua&sai=AMfl-YTMmLZWebmY6eYf4MQ61GG4fEDm3k4IcSNuR950G_eRudS9xldmRzKKdzd-4GKACXi4iTP6n--Nk9B1G7xfdTEtz4sGua5hqZtVbA&sig=Cg0ArKJSzDFCMMH8SkS8EAE&uach_m=%5BUACH%5D&adurl= ]]></Impression><Creatives><Creative id="138381721867" AdID="H0Hrk8zCNZI" sequence="1"><CreativeExtensions><CreativeExtension type="UniversalAdId"><UniversalAdId idRegistry="googlevideo">H0Hrk8zCNZI</UniversalAdId></CreativeExtension></CreativeExtensions><Linear><Duration>00:00:10</Duration><TrackingEvents><Tracking event="start"><![CDATA[ https://pubads.g.doubleclick.net/pagead/interaction/?ai=B7lOY1glNZsiJDZnejvQPwfWSiAuD6qWVRgAAABABII64hW84AViLgsbBgwRgye60i8Ck2A-6AQo3Mjh4OTBfeG1syAEFwAIC4AIA6gInLzIxNzc1NzQ0OTIzL2V4dGVybmFsL3NpbmdsZV9hZF9zYW1wbGVz-AL50R6AAwGQA-ADmAPgA6gDAeAEAdIFBhCPpcSJFpAGAaAGI6gHuL6xAqgHmgaoB_PRG6gHltgbqAeqm7ECqAeDrbECqAfgvbECqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB4AcB0ggkCIBhEAEYHTICigI6CYBAgMCAgICgKEi9_cE6WJaZ45rQn4YD2AgCgAoFmAsBqg0CVVPQFQH4FgGAFwE&sigh=FTW5IiOJI2c&label=part2viewed&ad_mt=%5BAD_MT%5D ]]></Tracking><Tracking event="firstQuartile"><![CDATA[ https://pubads.g.doubleclick.net/pagead/interaction/?ai=B7lOY1glNZsiJDZnejvQPwfWSiAuD6qWVRgAAABABII64hW84AViLgsbBgwRgye60i8Ck2A-6AQo3Mjh4OTBfeG1syAEFwAIC4AIA6gInLzIxNzc1NzQ0OTIzL2V4dGVybmFsL3NpbmdsZV9hZF9zYW1wbGVz-AL50R6AAwGQA-ADmAPgA6gDAeAEAdIFBhCPpcSJFpAGAaAGI6gHuL6xAqgHmgaoB_PRG6gHltgbqAeqm7ECqAeDrbECqAfgvbECqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB4AcB0ggkCIBhEAEYHTICigI6CYBAgMCAgICgKEi9_cE6WJaZ45rQn4YD2AgCgAoFmAsBqg0CVVPQFQH4FgGAFwE&sigh=FTW5IiOJI2c&label=videoplaytime25&ad_mt=%5BAD_MT%5D ]]></Tracking><Tracking event="midpoint"><![CDATA[ https://pubads.g.doubleclick.net/pagead/interaction/?ai=B7lOY1glNZsiJDZnejvQPwfWSiAuD6qWVRgAAABABII64hW84AViLgsbBgwRgye60i8Ck2A-6AQo3Mjh4OTBfeG1syAEFwAIC4AIA6gInLzIxNzc1NzQ0OTIzL2V4dGVybmFsL3NpbmdsZV9hZF9zYW1wbGVz-AL50R6AAwGQA-ADmAPgA6gDAeAEAdIFBhCPpcSJFpAGAaAGI6gHuL6xAqgHmgaoB_PRG6gHltgbqAeqm7ECqAeDrbECqAfgvbECqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB4AcB0ggkCIBhEAEYHTICigI6CYBAgMCAgICgKEi9_cE6WJaZ45rQn4YD2AgCgAoFmAsBqg0CVVPQFQH4FgGAFwE&sigh=FTW5IiOJI2c&label=videoplaytime50&ad_mt=%5BAD_MT%5D ]]></Tracking><Tracking event="thirdQuartile"><![CDATA[ https://pubads.g.doubleclick.net/pagead/interaction/?ai=B7lOY1glNZsiJDZnejvQPwfWSiAuD6qWVRgAAABABII64hW84AViLgsbBgwRgye60i8Ck2A-6AQo3Mjh4OTBfeG1syAEFwAIC4AIA6gInLzIxNzc1NzQ0OTIzL2V4dGVybmFsL3NpbmdsZV9hZF9zYW1wbGVz-AL50R6AAwGQA-ADmAPgA6gDAeAEAdIFBhCPpcSJFpAGAaAGI6gHuL6xAqgHmgaoB_PRG6gHltgbqAeqm7ECqAeDrbECqAfgvbECqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB4AcB0ggkCIBhEAEYHTICigI6CYBAgMCAgICgKEi9_cE6WJaZ45rQn4YD2AgCgAoFmAsBqg0CVVPQFQH4FgGAFwE&sigh=FTW5IiOJI2c&label=videoplaytime75&ad_mt=%5BAD_MT%5D ]]></Tracking><Tracking event="complete"><![CDATA[ https://pubads.g.doubleclick.net/pagead/interaction/?ai=B7lOY1glNZsiJDZnejvQPwfWSiAuD6qWVRgAAABABII64hW84AViLgsbBgwRgye60i8Ck2A-6AQo3Mjh4OTBfeG1syAEFwAIC4AIA6gInLzIxNzc1NzQ0OTIzL2V4dGVybmFsL3NpbmdsZV9hZF9zYW1wbGVz-AL50R6AAwGQA-ADmAPgA6gDAeAEAdIFBhCPpcSJFpAGAaAGI6gHuL6xAqgHmgaoB_PRG6gHltgbqAeqm7ECqAeDrbECqAfgvbECqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB4AcB0ggkCIBhEAEYHTICigI6CYBAgMCAgICgKEi9_cE6WJaZ45rQn4YD2AgCgAoFmAsBqg0CVVPQFQH4FgGAFwE&sigh=FTW5IiOJI2c&label=videoplaytime100&ad_mt=%5BAD_MT%5D ]]></Tracking><Tracking event="mute"><![CDATA[ https://pubads.g.doubleclick.net/pagead/interaction/?ai=B7lOY1glNZsiJDZnejvQPwfWSiAuD6qWVRgAAABABII64hW84AViLgsbBgwRgye60i8Ck2A-6AQo3Mjh4OTBfeG1syAEFwAIC4AIA6gInLzIxNzc1NzQ0OTIzL2V4dGVybmFsL3NpbmdsZV9hZF9zYW1wbGVz-AL50R6AAwGQA-ADmAPgA6gDAeAEAdIFBhCPpcSJFpAGAaAGI6gHuL6xAqgHmgaoB_PRG6gHltgbqAeqm7ECqAeDrbECqAfgvbECqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB4AcB0ggkCIBhEAEYHTICigI6CYBAgMCAgICgKEi9_cE6WJaZ45rQn4YD2AgCgAoFmAsBqg0CVVPQFQH4FgGAFwE&sigh=FTW5IiOJI2c&label=admute&ad_mt=%5BAD_MT%5D ]]></Tracking><Tracking event="unmute"><![CDATA[ https://pubads.g.doubleclick.net/pagead/interaction/?ai=B7lOY1glNZsiJDZnejvQPwfWSiAuD6qWVRgAAABABII64hW84AViLgsbBgwRgye60i8Ck2A-6AQo3Mjh4OTBfeG1syAEFwAIC4AIA6gInLzIxNzc1NzQ0OTIzL2V4dGVybmFsL3NpbmdsZV9hZF9zYW1wbGVz-AL50R6AAwGQA-ADmAPgA6gDAeAEAdIFBhCPpcSJFpAGAaAGI6gHuL6xAqgHmgaoB_PRG6gHltgbqAeqm7ECqAeDrbECqAfgvbECqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB4AcB0ggkCIBhEAEYHTICigI6CYBAgMCAgICgKEi9_cE6WJaZ45rQn4YD2AgCgAoFmAsBqg0CVVPQFQH4FgGAFwE&sigh=FTW5IiOJI2c&label=adunmute&ad_mt=%5BAD_MT%5D ]]></Tracking><Tracking event="rewind"><![CDATA[ https://pubads.g.doubleclick.net/pagead/interaction/?ai=B7lOY1glNZsiJDZnejvQPwfWSiAuD6qWVRgAAABABII64hW84AViLgsbBgwRgye60i8Ck2A-6AQo3Mjh4OTBfeG1syAEFwAIC4AIA6gInLzIxNzc1NzQ0OTIzL2V4dGVybmFsL3NpbmdsZV9hZF9zYW1wbGVz-AL50R6AAwGQA-ADmAPgA6gDAeAEAdIFBhCPpcSJFpAGAaAGI6gHuL6xAqgHmgaoB_PRG6gHltgbqAeqm7ECqAeDrbECqAfgvbECqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB4AcB0ggkCIBhEAEYHTICigI6CYBAgMCAgICgKEi9_cE6WJaZ45rQn4YD2AgCgAoFmAsBqg0CVVPQFQH4FgGAFwE&sigh=FTW5IiOJI2c&label=adrewind&ad_mt=%5BAD_MT%5D ]]></Tracking><Tracking event="pause"><![CDATA[ https://pubads.g.doubleclick.net/pagead/interaction/?ai=B7lOY1glNZsiJDZnejvQPwfWSiAuD6qWVRgAAABABII64hW84AViLgsbBgwRgye60i8Ck2A-6AQo3Mjh4OTBfeG1syAEFwAIC4AIA6gInLzIxNzc1NzQ0OTIzL2V4dGVybmFsL3NpbmdsZV9hZF9zYW1wbGVz-AL50R6AAwGQA-ADmAPgA6gDAeAEAdIFBhCPpcSJFpAGAaAGI6gHuL6xAqgHmgaoB_PRG6gHltgbqAeqm7ECqAeDrbECqAfgvbECqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB4AcB0ggkCIBhEAEYHTICigI6CYBAgMCAgICgKEi9_cE6WJaZ45rQn4YD2AgCgAoFmAsBqg0CVVPQFQH4FgGAFwE&sigh=FTW5IiOJI2c&label=adpause&ad_mt=%5BAD_MT%5D ]]></Tracking><Tracking event="resume"><![CDATA[ https://pubads.g.doubleclick.net/pagead/interaction/?ai=B7lOY1glNZsiJDZnejvQPwfWSiAuD6qWVRgAAABABII64hW84AViLgsbBgwRgye60i8Ck2A-6AQo3Mjh4OTBfeG1syAEFwAIC4AIA6gInLzIxNzc1NzQ0OTIzL2V4dGVybmFsL3NpbmdsZV9hZF9zYW1wbGVz-AL50R6AAwGQA-ADmAPgA6gDAeAEAdIFBhCPpcSJFpAGAaAGI6gHuL6xAqgHmgaoB_PRG6gHltgbqAeqm7ECqAeDrbECqAfgvbECqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB4AcB0ggkCIBhEAEYHTICigI6CYBAgMCAgICgKEi9_cE6WJaZ45rQn4YD2AgCgAoFmAsBqg0CVVPQFQH4FgGAFwE&sigh=FTW5IiOJI2c&label=adresume&ad_mt=%5BAD_MT%5D ]]></Tracking><Tracking event="creativeView"><![CDATA[ https://pubads.g.doubleclick.net/pagead/interaction/?ai=B7lOY1glNZsiJDZnejvQPwfWSiAuD6qWVRgAAABABII64hW84AViLgsbBgwRgye60i8Ck2A-6AQo3Mjh4OTBfeG1syAEFwAIC4AIA6gInLzIxNzc1NzQ0OTIzL2V4dGVybmFsL3NpbmdsZV9hZF9zYW1wbGVz-AL50R6AAwGQA-ADmAPgA6gDAeAEAdIFBhCPpcSJFpAGAaAGI6gHuL6xAqgHmgaoB_PRG6gHltgbqAeqm7ECqAeDrbECqAfgvbECqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB4AcB0ggkCIBhEAEYHTICigI6CYBAgMCAgICgKEi9_cE6WJaZ45rQn4YD2AgCgAoFmAsBqg0CVVPQFQH4FgGAFwE&sigh=FTW5IiOJI2c&label=vast_creativeview&ad_mt=%5BAD_MT%5D ]]></Tracking><Tracking event="fullscreen"><![CDATA[ https://pubads.g.doubleclick.net/pagead/interaction/?ai=B7lOY1glNZsiJDZnejvQPwfWSiAuD6qWVRgAAABABII64hW84AViLgsbBgwRgye60i8Ck2A-6AQo3Mjh4OTBfeG1syAEFwAIC4AIA6gInLzIxNzc1NzQ0OTIzL2V4dGVybmFsL3NpbmdsZV9hZF9zYW1wbGVz-AL50R6AAwGQA-ADmAPgA6gDAeAEAdIFBhCPpcSJFpAGAaAGI6gHuL6xAqgHmgaoB_PRG6gHltgbqAeqm7ECqAeDrbECqAfgvbECqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB4AcB0ggkCIBhEAEYHTICigI6CYBAgMCAgICgKEi9_cE6WJaZ45rQn4YD2AgCgAoFmAsBqg0CVVPQFQH4FgGAFwE&sigh=FTW5IiOJI2c&label=adfullscreen&ad_mt=%5BAD_MT%5D ]]></Tracking><Tracking event="acceptInvitationLinear"><![CDATA[ https://pubads.g.doubleclick.net/pagead/interaction/?ai=B7lOY1glNZsiJDZnejvQPwfWSiAuD6qWVRgAAABABII64hW84AViLgsbBgwRgye60i8Ck2A-6AQo3Mjh4OTBfeG1syAEFwAIC4AIA6gInLzIxNzc1NzQ0OTIzL2V4dGVybmFsL3NpbmdsZV9hZF9zYW1wbGVz-AL50R6AAwGQA-ADmAPgA6gDAeAEAdIFBhCPpcSJFpAGAaAGI6gHuL6xAqgHmgaoB_PRG6gHltgbqAeqm7ECqAeDrbECqAfgvbECqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB4AcB0ggkCIBhEAEYHTICigI6CYBAgMCAgICgKEi9_cE6WJaZ45rQn4YD2AgCgAoFmAsBqg0CVVPQFQH4FgGAFwE&sigh=FTW5IiOJI2c&label=acceptinvitation&ad_mt=%5BAD_MT%5D ]]></Tracking><Tracking event="closeLinear"><![CDATA[ https://pubads.g.doubleclick.net/pagead/interaction/?ai=B7lOY1glNZsiJDZnejvQPwfWSiAuD6qWVRgAAABABII64hW84AViLgsbBgwRgye60i8Ck2A-6AQo3Mjh4OTBfeG1syAEFwAIC4AIA6gInLzIxNzc1NzQ0OTIzL2V4dGVybmFsL3NpbmdsZV9hZF9zYW1wbGVz-AL50R6AAwGQA-ADmAPgA6gDAeAEAdIFBhCPpcSJFpAGAaAGI6gHuL6xAqgHmgaoB_PRG6gHltgbqAeqm7ECqAeDrbECqAfgvbECqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB4AcB0ggkCIBhEAEYHTICigI6CYBAgMCAgICgKEi9_cE6WJaZ45rQn4YD2AgCgAoFmAsBqg0CVVPQFQH4FgGAFwE&sigh=FTW5IiOJI2c&label=adclose&ad_mt=%5BAD_MT%5D ]]></Tracking><Tracking event="exitFullscreen"><![CDATA[ https://pubads.g.doubleclick.net/pagead/interaction/?ai=B7lOY1glNZsiJDZnejvQPwfWSiAuD6qWVRgAAABABII64hW84AViLgsbBgwRgye60i8Ck2A-6AQo3Mjh4OTBfeG1syAEFwAIC4AIA6gInLzIxNzc1NzQ0OTIzL2V4dGVybmFsL3NpbmdsZV9hZF9zYW1wbGVz-AL50R6AAwGQA-ADmAPgA6gDAeAEAdIFBhCPpcSJFpAGAaAGI6gHuL6xAqgHmgaoB_PRG6gHltgbqAeqm7ECqAeDrbECqAfgvbECqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB4AcB0ggkCIBhEAEYHTICigI6CYBAgMCAgICgKEi9_cE6WJaZ45rQn4YD2AgCgAoFmAsBqg0CVVPQFQH4FgGAFwE&sigh=FTW5IiOJI2c&label=vast_exit_fullscreen&ad_mt=%5BAD_MT%5D ]]></Tracking></TrackingEvents><VideoClicks><ClickThrough id="GDFP"><![CDATA[ https://pubads.g.doubleclick.net/pcs/click?xai=AKAOjstinCD1oQSX_6mzjWsg4BO_b-EcP7y1Tvm5e9UOXIAPNSww33Hq3TgXzCsIn5x00AX_W-Pe2o_-7MOdxmQWH_aIbOaD3RRjcjUJTt14WfrQQvhwdezDeEq_rUQaLlnbVfQ9WYAU6pt6pq3pNczHMut0AjTvznDpM7bRQdk8myeSFMJfbRBW89XKwuJbxjqpISleRyX7kbJBIhxE5QnLjnsQaBlagj3sBBDNul2yT-bQaPk072H0wCdUaY7FhjmgbJGo1vNjrCfxN6C0tvQtJPNbq9H3f26aVcS5BBPdcKbz7O9kw-YveEg8VHyOpqd6L4DHunAlP-1yFNDetqmjV7qJis4YAjznCZp7&sai=AMfl-YTsIjkjcn6mkTlPoHwTKsfGvXSxLebewv6VHSxPSXhSoNbZJHOQ5DrPGwTDnlfkmjZHmU_RsB3YEam3R6iXIlAjFJjib66hQjAjXA&sig=Cg0ArKJSzHfPC6TL_iNO&fbs_aeid=%5Bgw_fbsaeid%5D&adurl=https://googleads.github.io/googleads-ima-html5/vsi/ ]]></ClickThrough></VideoClicks><Icons><Icon program="GoogleWhyThisAd" width="18" height="18" xPosition="right" yPosition="bottom"><StaticResource creativeType="image/png"><![CDATA[ https://imasdk.googleapis.com/formats/wta/help_outline_white_24dp_with_3px_trbl_padding.png?wp=ca-pub-9939518381636264 ]]></StaticResource><IconClicks><IconClickThrough><![CDATA[ https://adssettings.google.com/whythisad?source=display&reasons=ARquV55GfwMae4MnkmZvJJbWdETF9uopzk6vfHGA1NEBxjpddScWV6GQk-KHf6e9yArF1dO8EdQGR5Es7YsHdpdbzIXFaYcGyfEMQpmh1DhsG8ISJoRe-54lVRP7w3b9Fs1bQYEkdz1cp4G8WYKOzWj2gku9kKkPTWE-y3MZzE-9kGZMi2AZgrP_7ibYQPy3-eUsiZ-fzRjc2VmqEKF6GLUXg-YYAfXKWEImD9Zm3O4X5DMjcflWyUvnbSMn5BGPzKH_9UaOEGKMOev76pX1s5tPRii0jEL50_GqifZe2II5lLYzXbYAwAiYw0B65C3lpsR57lZVIrfABFVmS19UO1B1txw8GtYlXFEcg-lduiM6wqUS8-GIvz-NxuWPIqomGzKQmGdQBjFpOeFF4tuLf5g-B_BLKKzu3moSmWPYfAAV6JkSoFo9c9uC-usbV_ZEaRhoRBMVZTs9f2IDntufn8BAgd3Q9Xacoc0YwzDEK5C-udT1HVqUOrHuI2T8ZV5rNyx3VGXop-N3MhoScXWBX2Q5YhMx5WYVQweLs9aJI96b0yPhTKe5QOkULjZ0bH7LQjQICerRxAHJvC80SXmkuRKDylnhHzsQAf_s8Ge-DU-ALTVCpvj_UTuceJaYfLiN3N0M37ZbUA_-1eMmCUM1kWRky-fVimc7xOI9Qfn5mJ5ghJ5KHKHsx-5a05P89kY69lXbPE2bjRq3o6qquFOolCtlTY2i33k8CaZU4qzcwbBMksblgHoVQky8wH34GAqTm9F9NgfympqCpa8Ojv-draov9TXar1CAW0IwaWyhXFIhZzyfhXNqds1Yg78QyfZzcKcvd0P_y_CJ1BcYaTCaEe2XjFAuaKgDsgN7fo0g7ZOliyBs9KnfDe6VA0oSWYui1bZiviNGi26RA9oPz2PAr8SnTsO2BVMW5uVIGw&opi=122715837 ]]></IconClickThrough></IconClicks></Icon></Icons><MediaFiles><MediaFile id="GDFP" delivery="progressive" width="640" height="360" type="video/mp4" bitrate="143" scalable="true" maintainAspectRatio="true"><![CDATA[ https://redirector.gvt1.com/videoplayback/id/37685dc1cfc45f63/itag/18/source/dclk_video_ads/requiressl/yes/acao/yes/mime/video%2Fmp4/ctier/L/ip/0.0.0.0/ipbits/0/expire/1716346422/sparams/ip,ipbits,expire,id,itag,source,requiressl,acao,mime,ctier/signature/5509EF976AC3A68109D6125C48B682450AC187C3.6AAE6040A4811B920AD6EC7213FC1FA8B17F99D6/key/ck2/file/file.mp4 ]]></MediaFile><MediaFile id="GDFP" delivery="progressive" width="1280" height="720" type="video/mp4" bitrate="240" scalable="true" maintainAspectRatio="true"><![CDATA[ https://redirector.gvt1.com/videoplayback/id/37685dc1cfc45f63/itag/22/source/dclk_video_ads/requiressl/yes/acao/yes/mime/video%2Fmp4/ctier/L/ip/0.0.0.0/ipbits/0/expire/1716346422/sparams/ip,ipbits,expire,id,itag,source,requiressl,acao,mime,ctier/signature/65D27331114EA9F79815152D62A080F7D258F481.A1C6FBE4E2AD68FB9C561A46B210D08E560A842A/key/ck2/file/file.mp4 ]]></MediaFile><MediaFile id="GDFP" delivery="progressive" width="1280" height="720" type="video/mp4" bitrate="262" scalable="true" maintainAspectRatio="true"><![CDATA[ https://redirector.gvt1.com/videoplayback/id/37685dc1cfc45f63/itag/106/source/dclk_video_ads/requiressl/yes/acao/yes/mime/video%2Fmp4/ctier/L/ip/0.0.0.0/ipbits/0/expire/1716346422/sparams/ip,ipbits,expire,id,itag,source,requiressl,acao,mime,ctier/signature/1CAD36497E23951E0B228DBC5E368DB04E7E64DD.267C95C3B314D79365F53E26B9E0C776161B3766/key/ck2/file/file.mp4 ]]></MediaFile><MediaFile id="GDFP" delivery="progressive" width="854" height="480" type="video/mp4" bitrate="186" scalable="true" maintainAspectRatio="true"><![CDATA[ https://redirector.gvt1.com/videoplayback/id/37685dc1cfc45f63/itag/109/source/dclk_video_ads/requiressl/yes/acao/yes/mime/video%2Fmp4/ctier/L/ip/0.0.0.0/ipbits/0/expire/1716346422/sparams/ip,ipbits,expire,id,itag,source,requiressl,acao,mime,ctier/signature/23A209C8BD987453F1F47BF5C222095239B550C6.A8BD5CBDB3BC165BF0DC7A33832FF2C5707185A4/key/ck2/file/file.mp4 ]]></MediaFile><MediaFile id="GDFP" delivery="streaming" width="426" height="240" type="application/x-mpegURL" minBitrate="49" maxBitrate="258" scalable="true" maintainAspectRatio="true"><![CDATA[ https://redirector.gvt1.com/api/manifest/hls_variant/requiressl/yes/source/dclk_video_ads/id/37685dc1cfc45f63/itag/0/playlist_type/LIVE/acao/yes/mime/application%2Fx-mpegURL/ctier/L/ip/0.0.0.0/ipbits/0/expire/1747860822/sparams/ip,ipbits,expire,requiressl,source,id,itag,playlist_type,acao,mime,ctier/signature/962F2CACDA746EF5AABEEC99FA7788855C68A9AA.B0E2B7CD359714C9700DD4FD0C20198CC0056E6F/key/ck2/file/index.m3u8 ]]></MediaFile><MediaFile id="GDFP" delivery="streaming" width="426" height="240" type="application/dash+xml" minBitrate="49" maxBitrate="258" scalable="true" maintainAspectRatio="true"><![CDATA[ https://redirector.gvt1.com/api/manifest/dash/requiressl/yes/source/dclk_video_ads/id/37685dc1cfc45f63/itag/0/playlist_type/LIVE/acao/yes/mime/application%2Fdash+xml/ctier/L/ip/0.0.0.0/ipbits/0/expire/1747860822/sparams/ip,ipbits,expire,requiressl,source,id,itag,playlist_type,acao,mime,ctier/signature/8DA05CA7AA94908F6E59A38DC68817B4F988DE24.114114532C4EC15210379AAFAA793B3F842B97C2/key/ck2 ]]></MediaFile></MediaFiles></Linear></Creative><Creative id="138381056765" sequence="1"><CompanionAds><Companion id="138381056765" width="300" height="250"><StaticResource creativeType="image/png"><![CDATA[ https://pagead2.googlesyndication.com/simgad/4446644594546952943 ]]></StaticResource><TrackingEvents><Tracking event="creativeView"><![CDATA[ https://securepubads.g.doubleclick.net/pcs/view?xai=AKAOjsv9BVqYLavGzNLHr3J76aomVrYAhjhSUnKZ5N0rJcF9mpipaU1ii0Fp9aXoIliWyaJko-tdP3Agkk27xq9ryhLfdXRvnwVhu1ScungS7A2hgwjF3rLJzyW_Q9VX8JGb0Re2RhE9p4ii7p5qyPAPH7Aj6OhdRTaoVX8VV81NAuVW6JtL9UlyyNMCg-tMfxz3iRQPNYiFAR2Ky_DGTlgQtJOF2Vjzl4ExBnxiJZMHCoIPkMBVFF2xfAeHhNFvQWoJm4llkAJVgNXKY1IErlS_WYisEer8Ua0vkmDFIW31GMnjAjrRp_ov5nd-FaA3d_ChKDizVwPhv0fb60poyeFv4gR6-XTf82-LIJKH&sai=AMfl-YQnOY7eHivn7xycmwLdR6tpkDYb1zsQOzmwOsbiao8lt-10-7WId--Bgk9XcQFPGylN8kxBz3JMUZabC4Qfr7gSopNak3Ac_42OoQ&sig=Cg0ArKJSzHfaxg5W8T3ZEAE&uach_m=%5BUACH%5D&adurl= ]]></Tracking></TrackingEvents><CompanionClickThrough><![CDATA[ https://pubads.g.doubleclick.net/pcs/click?xai=AKAOjsvOmKZJOhfwc3XDwmvH4Y8tODCF_e2tGXpJYwE3zNufqPFLbW7NAQSmWmW8LCkgqxiPkgSevOyqe64tx5HKIs4AMyQDJACWLaMbs276R22gUs_ymZDOz7vIFtujFTMDVCFHDgX9-6KRDVYso6m2BbJJesgGgUtCHGIGivWgYx9S-uKWeB1DKSMUCFJjNLlPZQT48Fv6bxjtGYyV4VqIzEuI4rQGipovmCg-pgzBQOQzCAtGadId88njlNmMPD0MYzPdZOdSmt0sd25qaz5qn9tKzC4_SoNkF72R9n6qpPDI4kMN0Pn7NgQVf_Ip6_kd3cTdF_omFo96QtdZHknF4i17GlbNz41EdvtP&sai=AMfl-YTYz55rKomh2wmewErmlTOUVOYTGeSgsL_ojexHWmuk7hZ_fkvstBRiUq6Se6a6GI_i6Pl5UOV2folFBdisADGCrnnXzSxVaTmBbw&sig=Cg0ArKJSzIQEcy97Eaor&fbs_aeid=%5Bgw_fbsaeid%5D&adurl=https://googleads.github.io/googleads-ima-html5/vsi/ ]]></CompanionClickThrough></Companion><Companion id="138381188849" width="728" height="90"><StaticResource creativeType="image/png"><![CDATA[ https://pagead2.googlesyndication.com/simgad/7802555171787573026 ]]></StaticResource><TrackingEvents><Tracking event="creativeView"><![CDATA[ https://securepubads.g.doubleclick.net/pcs/view?xai=AKAOjssBUBJuOPgJifCPDqWsolkX8P8IbKjvmcqio5RYb4s1mHpSUrw0r-VolwA_g3vGIjstjggJlDjhO64QDfRR2SvFujKOFcwNKxQoNkAMOAcjo-fLtr5CzZwwY_NsGG3XGB4MED09ECi1PxfMehRWDDagxmVtcT_1kCpwOgkQOQfMNuwumR8x9RmrLB_l_R0Wtb7PAjK_C_G6nrgvMHGILYVqFLMU3a3EbfMkzBvdGDlMpL4vZ9KuYSS_UGOx96YM3857dzFlANjK9Tx2nql3UYak7y73I3U_LXDVpLJOZdAwHja5oAmD9za-9-kcz5QBvwrHcfAOzkf98e8lPxJZf0boq9GjY7xHiYd2&sai=AMfl-YTrFqcwGOAL1t74qvDzHUlCPFZCtlJi5KCiQXLA_sQ9EMfGGvHAjtIWjCVvmXQdJ99sU_Lne2M2VgE3z4pW441OqVII3N_xoO-H6g&sig=Cg0ArKJSzJ0VhuD0X-sEEAE&uach_m=%5BUACH%5D&adurl= ]]></Tracking></TrackingEvents><CompanionClickThrough><![CDATA[ https://pubads.g.doubleclick.net/pcs/click?xai=AKAOjsvnMff9Hsu4FS6z3O5_C7DofZsRYLOdpTOrUZlS6euIZWTAa-H-gbUqUPTe8zwCFFo6yyrQluj2RxnAjD7Yj5ZqKDf7VhglIFf92R5xHmfvgD8o-XaWYEXU9CZUKYe2FlVJEByneMfbxCpHy_rlsrEHZ4A_S__5Df8yogyPD5BqOim9grKJ4FPwEoa0JTJ4vYuVFiLa0W2r5C27qpiCGZgUp67rWWQ3TGM3dvxjdNYuqqHvvXn4DlJ0eSt61RswNXb-UIoLVDHxjJ_MNy4QsBs30y82sYDHe5cnuFVsUnkAetNJEJ0eBu4Sjevz_39yFGUmZpZyNjGKi8Sk0Dbgv5sIFoPzE62F2XyQ&sai=AMfl-YS_yBeVEf8BXy0Lbtt9clilaf7kPleuN_YglgT4pkVrPGTxMnDc4LPM6zibWdR6_Ds7zn85jlL6wp9doFvUSjDNtB7lyrSeXXzQnQ&sig=Cg0ArKJSzP9j2KLPyghN&fbs_aeid=%5Bgw_fbsaeid%5D&adurl=https://googleads.github.io/googleads-ima-html5/vsi/ ]]></CompanionClickThrough></Companion></CompanionAds></Creative></Creatives><Extensions><Extension type="waterfall" fallback_index="0"/><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>20000</BandwidthKbps></Extension><Extension type="metrics"><FeEventId>1glNZoKoDO3xjvQP5qOO8AY</FeEventId><AdEventId>CMjM45rQn4YDFRmvgwgdwboEsQ</AdEventId></Extension><Extension type="ShowAdTracking"><CustomTracking><Tracking event="show_ad"><![CDATA[ https://securepubads.g.doubleclick.net/pcs/view?xai=AKAOjsvwj2OhHPIoAq6SBTIXN9c46FQDaH6tsr8OtzQ89mJvNc3disqQ2KE97kkYdnmRECiS9uOqdXfZRtvb4oCdgtO3Zpyx7GYBaSqHSm2IyxaQ88Ogh8WueMk7BytKk3gN2jSTeIRXsf_PxJlqjJipkOEIASsZVbPBSRqJJtiy_pV8eSd0sI4UVOnR2BgZmKm18GmaPR5lPnBDfgE1mVWlWFqv985IrpyrgHaaiK8VXkKgJocg6fNv9mdhBMsSpcE8nfBs0iNJe1VJnwDy16tKQE0OOlBYmo-Z0GMAuxbF2tdqw7nQ42-rmc1C3jcJ03mafortGtozZ8WpoPmyGPpSj356_49mU9wru9s4ogk&sai=AMfl-YTPu3cP7ssCqbjXeiqCdI2aVM0eKt3pGwyPUptGcQ4GJidK8n-n4ZpjW7PKHBr3uf0pjCdYTMDFiO_7PIECLqj25pdy81NBLmN1Kw&sig=Cg0ArKJSzHSQ31Atd5y7EAE&uach_m=%5BUACH%5D&adurl= ]]></Tracking></CustomTracking></Extension><Extension type="video_ad_loaded"><CustomTracking><Tracking event="loaded"><![CDATA[ https://pubads.g.doubleclick.net/pagead/interaction/?ai=B7lOY1glNZsiJDZnejvQPwfWSiAuD6qWVRgAAABABII64hW84AViLgsbBgwRgye60i8Ck2A-6AQo3Mjh4OTBfeG1syAEFwAIC4AIA6gInLzIxNzc1NzQ0OTIzL2V4dGVybmFsL3NpbmdsZV9hZF9zYW1wbGVz-AL50R6AAwGQA-ADmAPgA6gDAeAEAdIFBhCPpcSJFpAGAaAGI6gHuL6xAqgHmgaoB_PRG6gHltgbqAeqm7ECqAeDrbECqAfgvbECqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB4AcB0ggkCIBhEAEYHTICigI6CYBAgMCAgICgKEi9_cE6WJaZ45rQn4YD2AgCgAoFmAsBqg0CVVPQFQH4FgGAFwE&sigh=FTW5IiOJI2c&label=video_ad_loaded ]]></Tracking></CustomTracking></Extension><Extension type="esp"><EspLibrary LibraryName="esp.criteo.com" LibraryUrl=""/><EspLibrary LibraryName="uidapi.com" LibraryUrl=""/><EspLibrary LibraryName="liveramp.com" LibraryUrl=""/><EspLibrary LibraryName="liveintent.com" LibraryUrl=""/></Extension><Extension type="heavy_ad_intervention"><CustomTracking><Tracking event="heavy_ad_intervention_cpu"><![CDATA[ https://googleads.g.doubleclick.net/pagead/interaction/?ai=B7lOY1glNZsiJDZnejvQPwfWSiAuD6qWVRgAAABABII64hW84AViLgsbBgwRgye60i8Ck2A-6AQo3Mjh4OTBfeG1syAEFwAIC4AIA6gInLzIxNzc1NzQ0OTIzL2V4dGVybmFsL3NpbmdsZV9hZF9zYW1wbGVz-AL50R6AAwGQA-ADmAPgA6gDAeAEAdIFBhCPpcSJFpAGAaAGI6gHuL6xAqgHmgaoB_PRG6gHltgbqAeqm7ECqAeDrbECqAfgvbECqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB4AcB0ggkCIBhEAEYHTICigI6CYBAgMCAgICgKEi9_cE6WJaZ45rQn4YD2AgCgAoFmAsBqg0CVVPQFQH4FgGAFwE&sigh=FTW5IiOJI2c&label=heavy_ad_intervention_cpu ]]></Tracking><Tracking event="heavy_ad_intervention_network"><![CDATA[ https://googleads.g.doubleclick.net/pagead/interaction/?ai=B7lOY1glNZsiJDZnejvQPwfWSiAuD6qWVRgAAABABII64hW84AViLgsbBgwRgye60i8Ck2A-6AQo3Mjh4OTBfeG1syAEFwAIC4AIA6gInLzIxNzc1NzQ0OTIzL2V4dGVybmFsL3NpbmdsZV9hZF9zYW1wbGVz-AL50R6AAwGQA-ADmAPgA6gDAeAEAdIFBhCPpcSJFpAGAaAGI6gHuL6xAqgHmgaoB_PRG6gHltgbqAeqm7ECqAeDrbECqAfgvbECqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB4AcB0ggkCIBhEAEYHTICigI6CYBAgMCAgICgKEi9_cE6WJaZ45rQn4YD2AgCgAoFmAsBqg0CVVPQFQH4FgGAFwE&sigh=FTW5IiOJI2c&label=heavy_ad_intervention_network ]]></Tracking></CustomTracking></Extension><Extension type="IconClickFallbackImages"><IconClickFallbackImages program="GoogleWhyThisAd"><IconClickFallbackImage width="640" height="226"><AltText>Why this ad? This ad is based on: * General factors like the app youre using, the time of day, or your approximate location. You can update your options for ads in this devices settings.</AltText><StaticResource creativeType="image/png"><![CDATA[ https://imasdk.googleapis.com/formats/wta/contextual_bks.png?wp=ca-pub-9939518381636264 ]]></StaticResource></IconClickFallbackImage></IconClickFallbackImages></Extension><Extension type="companion_about_this_ad"><Icon program="GoogleWhyThisAd" width="18" height="18" xPosition="right" yPosition="bottom"><StaticResource creativeType="image/png"><![CDATA[ https://imasdk.googleapis.com/formats/wta/help_outline_white_24dp_with_3px_trbl_padding.png?wp=ca-pub-9939518381636264 ]]></StaticResource><IconClicks><IconClickThrough><![CDATA[ https://adssettings.google.com/whythisad?source=display&reasons=ARquV54LoDrT3cZwdESjtRyqmeBbQ-O1GBOkBVKddnltvFeJe6rd6e334ZrHi8SMBaQjBRwXYU2SXqZR_DvnAuXDhvfNdkDymA7K3gZH39v0SioRPF9agX1cqkVPzlU9KvewCNFFviHa_R96TvC3DFnNZR7s6Iy2n386gxxjmF0PTqSCw5CPt67BVDxv3X_FifIkCFhV49tm-qxNuvue7I6VbwvxMFnc2yDv0NbDMfVDcG6sgTwjIXorcPLPoy4YR5MT8GCNww1Q0t3XMgTOYY1wKCB9_TDFB1JU1MqsV19GZYrl07KVLaQN1BjnwG9KT0JkRwZfJGh0cblnZV0a1K9C4M8Q_GyrcbQ1uNt7-9ruEF0SKRF457Rp0n7Wbce7_DjOVR3X0OcY5LNnv34czUYv68aJc3sdcuRNhoCXEzsqdt5Gk9l04-aVu_V7hHRz_m4vXsNeJpCWe0ufHbw3MjsAz9NGcCK76HMRDoJ9R_32_XlBWQUUQrkLdRtdPoFc7lWc8jS9vnkVxp_AQcE_qwf0nhQD5eLnvMV6f24ENGXSCHqUsxVm9g8vNJ3tUosg7k9CKSnbsKxXkhooYhWJ0Bv9BmNEGxREP9TamwN0DUiwE5MRlKZ0purOQVg5dnacW6LaOjsOlYzwutTxKX_eNFt__ZaukLxP0OhxT6-F_zgdg824yUNZydiWbi9NSBr90wVJDFPZmJzL495WHL9BRKKU7kaUWAyBu6pTCsPmJfsbrSbXAsrR4GWu6FZCjcSTurcwnH-ww_RfYGqjTB6M3Qzw2-mqWdKPONY7oGtxnAIPKf5nzxAEDD9thnD7_jXcvtE0k-9Ug4v0rV7fzIC4I0nsUOqGL_4oW5wpu3N2ydMtIuf2haNKySjeWvzbCKPS4FU3G1Psj7EOd84dG0k1EDIf&opi=122715837 ]]></IconClickThrough><IconClickFallbackImages><IconClickFallbackImage width="640" height="226"><AltText>Why this ad? This ad is based on: * General factors like the app youre using, the time of day, or your approximate location. You can update your options for ads in this devices settings.</AltText><StaticResource creativeType="image/png"><![CDATA[ https://imasdk.googleapis.com/formats/wta/contextual_bks.png?wp=ca-pub-9939518381636264 ]]></StaticResource></IconClickFallbackImage></IconClickFallbackImages></IconClicks></Icon></Extension></Extensions></InLine></Ad></VAST>',
                    playback_methods: ['auto_play_sound_off'],
                    frameworks: ['vpaid_2_0'],
                    // "asset_url": "https://localhost:7070/creative/71739d10-c5f3-4e72-aa21-4f05d6658680.xml",
                  },
                },
              },
            ],
          },
        ],
      });
    } else if (tagid === 15504193 || tagid === 15504209) {
      //delete the zeros to make this work
      res.send({
        version: '3.0.0',
        tags: [
          {
            uuid: uuid,
            tag_id: tagid,
            auction_id: uuidv4(),
            nobid: false,
            no_ad_url:
              'https://nym1-ib.adnxs.com/it?an_audit=0&referrer=https%3A%2F%2Fcafedelites.com%2Fcheesy-scrambled-eggs-in-avocado%2F&e=wqT_3QKnD6CnBwAAAwDWAAUBCML3kpgGEPm6z6-R5Zq3ORj4n6T_rou04GkqNgkAAAkCABEJBywAABkAAABAM7MvQCEREgApEQnwhjEAAADgo3AQQDDBprIHOOkbQOkbSABQAFj8vltgAGiC15cBeACAAQGKAQCSAQNVU0SYAQGgAQGoAQGwAQC4AQPAAQDIAQLQAQDYAQDgAQDwAQCKApUBdWYoJ2EnLCA1MDUxMTAyLCAxNjYxMjU0NTk0KTt1ZignaScsIDczOTY3NzksIDE2NjIdACxnJywgMTgzODMzNTBGHgAsYycsIDUzMzExMzUzRh4AMHInLCAzNjkyMjU1NDk2HwDwi5IC5QUhanFLZW9najU3clVaRU0zZWg3QUJHQUFnX0w1Yk1BRTRBRUFBU0p0SlVNR21zZ2RZQUdEd0JtZ0FjQUI0QUlBQkFJZ0JBSkFCQVpnQkFhQUJBcWdCQXJBQkFMa0JhYnB2ZHJEMzlUX0JBV202YjNhdzlfVV95UUVBQUFBQUFBRHdQOWtCQUFBBQ50OERfZ0FhdTd3d1AxQVdabXBrQ1lBZ0NnQWdLMUFnASMEQzkJCNhEQUFnRElBZ0RRQWdEWUFnRGdBZ0RvQWdENEFnQ0FBd0dZQXdHaUF4Y0lzTVRpSWhBQ0dBRXRBAUPwcURJSFpHVm1ZWFZzZEtJRERnaWxzWW9rRUFRWUFTMWtWRDQ3b2dNVENLVFlfU01RQ2hnQkxiWVRqajh5QTNWdWNib0RDVTVaVFRJNk5USTFOLUFEalMtQUJQMlk0d2lJQk51WjR3aVFCQUNZQkFUQkJBQQF2BQEIeVFRBQgFARhOZ0VBUEVFBQwFASBDSUJZa3BxUVUFDhxBQUR3UDdFRg0NARAEQkIdPwB5BSgcREFaMDdpUDkyKAAAWhUo8LZQQV80QVhSc0FqcUJTWUlCQklpQUFBRV9HcV9lUWZuSEJ1ejdFVTMwTm1FcDBhZWtwbHB0cXg2OWJJUTJHOWlBdW9GSmdnREVpSUFBQVBVQzRqWHVMLUdGdDhwOXhmcW9MdDJwb01PTDRUQm84WXlDbmpFNXFBYThBWDJnLUlJLUFYZXBiUUNnZ1lEVlZORWlBWUFrQVlCbUFZQW9RYk56TXpNek13VVFLZ0dCTElHSkFrQUFBQUEB7gRBQj0bBEJrBRMFAQBDHRhwTGdHQ3ZnSG1OTUktQWVTMUFqNEI2UFhDUGdIbGYFFDRDOXdnLpoCmQEhZEJaN0LpAjRQeS1XeUFBS0FBeHpjegWPEEZFQTZDLuEBEDBDTkwwEYEMRHdQMR2BAEYRGAxBQUFHHRgARx0YAEgdGAxIZ0FpLv0C8P13Li7YAv5D4AKdxivqAjlodHRwczovL2NhZmVkZWxpdGVzLmNvbS9jaGVlc3ktc2NyYW1ibGVkLWVnZ3MtaW4tYXZvY2Fkby-AAwCIAwGQAwCYAxegAwGqAwDAA-CoAcgDANgDzoNS4AMA6AMA-AMBgAQAkgQNL3V0L3YzL3ByZWJpZJgEAKIEDDE1NC42LjIyLjIyNagEgfsKsgQQCAEQBBiABSDoAigCMAA4ArgEAMAE2I-5IsgEANIEDjkzNzEjTllNMjo1MjU32gQCCADgBADwBM3eh7ABiAUBmAUAoAX___________8BwAUAyQUAAAAAAADwP9IFCQkAAKl0bNgFAeAFAfAFjwH6BQQIABAAkAYBmAYAuAYAwQYJIijwv9AGljDaBhYKEAkRGQFcEAAYAOAGBPIGAggAgAcBiAcAoAdAugcRAUhUGAAqBDEtLS047h5AAcgHy8QF0gcNCRE8AToI2gcGCSn0XQHgBwDqBwIIAPAHrIGHA4oIwwIKvgIAAAGCyn1t0DluaykV8915AlHCbL9KJDtJMQbtBTEqO-WXJf_QTwqJu7E3IeDCgY0syB1glVKEz57OnZkulabRB-q6bW0QMj_FxQgmIRhoMkULmsR87UQjB9t0Jr1XeiCQf8NcHLorJX5Sb0RiF-kGvSxyuOKIYBMmKG0PAlQE1ZKTUnWxaY8irF53H8bsQI0T22uXROxJh37_zl9N2WUODMIE3OI-JibYLeAUwLKRCyozIQYRdD3rnBcWx5DTPNL0vQ94S6gMmkuDZiCK7B3sWmuYnQoH8DfN2-vsrTLVh37S4iuyeT3NpldP3Mrga2BMcGnAo3la3GC8n6_bv95o8bV5OvY1Zixq2eEuRJ5mkEO5xZ-3rd4Sj4bF9d5VStcOcyoN6cCnO1xYcJbFPjNZ4WdxcZ1D-d_sO3tZUyQQAZUIAACAP5gIAQ..&s=54ec52e927831707c8323705a7c4f2ac36ae001c',
            timeout_ms: 0,
            ad_profile_id: 713501,
            rtb_video_fallback: false,
            ads: [
              {
                cpm: 50.0,
                cpm_publisher_currency: 50.0,
                publisher_currency_code: '$',
                content_source: 'rtb',
                ad_type: 'video',
                usersync_url: 'https%3A%2F%2Facdn.adnxs.com%2Fdmp%2Fasync_usersync.html',
                buyer_member_id: 9371,
                advertiser_id: 5051102,
                creative_id: uuidv4(),
                media_type_id: 4,
                media_subtype_id: 64,
                brand_category_id: 27,
                brand_id: 143,
                client_initiated_ad_counting: true,
                rtb: {
                  video: {
                    player_width: 640,
                    player_height: 360,
                    duration_ms: 30000,
                    playback_methods: ['auto_play_sound_off'],
                    frameworks: ['vpaid_2_0'],
                    asset_url: 'https://localhost:7070/creative/71739d10-c5f3-4e72-aa21-4f05d6658680.xml',
                  },
                },
              },
            ],
          },
        ],
      });
    } else {
      res.send({
        version: '3.0.0',
        tags: [
          {
            uuid: '3382364a5cbaafa7',
            tag_id: tagid,
            auction_id: '4487644404402535767',
            nobid: false,
            no_ad_url:
              'https://nym1-ib.adnxs.com/it?an_audit=0&referrer=https%3A%2F%2Fminutia.online%2Fblogs%2Fmindful-minutia%2Fzero-waste-wonders-top-shelf-eco-friendly-laundry-detergents-to-consider&e=wqT_3QLtCaDtBAAAAwDWAAUBCNPS9bMGENf6utXymdSjPhjHy-rPirGk_mQqNgkAAAkCABEJBywAABkAAADgo3AaQCEREgApEQn0dQExFNBE2PD0DEAw8dabBjjpG0DpG0gAUABY_L5bYABo1vJNeACAAQGKAQCSAQNVU0SYAcoHoAFaqAEBsAEAuAEBwAEAyAEC0AEA2AEA4AEA8AEA2AL-Q-ACncYr6gJ1aHR0cHM6Ly9taW51dGlhLm9ubGluZS9ibG9ncy9taW5kZnVsLW1pbnV0aWEvemVyby13YXN0ZS13b25kZXJzLXRvcC1zaGVsZi1lY28tZnJpZW5kbHktbGF1bmRyeS1kZXRlcmdlbnRzLXRvLWNvbnNpZGVygAMAiAMBkAMAmAMXoAMBqgMAwAPYBMgDANgDAOADAOgDAPgDAYAEAJIEDS91dC92My9wcmViaWSYBACiBA45Ni4yMjQuMjM3LjEwM6gE9owCsgQPCAAQARjYBSBaKAAwADgCuAQAwATYj7kiyAQA2gQCCADgBAHwBP28zNYBiAUBmAUAoAXS-_eUx83NxRPABQDJBQAAAAAAAPA_0gUJCQAAACV-cNgFAeAFAfAFhZtK-gUECAAQAJAGAJgGALgGAMEGBSIwAPC_0Ab54wLaBhYKEAkSGQGgEAAYAOAGAfIGAggAgAcBiAcAoAcBugcIKgQxWU5ZQAHIB_nLAtIHDQkRMwExCNoHBgFp9KMCGADgBwDqBwIIAPAH0r2eA4oIyAQKwwQAAAGQWeNsOD5HUM8qrr1XVnQDNr23Uo1SzeAknFbpF1pV8C3ao3wBzqVyRpDVZbwXBqEno947osZIcjI7jFeM13UNstxoA7Ed3lCvG7mtI4XhbVq_j25FYsxr8ir2RQ-ttTTnmXevs9eIZiBdGgMZRg6KePdMp9jPK-V_KUyRrmxA30dqRw7TW_wtJ_BDFgo42w8ys-2jqKWNaR2eJNTRRKDckogZ9M83TNcUzx0y0CeMJ5mtMSO7ELb8j2tk8vF56-Q2UrcsOr851rinLFwZ0jhpfbe0GYZg90mdmmL4zItWgcpTzGn5WFJDvZt8jx15igYhnhmukxPkrXIB0M-P6aiCBROL4WGelXdumN_MbqHwocJxzTjz7makKVTagbf5lGQ5TIJ4zVcGZnpYI2ZQWO_QjtYmoFqJGgpqWJE9xBe4JdxTxE5vd_ArXRFhxIdNf3XbixblMdqBRCNxOQaxuxGwTeQr_dFz2J74Dk1n4LTskSnmHtjo2ugAS3ImRtVTRvf-0AcdRdgMBaV78CSAgb9n8aXzTYJmww5x2HBBzWwoJ3XBHmeSnm_L6vkk4--KobN6sRUemZ7qzjzDTqQdG13cawcJw9I3LeWZYhvqY6giTSizjsNAZss8kL_iIncTvnly5jAB_Wpxs6WU36D0VjQmKJA0yn5bL_MreGUOochDdBACMbeQSu4leLy42axMFvyGO8B61N1z_M-4AK1ZdThAOeavk2VwS7ZAj9G6bV71w0Wmj9H_oCajSx2SlQ4IgewQAZUIAACAP5gIAaIIHQoXREJBQnp3fjFZTll-QlZRcUFBQUFBZ0EQBhAHqggICAEQABgAIADACP5D0ggGCAAQABgA2ggECAAgAA..&s=56e2eeca7af6d64f53027191d6745dabcacf7b12',
            timeout_ms: 0,
            ad_profile_id: 713501,
            rtb_video_fallback: false,
            ads: [
              {
                cpm: 20.0,
                cpm_publisher_currency: 20.0,
                publisher_currency_code: '$',
                publisher_currency_codename: 'USD',
                content_source: 'rtb',
                ad_type: 'banner',
                buyer_member_id: 11882,
                creative_id: 450043517,
                media_type_id: 1,
                media_subtype_id: 1,
                brand_category_id: 17,
                brand_id: 1215877,
                is_sov: false,
                is_roadblock: false,
                bidder_id: 480,
                client_initiated_ad_counting: true,
                is_managed: false,
                no_consent: false,
                rtb: {
                  banner: {
                    content: '<div id="appnexus-ad">Appnexus ad here</div>',
                    width: 970,
                    height: 90,
                  },
                  trackers: [
                    {
                      impression_urls: [
                        'https://nym1-ib.adnxs.com/it?an_audit=0&referrer=https%3A%2F%2Fminutia.online%2Fblogs%2Fmindful-minutia%2Fzero-waste-wonders-top-shelf-eco-friendly-laundry-detergents-to-consider&e=wqT_3QK7CvBMOwUAAAMA1gAFAQjT0vWzBhDX-rrV8pnUoz4Yx8vqz4qxpP5kKjYJObTIdr6fqj8R5KCEmbZ_pT8ZAAAA4KNwGkAh5KCEmbZ_pT8pObQJJNAxFNBE2PD0DEAw8dabBjjpG0DqXEjgA1D9vMzWAVj8vltgAGjW8k14-csCgAEBigEDVVNEkgUG8EmYAcoHoAFaqAEBsAEAuAEBwAEFyAEC0AEA2AEA4AEA8AEA2AL-Q-ACncYr6gJ1aHR0cHM6Ly9taW51dGlhLm9ubGluZS9ibG9ncwEVFGRmdWwtbQkd9GkBL3plcm8td2FzdGUtd29uZGVycy10b3Atc2hlbGYtZWNvLWZyaWVuZGx5LWxhdW5kcnktZGV0ZXJnZW50cy10by1jb25zaWRlcoADAIgDAZADAJgDF6ADAaoDQRIYMTQwODI3OTE0Nzg5MDczNjU5NF9zYmlkGhM0NDg3NjQ0NDA0NDAyNTM1NzY3Igk0NTAwNDM1MTcqBU0xMTczwAPYBMgDANgDAOADAOgDAPgDAYAEAJIEDS91dC92My9wcmViaWSYBACiBA45Ni4yMjQuMjM3LjEwM6gE9owCsgQPCAAQARjYBSBaKAAwADgCuAQAwATYj7kiyAQA2gQCCAHgBAHwBP28zNYBiAUBmAUAoAXS-_eUx83NxRPABQDJBQAAAAAAAPA_0gUJCQAAAAAAAAAA2AUB4AUB8AWFm0r6BQQIABAAkAYAmAYAuAYAwQYAAAAAAADwP9AG-eMC2gYWChAAAAAAAAAAAAANP6AQABgA4AYB8gYCCACABwGIBwCgBwG6BwgqBDFZTllAAcgH-csC0gcNCQ0wBTEM2gcGCAUJ9G4C4AcA6gcCCADwB9K9ngOKCMgECsMEAAABkFnjbDg-R1DPKq69V1Z0Aza9t1KNUs3gJJxW6RdaVfAt2qN8Ac6lckaQ1WW8FwahJ6PeO6LGSHIyO4xXjNd1DbLcaAOxHd5Qrxu5rSOF4W1av49uRWLMa_Iq9kUPrbU055l3r7PXiGYgXRoDGUYOinj3TKfYzyvlfylMka5sQN9HakcO01v8LSfwQxYKONsPMrPto6iljWkdniTU0USg3JKIGfTPN0zXFM8dMtAnjCeZrTEjuxC2_I9rZPLxeevkNlK3LDq_Oda4pyxcGdI4aX23tBmGYPdJnZpi-MyLVoHKU8xp-VhSQ72bfI8deYoGIZ4ZrpMT5K1yAdDPj-moggUTi-FhnpV3bpjfzG6h8KHCcc048-5mpClU2oG3-ZRkOUyCeM1XBmZ6WCNmUFjv0I7WJqBaiRoKaliRPcQXuCXcU8ROb3fwK10RYcSHTX9124sW5THagUQjcTkGsbsRsE3kK_3Rc9ie-A5NZ-C07JEp5h7Y6NroAEtyJkbVU0b3_tAHHUXYDAWle_AkgIG_Z_Gl802CZsMOcdhwQc1sKCd1wR5nkp5vy-r5JOPviqGzerEVHpme6s48w06kHRtd3GsHCcPSNy3lmWIb6mOoIk0os47DQGbLPJC_4iJ3E755cuYwAf1qcbOllN-g9FY0JiiQNMp-Wy_zK3hlDqHIQ3QQAjG3kEruJXi8uNmsTBb8hjvAetTdc_zPuACtWXU4QDnmr5NlcEu2QI_Rum1e9cNFpo_R_6Amo0sdkpUOCIHsEAGVCAAAgD-YCAGiCB0KF0RCQUJ6d35BkxR-QlZRcUEBAShnQRAGEAeqCAgIAUHGYCAAwAj-Q9IICQjw__8_EAAYANoIBAgAIAA.&s=6d6356ef3922ac3b7d1267fbc7818f4d3677a81b',
                      ],
                      video_events: {},
                    },
                  ],
                },
              },
            ],
          },
        ],
      });
    }
  },
  fubo: (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send({
      postal: '11787',
      dma: '803',
      country_code: 'USA',
      country_code2: 'US',
      country_name: 'United Sqtates',
      region_code: 'NY',
      connection_type: 'broadband',
      asn: '7850',
      as_name: 'ihighway.net inc.',
      ip_address: '161.185. 160.93',
      display_name: 'New York',
      network_allowed: true,
    });
  },
  fubooptions: (req, res) => {
    if (req.method === 'OPTIONS') {
      var headers = {};
      // IE8 does not allow domains to be specified, just the *
      // headers["Access-Control-Allow-Origin"] = req.headers.origin;
      headers['Access-Control-Allow-Origin'] = '*';
      headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS';
      headers['Access-Control-Allow-Credentials'] = false;
      headers['Access-Control-Max-Age'] = '86400'; // 24 hours
      headers['Access-Control-Allow-Headers'] = 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept';
      res.writeHead(200, headers);
      res.end();
      res.setHeader('Access-Control-Allow-Credentials', true);
      // res.send({
      // 	"postal": "11787",
      // 	"dma": "803",
      // 	"country_code": "USA",
      // 	"country_code2": "US",
      // 	"country_name": "United States",
      // 	"region_code": "NY",
      // 	"connection_type": "broadband",
      // 	"asn": "7850",
      // 	"as_name": "ihighway.net inc.",
      // 	"ip_address": "161.185. 160.93",
      // 	"display_name": "New York",
      // 	"network_allowed": true
    }
  },
  teads: (req, res) => {
    res.header('Access-Control-Allow-Credentials', true);
    const placementId = JSON.parse(req.body).data[0].placementId;
    const bidId = JSON.parse(req.body).data[0].bidId;
    const auctionId = JSON.parse(req.body).data[0].auctionId;
    const transactionId = JSON.parse(req.body).data[0].transactionId;

    res.send({
      responses: [
        {
          placementId: placementId,
          transactionId: auctionId,
          bidId: bidId,
          ttl: 150,
          creativeId: '625905',
          netRevenue: true,
          currency: 'USD',
          cpm: 50,
          width: '1',
          height: '1',
          ad:
            '<script type="text/javascript" class="teads" async="true" src="https://localhost:7070/loadpic' +
            '"></script>',
        },
      ],
    });
  },
    pubmaticVideo: (req, res) => {
	res.header('Access-Control-Allow-Credentials', true);
    const body = JSON.parse(req.body);
    const uuid = uuidv4();
    const id = body.id;
    const impid = body.imp[0].id;
    const sourceId = body.source.tid;


    res.send({
      id,
      seatbid: [
        {
          bid: [
            {
			  id: sourceId,
              impid,
              price: 20,
			  adm: `<VAST version=\"3.0\">\n<Ad>\n  <Wrapper>\n<AdSystem>prebid.org wrapper</AdSystem>\n<VASTAdTagURI><![CDATA[https://localhost:7070/creative/e24ea1d0bf869c0b74946930dd2e16e0.xml?uuid=${uuid}]]></VASTAdTagURI>\n\n<Creatives></Creatives>\n</Wrapper>\n</Ad>\n</VAST>`,			  adomain: ['homedepot.com'],
              cid: '23026',
              crid: '7508099',
              mtype: 2,
              ext: {
                dspid: 452,
                wDSPByrId: '3259',
                advid: 7664,
                bidtype: 1,
              },
            },
          ],
          seat: '41566',
        },
      ],
      cur: 'USD',
    });
  },
  slowlane: (req, res) => {
    console.log('what is happening');
    console.log(req);
    var size_id = parseInt(req.query.size_id);
    var account_id = parseInt(req.query.account_id);
    var site_id = parseInt(req.query.site_id);
    var zone_id = parseInt(req.query.zone_id);
    // var cpmResp = randomNumber(40, 50, size_id)
    // randomNumber(2.48, 2.48, req.query.size_id);

    res.header('Access-Control-Allow-Credentials', true);
    res.send({
      status: 'ok',
      account_id: account_id,
      site_id: site_id,
      zone_id: zone_id,
      size_id: size_id,
      tracking: '',
      inventory: {},
      ads: [
        {
          status: 'ok',
          // "deal": "1123456",
          advertiserDomains: ['unibet.com'],
          impression_id: '945e7afa-0909-418f-bf5e-d61bf0a2aacd',
          size_id: size_id,
          ad_id: '3212455',
          advertiser: 28712,
          network: 2596,
          creative_id: '3234568',
          type: 'script',
          script: 'document.write("Rubicon Ad Here")',
          campaign_id: 69245,
          rtb_rule_id: 1201184,
          cpm: 20,
          targeting: [
            {
              key: 'rpfl_' + account_id,
              values: [size_id + '_tier5000'],
            },
          ],
        },
      ],
    });
  },
  newDomainConfig: (req, res) => {
    res.header('Access-Control-Allow-Credentials', true);

    res.send({
      domain: 'www.loveBScott.com',
      token: 'kjyr191w61f26kjkl20zok7gj998whnl',
      site_id: 'oaisjdfau8a9s8y2o3in2f3',
      key: 'newConfig',
      config: {
        gamConfig: {
          fabrikAdsGam: {
            gamMCMChildNetworkCode: '18834096',
            googleAdTagDefaults: {
              cust_params: {
                kvp_test: 'control',
              },
            },
          },
        },
        videoPlayers: [
          {
            type: 'outstream',
            floatingOptions: {
              mobile: {
                position: 'top-right',
                height: 120,
              },
              desktop: {
                position: 'bottom-right',
              },
              hidePlayerOnClose: false,
              noFloatIfAbove: true,
              noFloatOnMobile: false,
            },
          },
          {
            autoplay: true,
            withContent: true,
            autoplayWhenVisible: true,
            playlistToken: '4708d349cqozrdsp5c61afuu74jvlwyo',
            muted: true,
            floatingOptions: {
              mobile: {
                position: 'top-right',
                height: 120,
              },
              desktop: {
                position: 'bottom-right',
              },
              hidePlayerOnClose: false,
              noFloatIfAbove: true,
              noFloatOnMobile: false,
              sidebar: true,
            },
            floating: true,
            byPageContent: false,
            irisPlaylist: false,
            blockRecentVideos: false,
            recentVideosHoursTimeout: 24,
            showNext: 20,
            noEngageNext: 11,
            preferredExtensions: 'm3u8',
            cdnHost: 'video.cloud.kargo.com',
            globalStyles:
              '.krg-time-container, .krg-controlbar-btn[title="Settings"] {display: none;} #kargo-player>div, #kargo-player>div>div{max-width: 100% !important;}div.krg-floating-player{border-radius:0px;}#kargo-player .ba-player-viewport-desktop{border-radius:10px;}[data-layout="desktop"][data-visibility="float"]>div{border-radius:10px;overflow:hidden;}#kargo-player>div>div { z-index: 9999; }.krg-floating-player.krg-layout-mobile {margin-top:43px}[data-layout="desktop"][data-visibility="float"] .krg-3d-scene {right: 30px !important}',
          },
        ],
        auctionOptions: {
          fabrikAdsBidders: {
            appnexus: false,
            criteo: false,
            fabrikAds: true,
            ix: true,
            mediaNet: true,
            openx: true,
            pubmatic: true,
            rubicon: true,
            sharethrough: true,
            tripleLift: true,
          },
          publisherAdsConfig: {
            fallbackMode: 'fabrikAdsFallback',
            runWithfabrikAds: false,
            gamConfig: {
              adUnitName: 'publisherAdUnit',
              networkCode: '88899999',
              gamMCMChildNetworkCode: '999988888',
              google_ad_tag_defaults: {
                sz: '400x300',
                cust_params: {},
              },
            },
            prebidConfig: {
              prebidNamespace: 'jbpbjs',
              bidderSetUp: {
                rubicon: { accountId: '12345', siteId: '67890' },
                ogury: {
                  assetKey: 'OGY-CA41D116484F',
                  adUnitId: '2c4d61d0-90aa-0139-0cda-0242ac120004',
                },
              },
              settings: {},
            },
          },
        },
      },
    });
  },
  domainConfig: (req, res) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.send({
      domain: 'www.dorkaholics.com',
      token: '1os6eyiu8jvi2jaelfkeqllraqxvsjlf',
      key: 'Production',
      config: {
        type: 'prod',
        prerollconfig: [
          {
            prebidbids: [
              {
                bidder: 'kargo',
                params: {
                  placementId: {
                    '&mobile': '_fbQyupuVFk',
                    '&desktop': '_yVinTG1Qt6',
                  },
                },
              },
              {
                bidder: 'appnexus',
                params: {
                  placementId: '32304081',
                },
              },
              {
                bidder: 'pubmatic',
                params: {
                  publisherId: '5810203',
                },
              },
              {
                bidder: 'rubicon',
                params: {
                  accountId: '14792',
                  siteId: '534850',
                  zoneId: '3289294',
                },
              },
            ],
            htlkey: {
              '&mobile': 'Preroll_Mobile',
              '&desktop': 'Preroll_Desktop',
            },
            prebiddfpad: {
              iu: '/22558409563,102691747/dorkaholics_preroll',
            },

            aaxconfig: {
              pubID: '91667ea5-81f1-433a-99ca-8c9df5934ce7',
              adServer: 'googletag',
              videoAdServer: 'DFP',
            },
            aaxslots: [
              {
                slotID: 'Outstream_Fabrick',
                slotName: '/22558409563,18834096/greenmatters_preroll',
                mediaType: 'outstream',
                sizes: [[640, 390]],
              },
            ],
            aaxurl:
              'https://pubads.g.doubleclick.net/gampad/ads?iu=/22558409563,21801468956/Time_Preroll_FVP&description_url=http%3A%2F%2Ftime.com&tfcd=0&npa=0&sz=1x1%7C400x300%7C640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',
          },
        ],
        prebidconfig: {
          priceGranularity: {
            buckets: [
              {
                max: 40,
                increment: 0.05,
              },
            ],
          },
          schain: {
            config: {
              ver: '1.0',
              complete: 1,
              nodes: [
                {
                  asi: 'fabrik.com',
                  sid: '71',
                  hp: 1,
                },
              ],
            },
          },
        },
        prebidglobals: [
          {
            method: 'setBidderConfig',
            args: [
              {
                bidders: ['kargo'],
                config: {
                  schain: {},
                },
              },
              true,
            ],
          },
          {
            method: 'enableAnalytics',
            args: [
              {
                provider: 'hadronAnalytics',
                options: {
                  partnerID: 326,
                  eventsToTrack: ['auctionEnd', 'auctionInit'],
                },
              },
            ],
          },
        ],
        prebiduserids: [
          {
            name: '33acrossId',
            params: {
              pid: '0010b00002EFnxPAAT',
            },
            storage: {
              name: '33acrossId',
              type: 'html5',
              expires: 90,
              refreshInSeconds: 28800,
            },
          },
          {
            name: 'id5Id',
            params: {
              partner: 562,
            },
            storage: {
              name: 'id5id',
              type: 'html5',
              expires: 90,
              refreshInSeconds: 28800,
            },
          },
          {
            name: 'sharedId',
            storage: {
              name: 'sharedId',
              type: 'html5',
              expires: 365,
              refreshInSeconds: 28800,
            },
          },
          {
            name: 'unifiedId',
            params: {
              partner: 'vu6qg20',
            },
            storage: {
              name: 'pbjs-unifiedid',
              type: 'html5',
              expires: 60,
            },
          },
          {
            name: 'liveIntentId',
            params: {
              publisherId: '78242',
            },
            storage: {
              name: 'pbjs_li_nonid',
              type: 'html5',
              expires: 1,
            },
          },
        ],
        adtagurl:
          'https://pubads.g.doubleclick.net/gampad/ads?iu=/22558409563,102691747/dorkaholics_preroll&description_url=https%3A%2F%2Fwww.dorkaholics.com%2F&tfcd=0&npa=0&sz=400x300%7C640x480&gdfp_req=1&output=vast&env=vp&unviewed_position_start=1&impl=s&correlator=',
        adsposition: 'pre,mid[20*]',
        autoplay: true,
        muted: true,
        floating: true,
        floatingoptions: {
          mobile: {
            position: 'top-right',
            height: 175,
          },
          desktop: {
            position: 'bottom-right',
          },
          hideplayeronclose: false,
          noFloatIfAbove: true,
        },
        shownext: 20,
        query: {
          limit: 10,
          category: 'science',
        },
        preferredextensions: 'm3u8',
        cdnhost: 'video.cloud.kargo.com',
        globalStyles: 'css',
      },
    });

    // GreenMatters
    // res.send({
    // 	"domain": "www.greenmatters.com",
    // 	"token": "7djvt97jwya720nj1mbsn61n5rqcgxd1",
    // 	"key": "VeSubtitlesOn",
    // 	"config": {
    // 		"type": "subOn",
    // 		"prerollconfig": [{
    // 			"prebidbids": [
    // 				{
    // 					"bidder": "kargo",
    // 					"params": {
    // 						"placementId": {
    // 							"&mobile": "_fbQyupuVFk",
    // 							"&desktop": "_yVinTG1Qt6"
    // 						}
    // 					}
    // 				},
    // 				{
    // 					"bidder": "appnexus",
    // 					"params": {
    // 						"placementId": "32304081"
    // 					}
    // 				},
    // 				{
    // 					"bidder": "pubmatic",
    // 					"params": {
    // 						"publisherId": "5810203"
    // 					}
    // 				},
    // 				{
    // 					"bidder": "rubicon",
    // 					"params": {
    // 						"accountId": "14792",
    // 						"siteId": "534850",
    // 						"zoneId": "3289294"
    // 					}
    // 				}
    // 			],
    // 			"htlkey": {
    // 				"&mobile": "Preroll_Mobile",
    // 				"&desktop": "Preroll_Desktop"
    // 			},
    // 			"prebiddfpad": {
    // 				"iu": "/22558409563,18834096/greenmatters_preroll"
    // 			},

    // 			"aaxconfig": {
    // 				"pubID": "91667ea5-81f1-433a-99ca-8c9df5934ce7",
    // 				"adServer": "googletag",
    // 				"videoAdServer": "DFP"
    // 			},
    // 			"aaxslots": [{
    // 				"slotID": "Outstream_Fabrick",
    // 				"slotName": "/22558409563,18834096/greenmatters_preroll",
    // 				"mediaType": "outstream",
    // 				"sizes": [
    // 					[
    // 						640,
    // 						390
    // 					]
    // 				]
    // 			}],
    // 			"aaxurl": "https://pubads.g.doubleclick.net/gampad/ads?iu=/22558409563,21801468956/Time_Preroll_FVP&description_url=http%3A%2F%2Ftime.com&tfcd=0&npa=0&sz=1x1%7C400x300%7C640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator="

    // 		}],
    // 		"prebidconfig": {
    // 			"enableTIDs": true,
    // 			"priceGranularity": {
    // 				"buckets": [{
    // 					"max": 40,
    // 					"increment": 0.05
    // 				}]
    // 			},
    // 			"schain": {
    // 				"config": {
    // 					"ver": "1.0",
    // 					"complete": 1,
    // 					"nodes": [{
    // 						"asi": "fabrik.com",
    // 						"sid": "29",
    // 						"hp": 1
    // 					}]
    // 				}
    // 			}
    // 		},
    // 		"prebidglobals": [{
    // 			"method": "setBidderConfig",
    // 			"args": [{
    // 				"bidders": ["kargo"],
    // 				"config": {
    // 					"schain": {}
    // 				}
    // 			}, true]
    // 		}],
    // 		"prebiduserids": [{
    // 			"name": "33acrossId",
    // 			"params": {
    // 				"pid": "0010b00002EFnxPAAT"
    // 			},
    // 			"storage": {
    // 				"name": "33acrossId",
    // 				"type": "html5",
    // 				"expires": 90,
    // 				"refreshInSeconds": 28800
    // 			}
    // 		}, {
    // 			"name": "id5Id",
    // 			"params": {
    // 				"partner": 562
    // 			},
    // 			"storage": {
    // 				"name": "id5id",
    // 				"type": "html5",
    // 				"expires": 90,
    // 				"refreshInSeconds": 28800
    // 			}
    // 		}, {
    // 			"name": "sharedId",
    // 			"storage": {
    // 				"name": "sharedId",
    // 				"type": "html5",
    // 				"expires": 365,
    // 				"refreshInSeconds": 28800
    // 			}
    // 		}, {
    // 			"name": "unifiedId",
    // 			"params": {
    // 				"partner": "vu6qg20"
    // 			},
    // 			"storage": {
    // 				"name": "pbjs-unifiedid",
    // 				"type": "html5",
    // 				"expires": 60
    // 			}
    // 		}, {
    // 			"name": "liveIntentId",
    // 			"params": {
    // 				"publisherId": "78242"
    // 			},
    // 			"storage": {
    // 				"name": "pbjs_li_nonid",
    // 				"type": "html5",
    // 				"expires": 1
    // 			}
    // 		}],
    // 		"adsposition": "pre",
    // 		"autoplay": true,
    // 		"autoplaywhenvisible": true,
    // 		"muted": true,
    // 		"floatingoptions": {
    // 			"mobile": {
    // 				"position": "top-right",
    // 				"height": 120
    // 			},
    // 			"desktop": {
    // 				"position": "bottom-right"
    // 			},
    // 			"hideplayeronclose": false,
    // 			"noFloatIfAbove": true,
    // 			"noFloatOnMobile": false,
    // 			"sidebar": true
    // 		},
    // 		"sticky": true,
    // 		"bypagecontent": false,
    // 		"irisplaylist": false,
    // 		"autoenabledtracktags": ["subtitles", "captions"],
    // 		"blockrecentvideos": true,
    // 		"playlisttoken": "np833olj59ftsm68rip5p72yyojj3d0k",
    // 		"recentvideoshourstimeout": 24,
    // 		"shownext": 20,
    // 		"noengagenext": 10,
    // 		"preferredextensions": "m3u8",
    // 		"cdnhost": "video.cloud.kargo.com",
    // 		"globalStyles": ".krg-time-container, .krg-controlbar-btn[title=\"Settings\"] {display: none;} #kargo-player>div, #kargo-player>div>div{max-width: 100% !important;}div.krg-floating-player{border-radius:0px;}#kargo-player .ba-player-viewport-desktop{border-radius:10px;}[data-layout=\"desktop\"][data-visibility=\"float\"]>div{border-radius:10px;overflow:hidden;}#kargo-player>div>div { z-index: 9999; }.krg-floating-player.krg-layout-mobile {margin-top:43px}[data-layout=\"desktop\"][data-visibility=\"float\"] .krg-3d-scene {right: 30px !important}"
    // 	}
    // })
  },
  amazon: (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);

    // var size_id = parseInt(req.query.size_id);
    // var account_id = parseInt(req.query.account_id)
    // var site_id = parseInt(req.query.site_id)
    // var zone_id = parseInt(req.query.zone_id)

    res.send(
      apstag.bids({
        slots: [
          {
            fif: '1',
            amzniid: 'JJMYKA93r1zoCnrIK6RcBVwAAAGIU8w7tQEAAAJYAUJhcHNfdHhuX2JpZDEgICBhcHNfdHhuX2ltcDEgICCXgbqV',
            crid: '2662_193864_T14629079',
            amznp_sp: '1dfpj4',
            mediaType: 'd',
            amzndeal_sp: 'apsbebacb02_300x250',
            amzniid_sp: 'JJMYKA93r1zoCnrIK6RcBVwAAAGIU8w7tQEAAAJYAUFhcHNfdHhuX2JpZDEgICBhcHNfdHhuX2ltcDEgICCXgbqV',
            mediaType_sp: 'd',
            targeting: [
              'amzniid_sp',
              'amznp_sp',
              'amzndeal_sp',
              'amznsz_sp',
              'amznbid_sp',
              'amzniid',
              'amznp',
              'amznsz',
              'amznbid',
            ],
            size: '300x250',
            meta: ['slotID', 'mediaType_sp', 'mediaType', 'size'],
            amznsz: '300x250',
            slotID: 'AdThrive_Sidebar_9_desktop',
            amznbid_sp: 'fqz668',
            amznp: '1e4ycjk',
            amznbid: '1aglq80',
            amznsz_sp: '300x250',
          },
        ],
        host: 'https://aax-us-east.amazon-adsystem.com',
        cfe: true,
        ev: true,
        cfn: 'bao-csm/direct/csm_othersv6.js',
        status: 'ok',
        cb: '2',
      }),
    );
  },
  auction: (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send({
      tid: '42d90617-6d6e-4087-b9c0-1536be9be0ce',
      status: 'OK',
      bidder_status: [
        {
          bidder: 'rubicon',
          response_time_ms: 200,
          num_bids: 2,
        },
      ],
      bids: [
        {
          bid_id: '1f2bb5c97b5c6f',
          code: 'AdThrive_Header_1_desktop',
          creative_id: '3266747',
          media_type: 'banner',
          bidder: 'rubicon',
          price: 100.0,
          adm: 'Rubicon Ad Here',
          width: 728,
          height: 90,
          deal_id: 476700,
          response_time_ms: 200,
          ad_server_targeting: {
            rpfl_9262: '2_tier5000',
          },
        },
        // {
        // "bid_id": "48b48e460629f6",
        // "code": "AdThrive_Sidebar_3_desktop",
        // "creative_id": "3357400",
        // "media_type": "banner",
        // "bidder": "rubicon",
        // "price": 100.00,
        // "deal_id": 476700,
        // "adm": "    <script type=\"text/javascript\">\n      rubicon_cb = Math.random(); rubicon_rurl = document.referrer; if(top.location==document.location){rubicon_rurl = document.location;} rubicon_rurl = escape(rubicon_rurl);\n      window.rubicon_ad = \"3306916\" + \".\" + \"js\";\n      window.rubicon_creative = \"3357400\" + \".\" + \"js\";\n    </script>\n<div data-rp-type=\"trp-display-creative\" data-rp-impression-id=\"451cc30d-6459-40ef-a446-49bd9f06296d\"><div style=\"width: 0; height: 0; overflow: hidden;\"><img border=\"0\" width=\"1\" height=\"1\" src=\"https://beacon-us-iad3.rubiconproject.com/beacon/d/451cc30d-6459-40ef-a446-49bd9f06296d?oo=0&accountId=9262&siteId=180726&zoneId=881460&e=6A1E40E384DA563BE339B0A6BA94BD9C54EEB361F245231422387F6BF687F45CF3C16E8C5F043274EDA5F182BB5C4C568C51FDA24B01E575F8FED3851E959A7CA87EA1CE183B291BFD3579D6BE5FAFB61393B197EF5E7FE8FF7B68D2B0A3159490CD7062FA6595013988D3D70EBB4F1631089C52AE72593BA26E015D7E4BE1323F42C83CABBBDF590F0ED946CFCB0B36EC99C7E46E29345FDBEF131068979B9B323C64E281701C1CA91DF6AA1E9D1786D092FA5F35090B0B05973296B9A959C7\" alt=\"\" /></div>\n\n\n<img src=\"https://use-tor.adsrvr.org/bid/feedback/rubicon?iid=0000a104-68fc-49e8-9f7a-0d915f01d32b&crid=srvecuaw&wp=E59D5841869466A2&aid=1&wpc=USD&sfe=d479a50&puid=&tdid=9da87da9-c22b-48ac-bc0b-0386e04858ca&pid=u2k6c0s&ag=epddzag&sig=6c5WxZ_7i1UWK9P-fQ-XehAeOGALXX5A8wkwzOX4KNY.&cf=290539&fq=1&td_s=therecipecritic.com&rcats=7sp&mcat=&mste=&mfld=4&mssi=&mfsi=0nes2gh8u2&uhow=107&agsa=&rgco=United%20States&rgre=New%20York&rgme=501&rgci=New%20York&rgz=10019&svbttd=1&dt=PC&osf=OSX&os=Other&br=Chrome&rlangs=en&mlang=&svpid=9262&did=&rcxt=Other&lat=40.766200&lon=-73.986200&tmpc=18.67&daid=&vp=0&osi=&osv=&bp=0.9375&mk=Apple&mdl=Chrome%20-%20OS%20X&dur=CiMKDWNoYXJnZS1hbGwtMjAiEgjs__________8BEgV0YXBhZAoxCgcybDJnaXIwEOdEIg4IveaZARIHemRrYm5raSITCPL44jESDHRoZXRyYWRlZGVzawo8Cgc2emc0Nzc1EKYLIg4IwIWaARIHemRrYm5raSIOCMGFmgESB3pka2Jua2kiDgjChZoBEgd6ZGtibmtpCiMKBzkxZDJ4dnoQxgoiFQiC8PkzEg5BbGxpYW5jZUxvdGFtZQocCgdtZGx1YWptEL1OIg4Iq-SZARIHemRrYm5raQowCgxjaGFyZ2UtYWxsLTEiIAj___________8BEhN0dGRfZGF0YV9leGNsdXNpb25zCjYKHWNoYXJnZS1hbGxJbnRlZ3JhbEJyYW5kU2FmZXR5IhUI-f__________ARIIaW50ZWdyYWwKNgodY2hhcmdlLWFsbEludGVncmFsVmlld2FiaWxpdHkiFQj4__________8BEghpbnRlZ3JhbAo9CiRjaGFyZ2UtYWxsSW50ZWdyYWxTdXNwaWNpb3VzQWN0aXZpdHkiFQj1__________8BEghpbnRlZ3JhbBDGCg..&crrelr=&ipl=881460&atst=1&fpa=740\" width=\"1\" height=\"1\" style=\"display: none;\"/><noscript>\r\n<a href=\"http://insight.adsrvr.org/track/clk?imp=0000a104-68fc-49e8-9f7a-0d915f01d32b&ag=epddzag&sfe=d479a50&sig=6c5WxZ_7i1UWK9P-fQ-XehAeOGALXX5A8wkwzOX4KNY.&crid=srvecuaw&cf=290539&fq=1&td_s=therecipecritic.com&rcats=7sp&mcat=&mste=&mfld=4&mssi=&mfsi=0nes2gh8u2&sv=rubicon&uhow=107&agsa=&rgco=United%20States&rgre=New%20York&rgme=501&rgci=New%20York&rgz=10019&dt=PC&osf=OSX&os=Other&br=Chrome&svpid=9262&rlangs=en&mlang=&did=&rcxt=Other&tmpc=18.67&vrtd=&osi=&osv=&daid=&dnr=0&vpb=&svsc=&dur=CiMKDWNoYXJnZS1hbGwtMjAiEgjs__________8BEgV0YXBhZAoxCgcybDJnaXIwEOdEIg4IveaZARIHemRrYm5raSITCPL44jESDHRoZXRyYWRlZGVzawo8Cgc2emc0Nzc1EKYLIg4IwIWaARIHemRrYm5raSIOCMGFmgESB3pka2Jua2kiDgjChZoBEgd6ZGtibmtpCiMKBzkxZDJ4dnoQxgoiFQiC8PkzEg5BbGxpYW5jZUxvdGFtZQocCgdtZGx1YWptEL1OIg4Iq-SZARIHemRrYm5raQowCgxjaGFyZ2UtYWxsLTEiIAj___________8BEhN0dGRfZGF0YV9leGNsdXNpb25zCjYKHWNoYXJnZS1hbGxJbnRlZ3JhbEJyYW5kU2FmZXR5IhUI-f__________ARIIaW50ZWdyYWwKNgodY2hhcmdlLWFsbEludGVncmFsVmlld2FiaWxpdHkiFQj4__________8BEghpbnRlZ3JhbAo9CiRjaGFyZ2UtYWxsSW50ZWdyYWxTdXNwaWNpb3VzQWN0aXZpdHkiFQj1__________8BEghpbnRlZ3JhbBDGCg..&crrelr=&npt=&svscid=xapi%3A180726%3AvlWAYkK_YBwk&mk=Apple&mdl=Chrome%20-%20OS%20X&ipl=881460&atst=1&fpa=740&r=https://servedby.flashtalking.com/click/8/92142;3133803;0;209;0/?ft_width=300&ft_height=600&url=19139903\" target=\"_blank\">\r\n<img border=\"0\" src=\"https://servedby.flashtalking.com/imp/8/92142;3133803;205;gif;TheTradeDesk;BriggsTTDNorthMowNStowBehavioral300x600/?\"></a>\r\n</noscript>\r\n<script language=\"Javascript1.1\" type=\"text/javascript\">\r\nvar ftClick = \"http://insight.adsrvr.org/track/clk?imp=0000a104-68fc-49e8-9f7a-0d915f01d32b&ag=epddzag&sfe=d479a50&sig=6c5WxZ_7i1UWK9P-fQ-XehAeOGALXX5A8wkwzOX4KNY.&crid=srvecuaw&cf=290539&fq=1&td_s=therecipecritic.com&rcats=7sp&mcat=&mste=&mfld=4&mssi=&mfsi=0nes2gh8u2&sv=rubicon&uhow=107&agsa=&rgco=United%20States&rgre=New%20York&rgme=501&rgci=New%20York&rgz=10019&dt=PC&osf=OSX&os=Other&br=Chrome&svpid=9262&rlangs=en&mlang=&did=&rcxt=Other&tmpc=18.67&vrtd=&osi=&osv=&daid=&dnr=0&vpb=&svsc=&dur=CiMKDWNoYXJnZS1hbGwtMjAiEgjs__________8BEgV0YXBhZAoxCgcybDJnaXIwEOdEIg4IveaZARIHemRrYm5raSITCPL44jESDHRoZXRyYWRlZGVzawo8Cgc2emc0Nzc1EKYLIg4IwIWaARIHemRrYm5raSIOCMGFmgESB3pka2Jua2kiDgjChZoBEgd6ZGtibmtpCiMKBzkxZDJ4dnoQxgoiFQiC8PkzEg5BbGxpYW5jZUxvdGFtZQocCgdtZGx1YWptEL1OIg4Iq-SZARIHemRrYm5raQowCgxjaGFyZ2UtYWxsLTEiIAj___________8BEhN0dGRfZGF0YV9leGNsdXNpb25zCjYKHWNoYXJnZS1hbGxJbnRlZ3JhbEJyYW5kU2FmZXR5IhUI-f__________ARIIaW50ZWdyYWwKNgodY2hhcmdlLWFsbEludGVncmFsVmlld2FiaWxpdHkiFQj4__________8BEghpbnRlZ3JhbAo9CiRjaGFyZ2UtYWxsSW50ZWdyYWxTdXNwaWNpb3VzQWN0aXZpdHkiFQj1__________8BEghpbnRlZ3JhbBDGCg..&crrelr=&npt=&svscid=xapi%3A180726%3AvlWAYkK_YBwk&mk=Apple&mdl=Chrome%20-%20OS%20X&ipl=881460&atst=1&fpa=740&r=\";\r\nvar ftLat = \"40.7662\";\r\nvar ftLong = \"-73.9862\";\r\nvar ftLatLong = \"&ft_lat=\"+encodeURIComponent(ftLat)+\"&ft_long=\"+encodeURIComponent(ftLong);\r\nvar ftExpTrack_3133803 = \"\";\r\nvar ftX = \"\";\r\nvar ftY = \"\";\r\nvar ftZ = \"\";\r\nvar ftOBA = 1;\r\nvar ftContent = \"\";\r\nvar ftCustom = \"\";\r\nvar ft300x600_OOBclickTrack = \"\";\r\nvar ftRandom = Math.random()*1000000;\r\nvar ftBuildTag1 = \"<scr\";\r\nvar ftBuildTag2 = \"</\";\r\nvar ftClick_3133803 = ftClick;\r\nif(typeof(ft_referrer)==\"undefined\"){var ft_referrer=(function(){var r=\"\";if(window==top){r=window.location.href;}else{try{r=window.parent.location.href;}catch(e){}r=(r)?r:document.referrer;}while(encodeURIComponent(r).length>1000){r=r.substring(0,r.length-1);}return r;}());}\r\nvar ftDomain = (window==top)?\"\":(function(){var d=document.referrer,h=(d)?d.match(\"(?::q/q/)+([qw-]+(q.[qw-]+)+)(q/)?\".replace(/q/g,decodeURIComponent(\"%\"+\"5C\")))[1]:\"\";return (h&&h!=location.host)?\"&ft_ifb=1&ft_domain=\"+encodeURIComponent(h):\"\";}());\r\nvar ftTag = ftBuildTag1 + 'ipt language=\"javascript1.1\" type=\"text/javascript\" ';\r\nftTag += 'src=\"https://servedby.flashtalking.com/imp/8/92142;3133803;201;js;TheTradeDesk;BriggsTTDNorthMowNStowBehavioral300x600/?ftx='+ftX+'&fty='+ftY+'&ftadz='+ftZ+'&ftscw='+ftContent+'&ft_custom='+ftCustom+'&ftOBA='+ftOBA+ftDomain+'&ft_agentEnv='+(window.mraid||window.ormma?'1':'0')+ftLatLong+'&ft_referrer='+encodeURIComponent(ft_referrer)+'&cachebuster='+ftRandom+'\" id=\"ftscript_300x600\" name=\"ftscript_300x600\"';\r\nftTag += '>' + ftBuildTag2 + 'script>';\r\ndocument.write(ftTag);\r\n</script>\r\n\r\n\r\n<span id=\"te-clearads-js-tradedesk01cont1\"><script type=\"text/javascript\" src=\"https://choices.truste.com/ca?pid=tradedesk01&aid=tradedesk01&cid=tkddxcx_epddzag_srvecuaw&c=tradedesk01cont1&js=pmw0&w=300&h=600&sid=0\"></script></span>\n<div style=\"height:0px;width:0px;overflow:hidden\"><iframe src=\"https://eus.rubiconproject.com/usync.html?&geo=na&co=us\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"NO\" width=\"0\" height=\"0\" style=\"height:0px;width:0px\"></iframe></div></div>\n\n",
        // "width": 300,
        // "height": 600,
        // "response_time_ms": 200,
        // "ad_server_targeting": {
        // 	"rpfl_9262": "10_tier50"
        // 	}
        // }
      ],
    });
  },

  floors: (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send({
      modelGroups: [
        {
          modelWeight: 70,
          schema: {
            fields: ['domain', 'adUnitCode'],
            delimiter: '|',
          },
          default: 0.01,
          modelVersion: 'cw-cafemedia@2022-05-03-16',
          values: {
            'plantcaretoday.com|*': 0.58,
          },
        },
        {
          modelWeight: 5,
          schema: {
            fields: ['domain', 'adUnitCode'],
            delimiter: '|',
          },
          default: 0.01,
          modelVersion: 'mlcp-v1@2022-05-03-16',
          values: { 'plantcaretoday.com|*': 0.58 },
        },
        {
          modelWeight: 5,
          schema: {
            fields: ['domain', 'adUnitCode'],
            delimiter: '|',
          },
          default: 0.01,
          modelVersion: 'mlcp-3p0@2022-05-03-16',
          values: {
            'plantcaretoday.com|*': 0.89,
          },
        },
        {
          modelWeight: 5,
          schema: {
            fields: ['domain', 'adUnitCode'],
            delimiter: '|',
          },
          default: 0.01,
          modelVersion: 'mlcp-2p0@2022-05-03-16',
          values: {
            'plantcaretoday.com|*': 0.73,
          },
        },
        {
          modelWeight: 5,
          schema: {
            fields: ['domain', 'adUnitCode'],
            delimiter: '|',
          },
          default: 0.01,
          modelVersion: 'mlcp-1p0@2022-05-03-16',
          values: {
            'plantcaretoday.com|*': 0.65,
          },
        },
        {
          modelWeight: 5,
          schema: {
            fields: ['domain', 'adUnitCode'],
            delimiter: '|',
          },
          default: 0.01,
          modelVersion: 'mlcp-0p5@2022-05-03-16',
          values: {
            'plantcaretoday.com|*': 0.49,
          },
        },
        {
          modelWeight: 5,
          schema: {
            fields: ['domain', 'adUnitCode'],
            delimiter: '|',
          },
          default: 0.01,
          modelVersion: 'bp-v1@2022-05-03-16',
          values: { 'plantcaretoday.com|*': 0.58 },
        },
      ],
      skipRate: 50,
      modelTimestamp: 1651593600,
      floorProvider: 'rubicon',
      currency: 'USD',
      floorsSchemaVersion: 2,
    });
  },
  kargoVideo: (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    const body = JSON.parse(req.body);
    const id = body.imp[0].id;
    const uuid = uuidv4();

    res.send({
      [id]: {
        cpm: 23.25,
        pricing: {
          floor: 0,
          buckets: null,
        },
        metadata: {
          landingPageDomain: null,
        },
        adm: '',
        // "admUrl": "https://kraken.prod.kargo.com/api/v1/adm?ctx=019103b1-adb2-7821-b568-0883d85c67aa",
        admUrl: `https://localhost:7070/creative/kargoVideo.xml?${uuid}`,
        id: '_djwZ5uZ3I4',
        receivedTracker: 'https://kraken.prod.kargo.com/api/v1/event/received?ctx=019103b1-adb2-7821-b568-0883d85c67aa',
        targetingPrefix: '',
        creativeID: 'KM-CREA-143041',
        currency: 'USD',
        mediaType: 'video',
        width: 300,
        height: 50,
        bidID: '019103b1-adb2-7821-b568-0883d85c67aa',
      },
    });
  },

  rubiconVideo: (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    const body = JSON.parse(req.body);
    const uuid = uuidv4();

    // const account_id = parseInt(body.imp[0].ext.prebid.bidder.rubicon.accountId)
    // const site_id = parseInt(body.imp[0].ext.prebid.bidder.rubicon.siteId)
    // const zone_id = parseInt(body.imp[0].ext.prebid.bidder.rubicon.zoneId)
    // const size_id = body.imp[0].ext.prebid.bidder.rubicon.size_id;
    const impId = body.imp[0].id;

    console.log(body.imp[0]);

    res.send({
      id: 'f4f50f00-4eb3-41b9-bed2-dcc7bf83626f',
      seatbid: [
        {
          bid: [
            {
              id: 'dfecc0e0-f525-4f9b-8503-eeaf5223b652',
              impid: impId,
              price: 19.0,
              adomain: ['pepsico.com'],
              crid: '2307:l1fhpqe6',
              exp: 900,
              ext: {
                rp: {
                  advid: 57537,
                  mime: 'application/javascript',
                  // "size_id": size_id
                },
                prebid: {
                  type: 'video',
                  targeting: {
                    hb_pb: '5.00',
                    hb_cache_path: '/cache',
                    hb_uuid: 'e24ea1d0bf869c0b74946930dd2e16e0',
                    hb_bidder: 'rubicon',
                    hb_cache_host: 'prebid-server-iad3.rubiconproject.com',
                  },
                  cache: {
                    vastXml: {
                      url: `https://localhost:7070/creative/e24ea1d0bf869c0b74946930dd2e16e0.xml?ff${uuid}`,
                      cacheId: 'e24ea1d0bf869c0b74946930dd2e16e0',
                    },
                  },
                  events: {
                    win: 'https://prebid-server.rubiconproject.com/event?t=win&b=dfecc0e0-f525-4f9b-8503-eeaf5223b652&a=9262&aid=f4f50f00-4eb3-41b9-bed2-dcc7bf83626f&ts=1719511954469&bidder=rubicon&f=i&int=pbjs',
                    imp: 'https://prebid-server.rubiconproject.com/event?t=imp&b=dfecc0e0-f525-4f9b-8503-eeaf5223b652&a=9262&aid=f4f50f00-4eb3-41b9-bed2-dcc7bf83626f&ts=1719511954469&bidder=rubicon&f=i&int=pbjs',
                  },
                  meta: {
                    networkId: 2307,
                  },
                },
                origbidcpm: 20.0,
              },
            },
          ],
          seat: 'rubicon',
          group: 0,
        },
      ],
      cur: 'USD',
      ext: {
        responsetimemillis: {
          cache: 2,
          rubicon: 202,
        },
        tmaxrequest: 2000,
        prebid: {
          auctiontimestamp: 1719511954469,
        },
      },
    });
  },
  optimized: (req, res) => {
    randomNumber(10, 20, req.query.size_id);
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send({
      status: 'ok',
      account_id: 12982,
      site_id: 52246,
      zone_id: 237884,
      size_id: 10,
      tracking: '',
      inventory: {
        resize: '300x600',
      },
      ads: [
        {
          status: 'no-ads',
          reason: 'floor-not-met',
          error_code: '10',
          impression_id: 'e74eb7d6-04d9-4faf-af44-34c2d45fbef2',
        },
      ],
    });
  },
  video_spoof: (req, res) => {
    const adId = req.body.imp.id;
    // var size_id = parseInt(req.query.size_id);
    var account_id = parseInt(req.body.imp.ext.rubicon.accountId);
    var site_id = parseInt(req.body.imp.ext.rubicon.siteId);
    var zone_id = parseInt(req.body.imp.ext.rubicon.zoneId);
    // var size_id = parseInt(req.query.size_id);
    // var account_id = parseInt(req.query.account_id)
    // var site_id = parseInt(req.query.site_id)
    // var zone_id = parseInt(req.query.zone_id)

    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send({
      status: 'ok',
      ads: {
        rish_prebid_VAST: [
          {
            status: 'ok',
            cpm: 50.0,
            tier: 'tier5000',
            vantage: {
              impressionId: '71739d10-c5f3-4e72-aa21-4f05d6658680',
              accountId: account_id,
              vantage:
                'B05D516FF12C60449B7827B0BA5571A55E49BD6572157B88983B2E1374955AACABB94F18F083C1D91B4F0B7D9238E3C4B1F5AECDF3F602F734A06186D90D6B7AED91CF2D0B742EE002FFEA0A95A2A55F397FE1FA638BA8C5BD391B741F938F6C35C7CD841FCD61937C51CBA075406A4FE84D5D5C478124BA01F142134DC07351D9B2711BD7AE270B5F851A018A6F583D802ED59747038C5BF9571502BE1E3834D287C6AC1C5A53147B141BB064E3BC3233C385DF0C2A064EB67CAE18894A499606F84C5E0A9A700716466BA3E86BC5FDF72E8218B8D33DBD6A802B841C52CA6F',
            },
            network: 1523,
            targeting: {
              rpfl_7780: '201_tier0100',
              rpfl_elemid: 'rish_prebid_VAST',
            },
            impression_id: '71739d10-c5f3-4e72-aa21-4f05d6658680', //ID THAT MATTERS
            site_id: site_id,
            zone_id: zone_id,
            creative_type: 'video',
            creative_depot_url: 'https://localhost:7070/video_vast_wrapper',
            ad_id: 3939180,
            size_id: size_id,
            advertiser: 1667256,
          },
        ],
      },
      account_id: account_id,
    });
  },
  video_vast_wrapper: (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send(
      '<?xml version="1.0" encoding="UTF-8"?><VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="vast.xsd" version="4.0"><Ad id="5478834138"><Wrapper><AdSystem>GDFP</AdSystem><VASTAdTagURI><![CDATA[https://localhost:7070/video_creative]]></VASTAdTagURI><Error><![CDATA[https://pubads.g.doubleclick.net/pagead/interaction/?ai=BpRZitSlkYZGqK5W6nwTT7rGICLng-OpFAAAAEAEg6K-pFTgBWPbF_aWDBGDJhoCA0CSyAQ9jYWZlZGVsaXRlcy5jb226AQlnZnBfaW1hZ2XIAQXaATlodHRwczovL2NhZmVkZWxpdGVzLmNvbS9jaGVlc3ktc2NyYW1ibGVkLWVnZ3MtaW4tYXZvY2Fkby-YAvjSAcACAuACAOoCTC8xODE5MDE3Ni9BZFRocml2ZV9WaWRlb19Db2xsYXBzZV9BdXRvcGxheV9Tb3VuZE9mZi81NmY5YWE1NGMwMTUyZTM1NGQ4ZWU3MDH4AoLSHpAD4AOYA-ADqAMB4AQB0gUGENq_wbQUkAYBoAYkqAfz0RuoB5bYG6gHqpuxAqgH35-xAtgHAOAHH9IIBwiAYRABGB3YCAKACgWYCwGADAHQFQGAFwE&sigh=xgcGhDZ_1tg&label=videoplayfailed[ERRORCODE]]]></Error><Impression><![CDATA[https://securepubads.g.doubleclick.net/pcs/view?xai=AKAOjsvmTD4kgujI24D-Ik4Bp8_4X_gyDz7nM4IH5GVrKibe5oQHBdpYLTxNKDufyXj-w5Nj_paBe7fLgUamrgySQJ8ig-QtGeethiu6Nq8Cm_qpkL3Rg4cjA5Xq6QVQ94lXtIRoKs6f0Tn8tw-lRWNJFH5BacGU3wtfbCXJ1Falz5yjSGIpI14XmIo33Yj11EXWmn3w8AnnR7oL4rID6TiE_Rhf39SwniiT0JGuHxryFVZY6PgGSpDQcPsKL14QqJm03U7WGN1vK-3SxXRlH8hxm-WJXIa0APH9QLUxlLsWhmDpjer3DyYaoUaF9Rv27BgD8ZVg9iTClrj5yaliIMQzoT-gNZc2vO5yxU3fFGfo-2CDOADHhkn4u7O5-s0uCxDPTAY&sig=Cg0ArKJSzORGigHhwmhJEAE&adurl=]]></Impression><Creatives><Creative id="138323911414" sequence="1"><Linear><TrackingEvents><Tracking event="start"><![CDATA[https://pubads.g.doubleclick.net/pagead/interaction/?ai=BpRZitSlkYZGqK5W6nwTT7rGICLng-OpFAAAAEAEg6K-pFTgBWPbF_aWDBGDJhoCA0CSyAQ9jYWZlZGVsaXRlcy5jb226AQlnZnBfaW1hZ2XIAQXaATlodHRwczovL2NhZmVkZWxpdGVzLmNvbS9jaGVlc3ktc2NyYW1ibGVkLWVnZ3MtaW4tYXZvY2Fkby-YAvjSAcACAuACAOoCTC8xODE5MDE3Ni9BZFRocml2ZV9WaWRlb19Db2xsYXBzZV9BdXRvcGxheV9Tb3VuZE9mZi81NmY5YWE1NGMwMTUyZTM1NGQ4ZWU3MDH4AoLSHpAD4AOYA-ADqAMB4AQB0gUGENq_wbQUkAYBoAYkqAfz0RuoB5bYG6gHqpuxAqgH35-xAtgHAOAHH9IIBwiAYRABGB3YCAKACgWYCwGADAHQFQGAFwE&sigh=xgcGhDZ_1tg&label=part2viewed&ad_mt=[AD_MT]&acvw=[VIEWABILITY]&gv=[GOOGLE_VIEWABILITY]]]></Tracking><Tracking event="firstQuartile"><![CDATA[https://pubads.g.doubleclick.net/pagead/interaction/?ai=BpRZitSlkYZGqK5W6nwTT7rGICLng-OpFAAAAEAEg6K-pFTgBWPbF_aWDBGDJhoCA0CSyAQ9jYWZlZGVsaXRlcy5jb226AQlnZnBfaW1hZ2XIAQXaATlodHRwczovL2NhZmVkZWxpdGVzLmNvbS9jaGVlc3ktc2NyYW1ibGVkLWVnZ3MtaW4tYXZvY2Fkby-YAvjSAcACAuACAOoCTC8xODE5MDE3Ni9BZFRocml2ZV9WaWRlb19Db2xsYXBzZV9BdXRvcGxheV9Tb3VuZE9mZi81NmY5YWE1NGMwMTUyZTM1NGQ4ZWU3MDH4AoLSHpAD4AOYA-ADqAMB4AQB0gUGENq_wbQUkAYBoAYkqAfz0RuoB5bYG6gHqpuxAqgH35-xAtgHAOAHH9IIBwiAYRABGB3YCAKACgWYCwGADAHQFQGAFwE&sigh=xgcGhDZ_1tg&label=videoplaytime25&ad_mt=[AD_MT]&acvw=[VIEWABILITY]&gv=[GOOGLE_VIEWABILITY]]]></Tracking><Tracking event="midpoint"><![CDATA[https://pubads.g.doubleclick.net/pagead/interaction/?ai=BpRZitSlkYZGqK5W6nwTT7rGICLng-OpFAAAAEAEg6K-pFTgBWPbF_aWDBGDJhoCA0CSyAQ9jYWZlZGVsaXRlcy5jb226AQlnZnBfaW1hZ2XIAQXaATlodHRwczovL2NhZmVkZWxpdGVzLmNvbS9jaGVlc3ktc2NyYW1ibGVkLWVnZ3MtaW4tYXZvY2Fkby-YAvjSAcACAuACAOoCTC8xODE5MDE3Ni9BZFRocml2ZV9WaWRlb19Db2xsYXBzZV9BdXRvcGxheV9Tb3VuZE9mZi81NmY5YWE1NGMwMTUyZTM1NGQ4ZWU3MDH4AoLSHpAD4AOYA-ADqAMB4AQB0gUGENq_wbQUkAYBoAYkqAfz0RuoB5bYG6gHqpuxAqgH35-xAtgHAOAHH9IIBwiAYRABGB3YCAKACgWYCwGADAHQFQGAFwE&sigh=xgcGhDZ_1tg&label=videoplaytime50&ad_mt=[AD_MT]&acvw=[VIEWABILITY]&gv=[GOOGLE_VIEWABILITY]]]></Tracking><Tracking event="thirdQuartile"><![CDATA[https://pubads.g.doubleclick.net/pagead/interaction/?ai=BpRZitSlkYZGqK5W6nwTT7rGICLng-OpFAAAAEAEg6K-pFTgBWPbF_aWDBGDJhoCA0CSyAQ9jYWZlZGVsaXRlcy5jb226AQlnZnBfaW1hZ2XIAQXaATlodHRwczovL2NhZmVkZWxpdGVzLmNvbS9jaGVlc3ktc2NyYW1ibGVkLWVnZ3MtaW4tYXZvY2Fkby-YAvjSAcACAuACAOoCTC8xODE5MDE3Ni9BZFRocml2ZV9WaWRlb19Db2xsYXBzZV9BdXRvcGxheV9Tb3VuZE9mZi81NmY5YWE1NGMwMTUyZTM1NGQ4ZWU3MDH4AoLSHpAD4AOYA-ADqAMB4AQB0gUGENq_wbQUkAYBoAYkqAfz0RuoB5bYG6gHqpuxAqgH35-xAtgHAOAHH9IIBwiAYRABGB3YCAKACgWYCwGADAHQFQGAFwE&sigh=xgcGhDZ_1tg&label=videoplaytime75&ad_mt=[AD_MT]&acvw=[VIEWABILITY]&gv=[GOOGLE_VIEWABILITY]]]></Tracking><Tracking event="complete"><![CDATA[https://pubads.g.doubleclick.net/pagead/interaction/?ai=BpRZitSlkYZGqK5W6nwTT7rGICLng-OpFAAAAEAEg6K-pFTgBWPbF_aWDBGDJhoCA0CSyAQ9jYWZlZGVsaXRlcy5jb226AQlnZnBfaW1hZ2XIAQXaATlodHRwczovL2NhZmVkZWxpdGVzLmNvbS9jaGVlc3ktc2NyYW1ibGVkLWVnZ3MtaW4tYXZvY2Fkby-YAvjSAcACAuACAOoCTC8xODE5MDE3Ni9BZFRocml2ZV9WaWRlb19Db2xsYXBzZV9BdXRvcGxheV9Tb3VuZE9mZi81NmY5YWE1NGMwMTUyZTM1NGQ4ZWU3MDH4AoLSHpAD4AOYA-ADqAMB4AQB0gUGENq_wbQUkAYBoAYkqAfz0RuoB5bYG6gHqpuxAqgH35-xAtgHAOAHH9IIBwiAYRABGB3YCAKACgWYCwGADAHQFQGAFwE&sigh=xgcGhDZ_1tg&label=videoplaytime100&ad_mt=[AD_MT]&acvw=[VIEWABILITY]&gv=[GOOGLE_VIEWABILITY]]]></Tracking><Tracking event="mute"><![CDATA[https://pubads.g.doubleclick.net/pagead/interaction/?ai=BpRZitSlkYZGqK5W6nwTT7rGICLng-OpFAAAAEAEg6K-pFTgBWPbF_aWDBGDJhoCA0CSyAQ9jYWZlZGVsaXRlcy5jb226AQlnZnBfaW1hZ2XIAQXaATlodHRwczovL2NhZmVkZWxpdGVzLmNvbS9jaGVlc3ktc2NyYW1ibGVkLWVnZ3MtaW4tYXZvY2Fkby-YAvjSAcACAuACAOoCTC8xODE5MDE3Ni9BZFRocml2ZV9WaWRlb19Db2xsYXBzZV9BdXRvcGxheV9Tb3VuZE9mZi81NmY5YWE1NGMwMTUyZTM1NGQ4ZWU3MDH4AoLSHpAD4AOYA-ADqAMB4AQB0gUGENq_wbQUkAYBoAYkqAfz0RuoB5bYG6gHqpuxAqgH35-xAtgHAOAHH9IIBwiAYRABGB3YCAKACgWYCwGADAHQFQGAFwE&sigh=xgcGhDZ_1tg&label=admute&ad_mt=[AD_MT]&acvw=[VIEWABILITY]&gv=[GOOGLE_VIEWABILITY]]]></Tracking><Tracking event="unmute"><![CDATA[https://pubads.g.doubleclick.net/pagead/interaction/?ai=BpRZitSlkYZGqK5W6nwTT7rGICLng-OpFAAAAEAEg6K-pFTgBWPbF_aWDBGDJhoCA0CSyAQ9jYWZlZGVsaXRlcy5jb226AQlnZnBfaW1hZ2XIAQXaATlodHRwczovL2NhZmVkZWxpdGVzLmNvbS9jaGVlc3ktc2NyYW1ibGVkLWVnZ3MtaW4tYXZvY2Fkby-YAvjSAcACAuACAOoCTC8xODE5MDE3Ni9BZFRocml2ZV9WaWRlb19Db2xsYXBzZV9BdXRvcGxheV9Tb3VuZE9mZi81NmY5YWE1NGMwMTUyZTM1NGQ4ZWU3MDH4AoLSHpAD4AOYA-ADqAMB4AQB0gUGENq_wbQUkAYBoAYkqAfz0RuoB5bYG6gHqpuxAqgH35-xAtgHAOAHH9IIBwiAYRABGB3YCAKACgWYCwGADAHQFQGAFwE&sigh=xgcGhDZ_1tg&label=adunmute&ad_mt=[AD_MT]&acvw=[VIEWABILITY]&gv=[GOOGLE_VIEWABILITY]]]></Tracking><Tracking event="rewind"><![CDATA[https://pubads.g.doubleclick.net/pagead/interaction/?ai=BpRZitSlkYZGqK5W6nwTT7rGICLng-OpFAAAAEAEg6K-pFTgBWPbF_aWDBGDJhoCA0CSyAQ9jYWZlZGVsaXRlcy5jb226AQlnZnBfaW1hZ2XIAQXaATlodHRwczovL2NhZmVkZWxpdGVzLmNvbS9jaGVlc3ktc2NyYW1ibGVkLWVnZ3MtaW4tYXZvY2Fkby-YAvjSAcACAuACAOoCTC8xODE5MDE3Ni9BZFRocml2ZV9WaWRlb19Db2xsYXBzZV9BdXRvcGxheV9Tb3VuZE9mZi81NmY5YWE1NGMwMTUyZTM1NGQ4ZWU3MDH4AoLSHpAD4AOYA-ADqAMB4AQB0gUGENq_wbQUkAYBoAYkqAfz0RuoB5bYG6gHqpuxAqgH35-xAtgHAOAHH9IIBwiAYRABGB3YCAKACgWYCwGADAHQFQGAFwE&sigh=xgcGhDZ_1tg&label=adrewind&ad_mt=[AD_MT]&acvw=[VIEWABILITY]&gv=[GOOGLE_VIEWABILITY]]]></Tracking><Tracking event="pause"><![CDATA[https://pubads.g.doubleclick.net/pagead/interaction/?ai=BpRZitSlkYZGqK5W6nwTT7rGICLng-OpFAAAAEAEg6K-pFTgBWPbF_aWDBGDJhoCA0CSyAQ9jYWZlZGVsaXRlcy5jb226AQlnZnBfaW1hZ2XIAQXaATlodHRwczovL2NhZmVkZWxpdGVzLmNvbS9jaGVlc3ktc2NyYW1ibGVkLWVnZ3MtaW4tYXZvY2Fkby-YAvjSAcACAuACAOoCTC8xODE5MDE3Ni9BZFRocml2ZV9WaWRlb19Db2xsYXBzZV9BdXRvcGxheV9Tb3VuZE9mZi81NmY5YWE1NGMwMTUyZTM1NGQ4ZWU3MDH4AoLSHpAD4AOYA-ADqAMB4AQB0gUGENq_wbQUkAYBoAYkqAfz0RuoB5bYG6gHqpuxAqgH35-xAtgHAOAHH9IIBwiAYRABGB3YCAKACgWYCwGADAHQFQGAFwE&sigh=xgcGhDZ_1tg&label=adpause&ad_mt=[AD_MT]&acvw=[VIEWABILITY]&gv=[GOOGLE_VIEWABILITY]]]></Tracking><Tracking event="resume"><![CDATA[https://pubads.g.doubleclick.net/pagead/interaction/?ai=BpRZitSlkYZGqK5W6nwTT7rGICLng-OpFAAAAEAEg6K-pFTgBWPbF_aWDBGDJhoCA0CSyAQ9jYWZlZGVsaXRlcy5jb226AQlnZnBfaW1hZ2XIAQXaATlodHRwczovL2NhZmVkZWxpdGVzLmNvbS9jaGVlc3ktc2NyYW1ibGVkLWVnZ3MtaW4tYXZvY2Fkby-YAvjSAcACAuACAOoCTC8xODE5MDE3Ni9BZFRocml2ZV9WaWRlb19Db2xsYXBzZV9BdXRvcGxheV9Tb3VuZE9mZi81NmY5YWE1NGMwMTUyZTM1NGQ4ZWU3MDH4AoLSHpAD4AOYA-ADqAMB4AQB0gUGENq_wbQUkAYBoAYkqAfz0RuoB5bYG6gHqpuxAqgH35-xAtgHAOAHH9IIBwiAYRABGB3YCAKACgWYCwGADAHQFQGAFwE&sigh=xgcGhDZ_1tg&label=adresume&ad_mt=[AD_MT]&acvw=[VIEWABILITY]&gv=[GOOGLE_VIEWABILITY]]]></Tracking><Tracking event="creativeView"><![CDATA[https://pubads.g.doubleclick.net/pagead/interaction/?ai=BpRZitSlkYZGqK5W6nwTT7rGICLng-OpFAAAAEAEg6K-pFTgBWPbF_aWDBGDJhoCA0CSyAQ9jYWZlZGVsaXRlcy5jb226AQlnZnBfaW1hZ2XIAQXaATlodHRwczovL2NhZmVkZWxpdGVzLmNvbS9jaGVlc3ktc2NyYW1ibGVkLWVnZ3MtaW4tYXZvY2Fkby-YAvjSAcACAuACAOoCTC8xODE5MDE3Ni9BZFRocml2ZV9WaWRlb19Db2xsYXBzZV9BdXRvcGxheV9Tb3VuZE9mZi81NmY5YWE1NGMwMTUyZTM1NGQ4ZWU3MDH4AoLSHpAD4AOYA-ADqAMB4AQB0gUGENq_wbQUkAYBoAYkqAfz0RuoB5bYG6gHqpuxAqgH35-xAtgHAOAHH9IIBwiAYRABGB3YCAKACgWYCwGADAHQFQGAFwE&sigh=xgcGhDZ_1tg&label=vast_creativeview&ad_mt=[AD_MT]&acvw=[VIEWABILITY]&gv=[GOOGLE_VIEWABILITY]]]></Tracking><Tracking event="fullscreen"><![CDATA[https://pubads.g.doubleclick.net/pagead/interaction/?ai=BpRZitSlkYZGqK5W6nwTT7rGICLng-OpFAAAAEAEg6K-pFTgBWPbF_aWDBGDJhoCA0CSyAQ9jYWZlZGVsaXRlcy5jb226AQlnZnBfaW1hZ2XIAQXaATlodHRwczovL2NhZmVkZWxpdGVzLmNvbS9jaGVlc3ktc2NyYW1ibGVkLWVnZ3MtaW4tYXZvY2Fkby-YAvjSAcACAuACAOoCTC8xODE5MDE3Ni9BZFRocml2ZV9WaWRlb19Db2xsYXBzZV9BdXRvcGxheV9Tb3VuZE9mZi81NmY5YWE1NGMwMTUyZTM1NGQ4ZWU3MDH4AoLSHpAD4AOYA-ADqAMB4AQB0gUGENq_wbQUkAYBoAYkqAfz0RuoB5bYG6gHqpuxAqgH35-xAtgHAOAHH9IIBwiAYRABGB3YCAKACgWYCwGADAHQFQGAFwE&sigh=xgcGhDZ_1tg&label=adfullscreen&ad_mt=[AD_MT]&acvw=[VIEWABILITY]&gv=[GOOGLE_VIEWABILITY]]]></Tracking><Tracking event="acceptInvitationLinear"><![CDATA[https://pubads.g.doubleclick.net/pagead/interaction/?ai=BpRZitSlkYZGqK5W6nwTT7rGICLng-OpFAAAAEAEg6K-pFTgBWPbF_aWDBGDJhoCA0CSyAQ9jYWZlZGVsaXRlcy5jb226AQlnZnBfaW1hZ2XIAQXaATlodHRwczovL2NhZmVkZWxpdGVzLmNvbS9jaGVlc3ktc2NyYW1ibGVkLWVnZ3MtaW4tYXZvY2Fkby-YAvjSAcACAuACAOoCTC8xODE5MDE3Ni9BZFRocml2ZV9WaWRlb19Db2xsYXBzZV9BdXRvcGxheV9Tb3VuZE9mZi81NmY5YWE1NGMwMTUyZTM1NGQ4ZWU3MDH4AoLSHpAD4AOYA-ADqAMB4AQB0gUGENq_wbQUkAYBoAYkqAfz0RuoB5bYG6gHqpuxAqgH35-xAtgHAOAHH9IIBwiAYRABGB3YCAKACgWYCwGADAHQFQGAFwE&sigh=xgcGhDZ_1tg&label=acceptinvitation&ad_mt=[AD_MT]&acvw=[VIEWABILITY]&gv=[GOOGLE_VIEWABILITY]]]></Tracking><Tracking event="closeLinear"><![CDATA[https://pubads.g.doubleclick.net/pagead/interaction/?ai=BpRZitSlkYZGqK5W6nwTT7rGICLng-OpFAAAAEAEg6K-pFTgBWPbF_aWDBGDJhoCA0CSyAQ9jYWZlZGVsaXRlcy5jb226AQlnZnBfaW1hZ2XIAQXaATlodHRwczovL2NhZmVkZWxpdGVzLmNvbS9jaGVlc3ktc2NyYW1ibGVkLWVnZ3MtaW4tYXZvY2Fkby-YAvjSAcACAuACAOoCTC8xODE5MDE3Ni9BZFRocml2ZV9WaWRlb19Db2xsYXBzZV9BdXRvcGxheV9Tb3VuZE9mZi81NmY5YWE1NGMwMTUyZTM1NGQ4ZWU3MDH4AoLSHpAD4AOYA-ADqAMB4AQB0gUGENq_wbQUkAYBoAYkqAfz0RuoB5bYG6gHqpuxAqgH35-xAtgHAOAHH9IIBwiAYRABGB3YCAKACgWYCwGADAHQFQGAFwE&sigh=xgcGhDZ_1tg&label=adclose&ad_mt=[AD_MT]&acvw=[VIEWABILITY]&gv=[GOOGLE_VIEWABILITY]]]></Tracking><Tracking event="exitFullscreen"><![CDATA[https://pubads.g.doubleclick.net/pagead/interaction/?ai=BpRZitSlkYZGqK5W6nwTT7rGICLng-OpFAAAAEAEg6K-pFTgBWPbF_aWDBGDJhoCA0CSyAQ9jYWZlZGVsaXRlcy5jb226AQlnZnBfaW1hZ2XIAQXaATlodHRwczovL2NhZmVkZWxpdGVzLmNvbS9jaGVlc3ktc2NyYW1ibGVkLWVnZ3MtaW4tYXZvY2Fkby-YAvjSAcACAuACAOoCTC8xODE5MDE3Ni9BZFRocml2ZV9WaWRlb19Db2xsYXBzZV9BdXRvcGxheV9Tb3VuZE9mZi81NmY5YWE1NGMwMTUyZTM1NGQ4ZWU3MDH4AoLSHpAD4AOYA-ADqAMB4AQB0gUGENq_wbQUkAYBoAYkqAfz0RuoB5bYG6gHqpuxAqgH35-xAtgHAOAHH9IIBwiAYRABGB3YCAKACgWYCwGADAHQFQGAFwE&sigh=xgcGhDZ_1tg&label=vast_exit_fullscreen&ad_mt=[AD_MT]&acvw=[VIEWABILITY]&gv=[GOOGLE_VIEWABILITY]]]></Tracking><Tracking event="creativeView"><![CDATA[https://pubads.g.doubleclick.net/pagead/interaction/?ai=BpRZitSlkYZGqK5W6nwTT7rGICLng-OpFAAAAEAEg6K-pFTgBWPbF_aWDBGDJhoCA0CSyAQ9jYWZlZGVsaXRlcy5jb226AQlnZnBfaW1hZ2XIAQXaATlodHRwczovL2NhZmVkZWxpdGVzLmNvbS9jaGVlc3ktc2NyYW1ibGVkLWVnZ3MtaW4tYXZvY2Fkby-YAvjSAcACAuACAOoCTC8xODE5MDE3Ni9BZFRocml2ZV9WaWRlb19Db2xsYXBzZV9BdXRvcGxheV9Tb3VuZE9mZi81NmY5YWE1NGMwMTUyZTM1NGQ4ZWU3MDH4AoLSHpAD4AOYA-ADqAMB4AQB0gUGENq_wbQUkAYBoAYkqAfz0RuoB5bYG6gHqpuxAqgH35-xAtgHAOAHH9IIBwiAYRABGB3YCAKACgWYCwGADAHQFQGAFwE&sigh=xgcGhDZ_1tg&label=videoautoplayed&ad_mt=[AD_MT]&acvw=[VIEWABILITY]&gv=[GOOGLE_VIEWABILITY]]]></Tracking></TrackingEvents><VideoClicks><ClickTracking id="GDFP"><![CDATA[https://pubads.g.doubleclick.net/pcs/click?xai=AKAOjsuhRxt4GXfZQhjArxaK--FlA1XvRyFyYaTF-PtnSyW_4Nr2jkpLIBFcmJ1pIUmQhpGWheLdSKbSdpT9fgaA2ksXgjwNzDoLwcy1n453EkyZbuhKVaBdgZJPsOLaPF3niFuweHjdp1xEmN_9F-TEh8Mu2MHsRQorPJRz6yXoLvOq55dL8aAFAoaU2yisaOlefpQ5aHe_WnO3VRP0cl5fDStZg2HP6jFoO8cyxRMtGiIqArGVQrnlV6io1fBy5kUBYaHNgxEkCiJpTTp-plXbrUYE20DF077R3KZj6FH95Gj1YJKT14SKNa-WQf-I9yg8I7A6lCz8C3sW7Xow69iISaYmP3v_ELsHc7Zody1jclZz251MbERCd1oP-cDChH4&sig=Cg0ArKJSzPBDnxDeg0N-EAE&fbs_aeid=[gw_fbsaeid]&urlfix=1]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="waterfall" fallback_index="0"/><Extension type="metrics"><FeEventId>tSlkYfW8KcHHnATy2pSwCA</FeEventId><AdEventId>CNHYw-upwvMCFRXdhwodU3cMgQ</AdEventId></Extension><Extension type="ShowAdTracking"><CustomTracking><Tracking event="show_ad"><![CDATA[https://securepubads.g.doubleclick.net/pcs/view?xai=AKAOjsvruFakf838T4YCWbHqgXNan8V5DOcP2nRtZT21721J1kclWkRoiEBayWXgU3EOgg46yu-IriO8Tiutc06Wo6_hxyMIH3yc1Ek4ecwMPqbuHixS8qMZdKt_yXSQW795GarEUmiXS8Q9t3b_V_p4cHBDiekKD_wqA74r2hay5SyIfkiFMO8QqoO64VOFufi4di19DwNNrYFVIBsd7KqwFJby-Ij_2_spGTI6iKi9T0r08RCxkYc5lqH_ttb65lT_eTha_JWvZdyagiyonEYMXxiSibohKztDb8jxPXd1KvgLCHxC1Bt9kSslTgCy7o7eXmCkI94_pwoBfdw3YtVZ5ugVokbHY_czbxe1Je2XwErVE4L8ckKN1MWJZ3yUfBwztYb0eQ&sig=Cg0ArKJSzLuYp16akKuWEAE&adurl=]]></Tracking></CustomTracking></Extension><Extension type="wrapper_info"><Duration>00:00:30</Duration></Extension><Extension type="video_ad_loaded"><CustomTracking><Tracking event="loaded"><![CDATA[https://pubads.g.doubleclick.net/pagead/interaction/?ai=BpRZitSlkYZGqK5W6nwTT7rGICLng-OpFAAAAEAEg6K-pFTgBWPbF_aWDBGDJhoCA0CSyAQ9jYWZlZGVsaXRlcy5jb226AQlnZnBfaW1hZ2XIAQXaATlodHRwczovL2NhZmVkZWxpdGVzLmNvbS9jaGVlc3ktc2NyYW1ibGVkLWVnZ3MtaW4tYXZvY2Fkby-YAvjSAcACAuACAOoCTC8xODE5MDE3Ni9BZFRocml2ZV9WaWRlb19Db2xsYXBzZV9BdXRvcGxheV9Tb3VuZE9mZi81NmY5YWE1NGMwMTUyZTM1NGQ4ZWU3MDH4AoLSHpAD4AOYA-ADqAMB4AQB0gUGENq_wbQUkAYBoAYkqAfz0RuoB5bYG6gHqpuxAqgH35-xAtgHAOAHH9IIBwiAYRABGB3YCAKACgWYCwGADAHQFQGAFwE&sigh=xgcGhDZ_1tg&label=video_ad_loaded]]></Tracking></CustomTracking></Extension></Extensions></Wrapper></Ad></VAST>',
    );
  },
  video_creative: (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.set('application/xml');
    res.send();
    // res.send('<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="vast.xsd" version="3.0"><Ad id="508280565"><InLine><AdSystem>DBM</AdSystem><AdTitle>In-Stream Video</AdTitle><Error><![CDATA[ https://pagead2.googlesyndication.com/pagead/gen_204?id=notify&exchange=casalemedia&creative_id=381819654&creative_type=121&usl_id=87360814378&errorcode=[ERRORCODE]&asseturi=[ASSETURI]&ord=[CACHEBUSTING]&offset=[CONTENTPLAYHEAD]&d=APEucNXqeHU76EZuKWD-UTmNfHZ0gluFnKA3FVhOROks8O1QKg2-NH4lF2qyyaGbK0VrNBEGsjzCxqGeTVShG_-gn4JCLvIFCg ]]></Error><Impression><![CDATA[ https://googleads4.g.doubleclick.net/pcs/view?xai=AKAOjsv88doBlEVxcwOG0WOUUdCsItiZE6-w9zdLDnaS_ubsnjeWMld7Q3kDN3s5qFTfwMWOfbTZp23tOdTEkWjvlIqRWp0Gx_VQ4VqfzsiF5caFaPQ6Q3zsOuO3Xj9QRs_asvb--Fw04-G8U6gorUMvFaXF7sju6mTzXqfbeRhA75Jszl-iC6u-ojsUY-WDz0tE3gW6RLB3GWe5AWLMQzf2AsgVrizIH_w-lAHr0_ijPqIz7v9cMPtegjH42Y-l2pMbrj63XIUy67AfEdtLUU8mfG1XCUmXGer3nPqyVBmtUsnXGmG0MSkrDsW6nQlfxGDhYkC8OxX2GPyTctFynOpG7m7nuidceFMRJm2LZ66QjLM8zgZ2HCuoKLTU2VqxDbV7aWZMvG3LaPY7uHZVcjz08cUtrJMO1p-4qqFzKgaveMuS-bfgB5TZ7cgYlrvMMwUyPZqCrfwa1ztVtZcxUTSjBMygSq2RLVqN0HJYMt6J-H3HWsW6_ku9SltdpuvTFNLz52A1dbNeslsxy85zBU9JeKoACwz_6Ty0i9Z-dlB4Mm9t7p7_nXTgsemjRy2vLvdwwAsWUlcjn6pu2XzE8Nw-i3jjxxXc4XKxqO_Xtu2PCfkZgmo8bRftv8-HiwaFUX4Ro0VgljE93ptrrkfOcF6IRJB2KBip8JLBdU5PcatId761wo4DztH-bZxP2VcS-2Zk_vP756yTifJmScCpaqrc1FMNMbv05bok2sDoCrgnbifc3KtrsrcDt9xhJIcMNT0dqKkLNFHByq5VypAEyDU1HwZBETKCkZsvS3j9BXig2-xzi3P1zNjFQStD4t9HVxuxxZOylT9dAF75nMtZgYubaeEnOyCX8Ib0xgxAHogMLAhZDdodrFP7Yvi8-PyYL0n6q0etmKe_yfqWQZT6D58K4Tj8Vy9CtWurfk7xGgnpOLMOhX9zgG4H16Sp4HWDgOsjaf3ZyiHaHENZRrd4-agueUA5jM10SeVAIyR9bKu7PKFMweQkHNVO7ZGtNpPsOjR-AWjJB5liUSlIvnylrwM0oQL2dfD6r0zFkxbnESR3ri9rs6BV5uTXsHfv6rYx-zNm3b-4TTLYWepGWTro-OSmvf908M8V1VT5SuNA60zwBszEZ6W5bntOG_yIh1qIGd-xQyfXlWyZ7LmrIxYBmVQexyKlg9DNCGaADxssCNT8O_OTHcAFtyOO2rRikNLXSSxsne1mLaH3mU4E3aBRAZLvlWIg4oXSDh74IAad_DOEZBtDTIwpq1Q2DmvsSmTUftCAX8CvvP4ltVJXh0JzNUuWvt5RHeV6cNOkplXGOA&sai=AMfl-YRkM2HS8HwOviroYc5vT1uhRllHN6Jtvp9DPsVUSFIgMWbv1RuC8QgtKJSGn5HMG1ggJ-srC0gE9J1wYqvHEc67QXFzNwgsFZ518JP_ZlQsIx4mVujpvxIbqB6LAxrIO3OsWD81dcul8UJ8o3E8q98T3_TtipLIFZjdb20B4VuPz_rkvtryhoc&sig=Cg0ArKJSzKN0t2rz3Zv2EAE&pr=13:YWBvPQAAAABrfRdAB_Nv_nDClnWraxSMVCU_Vw&fbs_aeid=[gw_fbsaeid]&urlfix=1&adurl= ]]></Impression><Impression><![CDATA[ https://googleads.g.doubleclick.net/xbbe/pixel?d=COqCbBCGhJG7AhiGtoi2ASABMAE&v=APEucNWCaeUv2PRk4IKNCL4TtrJcJBRwsChliy-h1xgEuLsb0tc--4ajIcHveN6mBLabDZbCfm22ZbHzsZTZTv_M2mwIHxIrlQ ]]></Impression><Creatives><Creative id="158678464" sequence="1"><Linear><Duration>00:00:15</Duration><TrackingEvents><Tracking event="start"><![CDATA[ https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;met=1;ecn1=1;etm1=0;eid1=11; ]]></Tracking><Tracking event="firstQuartile"><![CDATA[ https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;met=1;ecn1=1;etm1=0;eid1=960584; ]]></Tracking><Tracking event="midpoint"><![CDATA[ https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;met=1;ecn1=1;etm1=0;eid1=18; ]]></Tracking><Tracking event="thirdQuartile"><![CDATA[ https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;met=1;ecn1=1;etm1=0;eid1=960585; ]]></Tracking><Tracking event="complete"><![CDATA[ https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;met=1;ecn1=1;etm1=0;eid1=13; ]]></Tracking><Tracking event="mute"><![CDATA[ https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;met=1;ecn1=1;etm1=0;eid1=16; ]]></Tracking><Tracking event="unmute"><![CDATA[ https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;met=1;ecn1=1;etm1=0;eid1=149645; ]]></Tracking><Tracking event="pause"><![CDATA[ https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;met=1;ecn1=1;etm1=0;eid1=15; ]]></Tracking><Tracking event="fullscreen"><![CDATA[ https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;met=1;ecn1=1;etm1=0;eid1=19; ]]></Tracking><Tracking event="acceptInvitation"><![CDATA[ https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;met=1;ecn1=1;etm1=0;eid1=10; ]]></Tracking><Tracking event="close"><![CDATA[ https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;met=1;ecn1=1;etm1=0;eid1=8; ]]></Tracking></TrackingEvents><AdParameters><![CDATA[ &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt; &lt;VASTxmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xsi:noNamespaceSchemaLocation=&quot;vast.xsd&quot; version=&quot;3.0&quot;&gt; &lt;Ad id=&quot;508280565&quot;&gt; &lt;Wrapper&gt; &lt;AdSystem&gt;DBM&lt;/AdSystem&gt; &lt;VASTAdTagURI&gt;&lt;![CDATA[https://rtr.innovid.com/r1.61548db9a32ac8.05854881;cb=[timestamp]]]&gt;&lt;/VASTAdTagURI&gt; &lt;Error&gt;&lt;![CDATA[https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;met=1;ecn1=1;etm1=0;eid1=200015;errorcode=[ERRORCODE]]]&gt;&lt;/Error&gt; &lt;Impression&gt;&lt;![CDATA[https://s0.2mdn.net/dot.gif]]&gt;&lt;/Impression&gt; &lt;Impression&gt;&lt;![CDATA[https://www.youtube.com/pagead/slav?sla_ls=AC4bGOE1ChrLKFQrTTGG9UFy966kisjcx0oL0pD9jcWrceO-MQN3jZcBQft9BlP48Jm46QqGVI8Kou4BhxfWmK6-hzwT_tkDMYDRpf65pA]]&gt;&lt;/Impression&gt; &lt;Creatives&gt; &lt;Creative sequence=&quot;1&quot;&gt; &lt;Linear&gt; &lt;Duration&gt;00:00:15&lt;/Duration&gt; &lt;TrackingEvents&gt; &lt;Tracking event=&quot;start&quot;&gt;&lt;![CDATA[https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;av=1;acvw=[VIEWABILITY];gv=[GOOGLE_VIEWABILITY];dc_rfl=[URL_SIGNALS];ecn1=0;etm1=0;eid1=210001;]]&gt;&lt;/Tracking&gt; &lt;Tracking event=&quot;firstQuartile&quot;&gt;&lt;![CDATA[https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;av=1;acvw=[VIEWABILITY];gv=[GOOGLE_VIEWABILITY];ecn1=0;etm1=0;eid1=210002;]]&gt;&lt;/Tracking&gt; &lt;Tracking event=&quot;midpoint&quot;&gt;&lt;![CDATA[https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;av=1;acvw=[VIEWABILITY];gv=[GOOGLE_VIEWABILITY];ecn1=0;etm1=0;eid1=210003;]]&gt;&lt;/Tracking&gt; &lt;Tracking event=&quot;thirdQuartile&quot;&gt;&lt;![CDATA[https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;av=1;acvw=[VIEWABILITY];gv=[GOOGLE_VIEWABILITY];ecn1=0;etm1=0;eid1=210004;]]&gt;&lt;/Tracking&gt; &lt;Tracking event=&quot;complete&quot;&gt;&lt;![CDATA[https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;av=1;acvw=[VIEWABILITY];gv=[GOOGLE_VIEWABILITY];ecn1=0;etm1=0;eid1=210005;]]&gt;&lt;/Tracking&gt; &lt;Tracking event=&quot;mute&quot;&gt;&lt;![CDATA[https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;av=1;acvw=[VIEWABILITY];gv=[GOOGLE_VIEWABILITY];ecn1=0;etm1=0;eid1=210006;]]&gt;&lt;/Tracking&gt; &lt;Tracking event=&quot;unmute&quot;&gt;&lt;![CDATA[https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;av=1;acvw=[VIEWABILITY];gv=[GOOGLE_VIEWABILITY];ecn1=0;etm1=0;eid1=210007;]]&gt;&lt;/Tracking&gt; &lt;Tracking event=&quot;pause&quot;&gt;&lt;![CDATA[https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;av=1;acvw=[VIEWABILITY];gv=[GOOGLE_VIEWABILITY];ecn1=0;etm1=0;eid1=210008;]]&gt;&lt;/Tracking&gt; &lt;Tracking event=&quot;fullscreen&quot;&gt;&lt;![CDATA[https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;av=1;acvw=[VIEWABILITY];gv=[GOOGLE_VIEWABILITY];ecn1=0;etm1=0;eid1=210009;]]&gt;&lt;/Tracking&gt; &lt;Tracking event=&quot;acceptInvitation&quot;&gt;&lt;![CDATA[https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;av=1;acvw=[VIEWABILITY];gv=[GOOGLE_VIEWABILITY];ecn1=0;etm1=0;eid1=210011;]]&gt;&lt;/Tracking&gt; &lt;Tracking event=&quot;close&quot;&gt;&lt;![CDATA[https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;av=1;acvw=[VIEWABILITY];gv=[GOOGLE_VIEWABILITY];ecn1=0;etm1=0;eid1=210010;]]&gt;&lt;/Tracking&gt; &lt;/TrackingEvents&gt; &lt;/Linear&gt; &lt;/Creative&gt; &lt;/Creatives&gt; &lt;Extensions&gt;&lt;Extension type=&quot;geo&quot;&gt;&lt;Country&gt;US&lt;/Country&gt;&lt;Bandwidth&gt;4&lt;/Bandwidth&gt;&lt;BandwidthKbps&gt;12060&lt;/BandwidthKbps&gt;&lt;/Extension&gt;&lt;Extension type=&quot;sodar&quot;&gt;&lt;Siub&gt;&lt;![CDATA[HdsydzJK]]&gt;&lt;/Siub&gt;&lt;Bgub&gt;&lt;![CDATA[Op0h1o4bLATv4Gekw87wLIhuIhk3mUgQ1PXLVSVUXpk]]&gt;&lt;/Bgub&gt;&lt;Scs&gt;&lt;![CDATA[B55Y9M3FgYZ3xEZPMhQbc8Km4BgAAAAA4AeAEAg]]&gt;&lt;/Scs&gt;&lt;Bgp&gt;&lt;![CDATA[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]]&gt;&lt;/Bgp&gt;&lt;/Extension&gt;&lt;Extension type=&quot;activeview&quot;&gt;&lt;CustomTracking&gt;&lt;Tracking event=&quot;viewable_impression&quot;&gt;&lt;![CDATA[https://pagead2.googlesyndication.com/pcs/activeview?xai=AKAOjsshv67ytA29jcZ53m-KthZFXt7q-BvoQnuZLe7nq6jGTXlWgyzKR23KN7wKTRG7lbjsQyDqioMPlwZlZ4_qs0-KIsSKUGvvxrg&amp;sig=Cg0ArKJSzDd1nDcrH3vjEAE&amp;id=lidarv&amp;acvw=[VIEWABILITY]&amp;gv=[GOOGLE_VIEWABILITY]]]&gt;&lt;/Tracking&gt;&lt;Tracking event=&quot;measurable_impression&quot;&gt;&lt;![CDATA[https://pagead2.googlesyndication.com/pcs/activeview?xai=AKAOjsshv67ytA29jcZ53m-KthZFXt7q-BvoQnuZLe7nq6jGTXlWgyzKR23KN7wKTRG7lbjsQyDqioMPlwZlZ4_qs0-KIsSKUGvvxrg&amp;sig=Cg0ArKJSzDd1nDcrH3vjEAE&amp;id=lidarv&amp;acvw=[VIEWABILITY]&amp;gv=[GOOGLE_VIEWABILITY]&amp;avm=1]]&gt;&lt;/Tracking&gt;&lt;Tracking event=&quot;fully_viewable_audible_half_duration_impression&quot;&gt;&lt;![CDATA[https://pagead2.googlesyndication.com/pcs/activeview?xai=AKAOjsshv67ytA29jcZ53m-KthZFXt7q-BvoQnuZLe7nq6jGTXlWgyzKR23KN7wKTRG7lbjsQyDqioMPlwZlZ4_qs0-KIsSKUGvvxrg&amp;sig=Cg0ArKJSzDd1nDcrH3vjEAE&amp;id=lidarv&amp;acvw=[VIEWABILITY]&amp;gv=[GOOGLE_VIEWABILITY]]]&gt;&lt;/Tracking&gt;&lt;Tracking event=&quot;viewable_impression&quot;&gt;&lt;![CDATA[https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;av=1;acvw=[VIEWABILITY];gv=[GOOGLE_VIEWABILITY];ecn1=0;etm1=0;eid1=200000;]]&gt;&lt;/Tracking&gt;&lt;Tracking event=&quot;measurable_impression&quot;&gt;&lt;![CDATA[https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;av=1;acvw=[VIEWABILITY];gv=[GOOGLE_VIEWABILITY];ecn1=0;etm1=0;eid1=200101;]]&gt;&lt;/Tracking&gt;&lt;Tracking event=&quot;fully_viewable_audible_half_duration_impression&quot;&gt;&lt;![CDATA[https://ade.googlesyndication.com/ddm/activity/dc_oe=ChMI3dazup278wIVE2bBCh1ceApnEAAYACDA-9RLOhoIhoSRuwIQ1eKUn9wDGKPzvt4DIOrcvt3qDkITCOGHkaibu_MCFUrOKAUdcQgDrg;dc_rmcid=CAASEuRozJCrsLcz0697fD-uirVF4g;eps=CIBhEAEYXw;av=1;acvw=[VIEWABILITY];gv=[GOOGLE_VIEWABILITY];ecn1=0;etm1=0;eid1=200102;]]&gt;&lt;/Tracking&gt;&lt;/CustomTracking&gt;&lt;/Extension&gt;&lt;Extension type=&quot;dart&quot;&gt;&lt;AdServingData&gt;&lt;DeliveryData&gt;&lt;GeoData&gt;&lt;![CDATA[ct=US&amp;st=NJ&amp;city=0&amp;dma=0&amp;zp=&amp;bw=4]]&gt;&lt;/GeoData&gt;&lt;/DeliveryData&gt;&lt;/AdServingData&gt;&lt;/Extension&gt;&lt;/Extensions&gt; &lt;/Wrapper&gt; &lt;/Ad&gt; &lt;/VAST&gt; ]]></AdParameters><VideoClicks><ClickTracking><![CDATA[ https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsuxhbGE_1KpnnU93K2audobqdNe6r3yLosInM6k9wIiUiG6ymKnP4Jmn9804AqskSO76C7GFBKyQkuocR-2S5rt_adsC0EZT2_zMEsbCJNql7h9DBGMuc7jwH6l6h-hPdIAKsQKTBTliwKiSEu63QaZZq-swpZq2NEOj6LOi3Th3f24J11ApV_l05qoYRlTO-kWGHhmOEm743KmUStfgJ1M99Qj-y-2iGoOICYBWxNLvGNh-_fQCi_e0pWSmvgfk-YlLmBMJEokg11oIsUrMI-b8kY18TaDA4mjPui0f27LYLk9T36X4IVc8GlXyC5l-BDMWssfTJ5PLHAHKjagoS3-WKFbktmfuQgYRgr4gnrANTHQdau862sBCub4q2yoclCXt3QAftBWhJr_99Getph-LLR3UGgz5K-tVvg6fYcAJaEb6M_PA1MB7lxfwCTDzAFpH6bnN5q4qqLNvM_WAAVBH0eJZaa0D1aMCEbJRRrHPG9LcfM7yLpQ8FQpLaBpw0UM3yTxPvgK3phsIx_5yJKd7BYtlG6gixrfZMpVAAKESBLkX6XkKGoTePSODZLYn0csBBnVJocSF_IXXCRd9A6Iri5CHUi7FD15NZxkNHOmQUWapH3-rYs2_H776D2AegyzzxVVFGW38xB7AC66aWsM9uJRHdw7yDLLTPv2cKX-U2VnFLgXmNYsfAwqRa1Tf43TqOVOCykqcpW31z3G4k5A22yWWzsbpPSn6i-G72eGMy3PzIDeUubfrcnJZ4McO2_pC8vSEFEzMdUCkuvJAHKILWkbpH0JjT8AXUvmKGVN3jeMMUcpT3MKGci_f-vYBqIdIbqwYK3biDcEzcoctYArMhllvgsthThrQrb3sQ_R0Ea7fMWiI1aNqZ30d80zs7DGTlXehRQ2f5KMRhyrawObVfkrG485HgZm6YNTdnieuasgF4ihTU-529l4b_AYn6Dvuk5jfmuLO-9tOBBmhO5x5-C-VbAoWCvfF7-hAUTqZf-ElKGChQNxyB56WFAlyW4LY0NhVenEJGXR1OtvW8WmjbG_jfRABSPLRBWke_yiAkq5AR1i9BjG7RBtAU19DJRqV0sWcF3Z3lUE9s9pI5IIEdxOYXcl1Z7EfKlTe0j_Lgf8P3cV0hqQQ1cUBy5vIyNQV9uWvVRZCKX8wuCPKg2il1lWrfsVKNDTvbmmwBJ-aBpmEGMmSw2lIfFG1XvWjJGlpca6Vi7XNfM67LI5_xqGeZWPYUfxZr9AUw3_Pxw4QjNDlVSPbX8B8y0jALkx2LjguHqg2EQHb90BykOVPEvei-T9vFXOaH88NGdYJW_n&sai=AMfl-YSRWb99K_kJw6Wy_e2TfZ_P6Qkis0ETGyJ9oZ9cN7otWW2GdSLoLSsnpC_UKmqH-ZsQyGFyGeFVMB_aKRgohq15BI054MHIRMhQWOaehPWkvHDwtnDK8Hj5ntZjZNq9ZZMXzidIhwV_oslfuTDBYswNWxk2b9ZUd1o07RTzAQMJO9egiPByFjdkvJv9BuhmZf8IE3Uz&sig=Cg0ArKJSzDP5-tEWmddlEAE&pr=13:YWBvPQAAAABrfRdAB_Nv_nDClnWraxSMVCU_Vw&fbs_aeid=[gw_fbsaeid]&urlfix=1&adurl= ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension type="geo"><Country>US</Country><Bandwidth>4</Bandwidth><BandwidthKbps>12060</BandwidthKbps></Extension><Extension type="dart"><AdServingData><DeliveryData><GeoData><![CDATA[ ct=US&st=NJ&city=0&dma=0&zp=&bw=4 ]]></GeoData></DeliveryData></AdServingData></Extension></Extensions></InLine></Ad></VAST>')
  },
};
