class ChooseAmountPage { // creating a new class for the choose amount page
  constructor() {
    this.continueToPaymentLocator =
      "//button[contains(text(),'Continue to payment')]"; // locating the continue to payment button
  }

  submitAmount() {
    cy.xpath(this.continueToPaymentLocator).click(); // clicking continue to payment button
  }
}

export default ChooseAmountPage; // exporting the ChooseAmountPage class
