const RamadanCampaignPage = require("../pages/RamadanCampaignPage"); // importing campaign page
const ChooseAmountPage = require("../pages/ChooseAmountPage"); // importing choose amount page
const DonorDetailsPage = require("../pages/DonorDetailsPage"); // importing donor details page
const CardDetailsPage = require("../pages/CardDetailsPage"); // importing card details page
const DonationSuccessfulPage = require("../pages/DonationSuccessfulPage"); // importing donation successful page

describe("Donation form test", () => {
  it("Tests for donation form", () => {
    const ramadanCampaignPage = new RamadanCampaignPage(); // creating a new instance of the campaign page
    ramadanCampaignPage.gotoRamadanCampaignPage(); // navigating to the campaign page
    ramadanCampaignPage.gotoChooseAmountPage(); // navigating to the choose amount page
    const chooseAmountPage = new ChooseAmountPage(); // creating a new instance of the choose amount page
    chooseAmountPage.submitAmount(); // submitting the amount
    const donorDetailsPage = new DonorDetailsPage(); // creating a new instance of the donor details page
    donorDetailsPage.submitDonorDetails(); // submitting the donor details
    const cardDetailsPage = new CardDetailsPage(); // creating a new instance of the card details page
    cardDetailsPage.submitCardDeatils(); // submitting the card details
    const donationSuccessfulPage = new DonationSuccessfulPage(); // creating a new instance of the donation successful page
    donationSuccessfulPage.validateDonation(); // validating the donation
  });
});
