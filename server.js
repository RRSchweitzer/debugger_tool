var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var securePort = process.env.EXPRESS_PORT || 7070;
var port = process.env.EXPRESS_PORT || 8090;
var credentials = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
};

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(bodyParser.text({ type: ['text/*', 'application/json'] }));

// MiddleWare
app.use((req, res, next) => {
  const allowOrigin = '*';

  res.header('Access-Control-Allow-Origin', allowOrigin);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    req.headers['access-control-request-headers'] || 'Origin, X-Requested-With, Content-Type, Accept',
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Private-Network', 'true');

    return res.sendStatus(200);
  }
  next();
});
app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (origin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  } else {
    // non-browser clients
    res.setHeader('Access-Control-Allow-Origin', '*');
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    req.headers['access-control-request-headers'] || 'Origin, X-Requested-With, Content-Type, Accept',
  );

  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});
app.use(express.static(__dirname));

const spoofCtrl = require('./controllers/spoofCtrl.js');

app.get('/hi', (req, res) => {
  res.sendFile(path.join(__dirname + '/test-ads/pbjs_testPage.html'));
});
app.get('/kargoAd.xml', (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.sendFile(path.join(__dirname + '/test-ads/kargoAd.xml'));
});
app.get('/adagioAd.xml', (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.sendFile(path.join(__dirname + '/test-ads/adagioAd.xml'));
});
app.get('/appnexusAd.xml', (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.sendFile(path.join(__dirname + '/test-ads/appnexusAd.xml'));
});
app.get('/sharethroughAd.xml', (req, res) => {
  res.sendFile(path.join(__dirname + '/test-ads/sharethroughAd.xml'));
});
app.get('/rubiconAd.xml', (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.sendFile(path.join(__dirname + '/test-ads/rubiconAd.xml'));
});
app.get('/kargoLoaderScript', (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.sendFile(path.join(__dirname + '/kargoLoaderScript.js'));
});

app.use('/amazon', spoofCtrl.amazon);
app.use('/appnexusVideo', spoofCtrl.appnexus);
app.use('/domainConfig', spoofCtrl.domainConfig);
app.use('/newDomain', spoofCtrl.newDomainConfig);
app.use('/slowlane', spoofCtrl.slowlane);
app.use('/kargoDisplay', spoofCtrl.kargoDisplay);
app.use('/kargoPrebid', (req, res) => {
  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch (err) {
    return res.status(400).send({ error: 'Invalid JSON' });
  }
  if (body && body.imp && body.imp[0] && body.imp[0].banner) {
    return spoofCtrl.kargoDisplay(req, res);
  }
  return spoofCtrl.kargoVideo(req, res);
});
app.use('/pubmaticVideo', spoofCtrl.pubmaticVideo);
app.use('/fubo', spoofCtrl.fubo);
app.use('/teads', spoofCtrl.teads);
app.use('/fubooptions', spoofCtrl.fubooptions);
app.use('/appnexuscacheThing', spoofCtrl.appnexusCacheThing);
app.get('/video/iceland', (req, res) => {
  const filePath = path.join(__dirname, 'iceland.mp4');
  res.setHeader('Access-Control-Expose-Headers', 'Content-Range, Accept-Ranges, Content-Length');
  res.setHeader('Content-Type', 'video/mp4');
  res.sendFile(filePath);
});

app.use('/pubx', express.static('./prebid-library/pubx.js'));
app.use('/floors', spoofCtrl.floors);
app.use('/auction', spoofCtrl.auction);
app.use('/pbsKargo', spoofCtrl.pbsKargo);
app.use('/optimized_spoof', spoofCtrl.optimized);
app.use('/video_spoof', spoofCtrl.video_spoof);
app.use('/video_creative', spoofCtrl.video_creative);
app.use('/video_vast_wrapper', spoofCtrl.video_vast_wrapper);
app.use('/rubiconVideo', spoofCtrl.rubiconVideo);
app.use('/kargoVideo', spoofCtrl.kargoVideo);
app.use('/adagioVideo', spoofCtrl.adagioVideo);
app.use('/sharethroughVideoAd', spoofCtrl.sharethroughVideoAd);

const secure = https.createServer(credentials, app);
const notSecure = http.createServer(app);
secure.listen(securePort, err => {
  if (err) return console.log(err);
  console.log('Secured localhost started on', securePort);
});
notSecure.listen(port, err => {
  if (err) return console.log(err);
  console.log('localhost started on', port);
});
