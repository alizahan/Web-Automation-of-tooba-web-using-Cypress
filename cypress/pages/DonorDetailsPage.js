const { faker } = require("@faker-js/faker"); // importing faker

class DonorDetailsPage {
  // creating a new class for the donor details page
  constructor() {
    this.urlPath = "/donor-details"; // locating the url path
    this.donorDetailsHeader = "//h1[contains(text(), 'Donor details')]"; // locating the donor details header
    this.firstNameInput = 'input[placeholder="First name"]'; // locating the first name input field
    this.lastNameInput = 'input[placeholder="Last name"]'; // locating the last name input field
    this.countryCombobox = 'div[role="combobox"]'; // locating the country combobox
    this.bangladeshOption = '[data-value="Bangladesh"]'; // locating the bangladesh option
    this.phoneInput = 'input[type="tel"]'; // locating the phone input field
    this.emailInput = 'input[type="email"]'; // locating the email input field
    this.addressInput = "div.css-hlgwow div"; // locating the address input field
    this.cityOption = "#react-select-2-option-0"; // locating the city option
    this.continueButton = "button.MuiButton-contained"; // locating the continue button
    this.submitSpan = 'span[class*="css-yp"]'; // locating the submit span
  }

  submitDonorDetails() {
    cy.url().should("include", this.urlPath); // validating the url path

    cy.get(this.firstNameInput).type(faker.person.firstName()); // typing the first name into the input field

    cy.get(this.lastNameInput).type(faker.person.lastName()); // typing the last name into the input field

    cy.get(this.countryCombobox).click(); // clicking on the country combobox

    cy.get(this.bangladeshOption).click(); // clicking on the bangladesh option

    cy.get(this.phoneInput).type("1783136275"); // typing the phone number into the input field

    cy.get(this.emailInput).type(faker.internet.email()); // typing the email into the input field

    cy.get(this.addressInput).eq(1).type("Dhaka"); // typing the address into the input field

    cy.get(this.cityOption).click(); // clicking on the city option

    cy.get(this.submitSpan).click(); // clicking on the submit span

    cy.get(this.continueButton).should("be.visible").click(); // clicking on the continue button

    cy.wait(5000); // wait for 5 seconds
  }
}

export default DonorDetailsPage;
