// Requiring Chai and the Chai expect interface.
const chai = require("chai");
const expect = chai.expect;
// Requiring fetch from Node Fetch.
const fetch = require("node-fetch");

// Test to see if server communicates with client 
describe("Status Code", function (done) {
  it("Server communicates with client.", function () {
    fetch("http://localhost:3000", function (res) {
      expect(res.status).to.equal(200);
      done();
    });
  });
});

// Test to see whether the user is logged in or not.
// Should be false if not logged in.
describe("Status Code for login server check", function (done) {
    it("Server communicates with client.", function () {
      fetch("http://localhost:3000/loggedIn", function (res) {
        expect(res.status).to.equal(200);
        expect(res.json).to.equal(false);
        done();
      });
    });
  });
