const assert = require("chai").assert
const Browser = require("zombie")
const app = require("../server")

describe("Project Vicentito front-end", function() {
  var server, browser, uri;

  uri = "http://localhost:3000/"

  beforeEach(function() {
    browser = new Browser();
  });

  it("should show the right title", function(done) {
    browser.visit(uri, function() {
      browser.assert.text('title', 'Project Vicentito')
      done();
    });
  });
});
