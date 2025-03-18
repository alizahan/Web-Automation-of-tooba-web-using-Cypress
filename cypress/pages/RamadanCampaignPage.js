class RamadanCampaignPage { // creating a new class for the ramadan campaign page
  constructor() {
    this.baseUrl = "https://tooba-web.myababil.com/f/ramadan-campaign"; // locating the base url
    this.chooseAmountLocator = "//a[contains(text(),'Choose Amount')]"; // locating the choose amount locator
  }

  gotoRamadanCampaignPage() {
    cy.visit(this.baseUrl); // visiting the base url
  }

  gotoChooseAmountPage() {
    cy.xpath(this.chooseAmountLocator).eq(0).click(); // clicking on the choose amount locator
  }
}

export default RamadanCampaignPage; // exporting the RamadanCampaignPage class  
