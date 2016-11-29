var path = require('path');
var mkdirp = require('mkdirp');

var tempDir = path.join(__dirname, '..', 'temp');
mkdirp(tempDir);

module.exports = {
  tempFile: path.join(tempDir, 'content')
};
