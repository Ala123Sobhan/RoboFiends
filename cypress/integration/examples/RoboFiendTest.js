/// <reference types="Cypress" />
/// <reference types ="cypress-iframe"/>
import "cypress-iframe";

describe("first test suite", function () {
  it("My robofiend test case", function () {
    cy.visit("http://localhost:3000");

    cy.get("div[class='tc'] h1").then(function (title) {
      expect(title).to.have.text("Hey! Meet My RoboFriends!!");
    });
  });
});

//node_modules/.bin/cypress open - open runner
//./node_modules/.bin/cypress run to run from cli & in headless mode
// add --headed for visibility
// add --browser chrome/firefox/electron/edge
//cypress supports css selectors only - tagname#id, tagname.classname, tagname[attr = 'value'], tagname childtagname
//cypress is async like js, every commands returns a promise which handled internally by cypress
//non cypress command like text() cant resolve promise by themselves, need to be handled

//for iframe - install - npm install -D cypress-iframe
