var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var path = require('path');
var cors = require('cors');
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

app.use(bodyParser.text());

// MiddleWare
var corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
};
app.use(cors(corsOptions));
app.use(express.static(__dirname));

app.get('/', function (req, res) {
  //path to file you're serving
  // res.sendFile(path.join(__dirname + '/test.html'));
});

function randomRangeCPM(min, max) {
  cpm = (Math.random() * (max - min + 1) + min).toFixed(2);
  return cpm;
}

const spoofCtrl = require('./controllers/spoofCtrl.js');

app.get('/renderer-test', (req, res) => {
  res.sendFile(path.join(__dirname + '/test-pages/render-test.html'));
});

// Endpoints
app.get('/hi', (req, res) => {
  //path to file you're serving
  res.sendFile(path.join(__dirname + '/test-pages/pbjs_testPage.html'));
});
app.get('/demand-manager', (req, res) => {
  //path to file you're serving
  res.sendFile(path.join(__dirname + '/test-pages/managed_config_prebid.html'));
});
app.get('/prebid-video', (req, res) => {
  res.sendFile(path.join(__dirname + '/test-pages/prebid-video.html'));
});

app.get('/creative/e24ea1d0bf869c0b74946930dd2e16e0.xml', (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.sendFile(path.join(__dirname + '/test-pages/instreamAd.xml'));
});

app.get('/creative/kargoVideo.xml', (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.sendFile(path.join(__dirname + '/test-pages/instreamAd2.xml'));
});

app.get('/loadpic', (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.sendFile(path.join(__dirname + '/test-pages/picture.js'));
});

app.get('/funfun', (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.sendFile(path.join(__dirname + '/test-pages/site-test.html'));
});

app.use('/loadpic', express.static('/test-pages/picture.js'));

app.get('/kargoLoaderScript', (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.sendFile(path.join(__dirname + '/kargoLoaderScript.js'));
});
// app.use('/vpaid', express.static('/test-pages/picture.js'));

app.get('/vpaid', (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.sendFile(path.join(__dirname + '/test-pages/vpaid.js'));
});

app.get('/vpaid', (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.sendFile(path.join(__dirname + '/test-pages/vpaid.js'));
});
app.get('/apex.js', (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.sendFile(path.join(__dirname + '/test-pages/apex.js'));
});

app.use('/amazon', spoofCtrl.amazon);
app.use('/appnexus', spoofCtrl.appnexus);
app.use('/domainConfig', spoofCtrl.domainConfig);
app.use('/newDomain', spoofCtrl.newDomainConfig);
app.use('/slowlane', spoofCtrl.slowlane);
app.use('/pubmaticVideo', spoofCtrl.pubmaticVideo);
app.use('/fubo', spoofCtrl.fubo);
app.use('/teads', spoofCtrl.teads);
app.use('/fubooptions', spoofCtrl.fubooptions);
app.use('/appnexuscacheThing', spoofCtrl.appnexusCacheThing);
app.get('/video/iceland', (req, res) => {
  const filePath = path.join(__dirname, 'iceland.mp4');
  res.setHeader('Content-Type', 'video/mp4');
  res.sendFile(filePath);
});

app.use('/densitysucks', express.static('./wrapper.js'));
app.use('/prebid', express.static('./prebid-library/prebid.js'));
app.use('/rhminfix', express.static('./rhminfix.js'));
app.use('/floors', spoofCtrl.floors);
app.use('/auction', spoofCtrl.auction);
app.use('/optimized_spoof', spoofCtrl.optimized);
app.use('/video_spoof', spoofCtrl.video_spoof);
app.use('/video_creative', spoofCtrl.video_creative);
app.use('/video_vast_wrapper', spoofCtrl.video_vast_wrapper);
app.use('/rubiconVideo', spoofCtrl.rubiconVideo);
app.use('/kargoVideo', spoofCtrl.kargoVideo);
app.use('/sharethroughVideoAd', spoofCtrl.sharethroughVideoAd);
// app.use('/creative/71739d10-c5f3-4e72-aa21-4f05d6658680.xml', spoofCtrl.video_creative)

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
