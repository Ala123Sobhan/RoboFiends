/// <reference types="Cypress" />

describe("first test suite", function () {
  it("My first test case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(1000);
    cy.get(".product:visible").should("have.length", 4);

    //create alias
    cy.get(".products").as("productLocator");
    //parent child chaning
    cy.get("@productLocator").find(".product").should("have.length", 4);

    //get 1st indext
    cy.get("@productLocator")
      .find(".product")
      .eq(1)
      .contains("ADD TO CART")
      .click()
      .then(function () {
        console.log("sequential log because its wrapped");
      });

    cy.get("@productLocator")
      .find(".product")
      .each(($e1, index, $list) => {
        const vegText = $e1.find("h4.product-name").text();
        if (vegText.includes("Cashews")) {
          cy.wrap($e1).find("button").click();
        }
      });
    cy.get(".brand").then(function (logoelement) {
      cy.log(logoelement.text());
    });

    console.log("log in browser console");

    cy.get(".brand").should("have.text", "GREENKART");
  });
});

//node_modules/.bin/cypress open - open runner
//./node_modules/.bin/cypress run to run from cli & in headless mode
// add --headed for visibility
// add --browser chrome/firefox/electron/edge
//cypress supports css selectors only - tagname#id, tagname.classname, tagname[attr = 'value'], tagname childtagname
//cypress is async like js, every commands returns a promise which handled internally by cypress
//non cypress command like text() cant resolve promise by themselves, need to be handled
