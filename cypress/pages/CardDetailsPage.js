const { faker } = require("@faker-js/faker"); // importing faker
require("cypress-real-events"); // importing cypress-real-events

class CardDetailsPage {
  constructor() {}

  submitCardDeatils() {
    cy.wait(5000).get("h4").click(); // clicking on the h4 element
    cy.realPress("Tab").wait(1000); // pressing tab key and waiting for 1 second
    const cardNumber = "5555555555554444";
    const cardGroups = [
      cardNumber.slice(0, 4), // slicing the card number into 4 groups
      cardNumber.slice(4, 8),
      cardNumber.slice(8, 12),
      cardNumber.slice(12, 16),
    ];
    cardGroups.forEach((group) => {
      cy.realType(group); // typing the card number into the input field
    });
    cy.wait(1000).realPress("Tab").wait(1000).realType("12/30"); // typing the expiry date into the input field
    cy.wait(1000)
      .realPress("Tab")
      .wait(1000)
      .realType(faker.finance.creditCardCVV()); // typing the cvv into the input field
    cy.wait(1000)
      .realPress("Tab")
      .wait(1000)
      .realPress("Tab")
      .wait(1000)
      .realType(faker.person.fullName()); // typing the full name into the input field
    cy.wait(1000).realPress("Tab").wait(1000).realType("USA");
    cy.wait(1000)
      .realPress("Enter") // pressing enter key
      .wait(1000)
      .realPress("Tab") // pressing tab key
      .wait(1000)
      .realPress("Tab") // pressing tab key
      .wait(1000)
      .realPress("Enter") // pressing enter key
      .wait(5000); // waiting for 5 seconds
  }
}

export default CardDetailsPage;
