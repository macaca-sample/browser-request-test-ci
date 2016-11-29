var fs = require('fs');
var http = require('http');

var config = require('./test/config');

http.createServer(function(req, res) {

  fs.writeFileSync(config.tempFile, req.method);
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('');
}).listen(process.argv[process.argv.length - 1]);
