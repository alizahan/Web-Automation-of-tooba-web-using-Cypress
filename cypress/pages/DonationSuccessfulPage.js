class DonationSuccessfulPage { // creating a new class for the donation successful page
  constructor() {}

  validateDonation() {
    cy.get("h1").should("include.text", "Jazak-Allah"); // validating the donation
  }
}

export default DonationSuccessfulPage; // exporting the DonationSuccessfulPage class
