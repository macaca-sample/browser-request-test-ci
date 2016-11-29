'use strict';

var fs = require('fs');
var wd = require('webdriver-client')({
  platformName: 'desktop',
  browserName: 'electron'
});

var config = require('./config');

describe('macaca desktop sample', function() {
  this.timeout(5 * 60 * 1000);

  const driver = wd.initPromiseChain();
  const initialURL = 'http://localhost:4567/test';

  before(() => {
    return driver
      .initDriver()
      .setWindowSize(800, 600);
  });

  it('#0 should load success', function() {
    return driver
      .get(initialURL)
      .sleep(3000);
  });

  it('#1 should fire button click', function() {
    return driver
      .elementById('test')
      .click()
      .sleep(1000)
      .then(function() {
        // expect
        var content = fs.readFileSync(config.tempFile, 'utf8');
        console.log(content);
        content.should.be.equal('GET');
      });
  });

  after(() => {
    return driver
      .quit();
  });
});
