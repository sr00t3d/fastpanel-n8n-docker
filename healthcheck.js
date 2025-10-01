var http = require('http');

var options = {
  host: '127.0.0.1',
  port: 5678,
  path: '/healthz',
  method: 'GET',
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  process.exit(res.statusCode === 200 ? 0 : 1);
});

req.on('error', function(e) {
  console.log('ERROR: ' + e.message);
  process.exit(1);
});

req.end();