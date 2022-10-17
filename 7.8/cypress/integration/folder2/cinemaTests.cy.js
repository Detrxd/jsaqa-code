const selectors = require("../../fixtures/selectors.json");
const answers = require("../../fixtures/answers.json");
const users = require("../../fixtures/users.json");

const {
  getRandomInt,
  getNeededDatestamp,
  getDateFromStamp,
} = require("../../support/dateExm.js");

import FirstBookedPage from "../../support/discPages/firstAdminPage.js";
import SeatsPage from "../../support/discPages/seatsPage.js";
import IndexPage from "../../support/discPages/initPage.js";
import AdminLoginForm from "../../support/discPages/admLog.js";

const stsPge = new SeatsPage();
const indexPge = new IndexPage();
const admLoginFrm = new AdminLoginForm();
const frstBookedPage = new FirstBookedPage();
before(() => {
  cy.visit("/client/index.php");
});

//тест-спек с тестами для проверки корректности отображения главной страницы
describe("Cinema tests. Testings main page ", () => {
  it("Should successfully open main page", () => {
    indexPge
      .getTitle()
      .contains(answers.indexPage.answInHead)
      .should("be.visible");
  });

  it("Should have current day to the left ", () => {
    let curDs = getNeededDatestamp(selectors.indexPage[1].day);
    console.log(getDateFromStamp(curDs));
    indexPge
      .getCurrentDate()
      .contains(getDateFromStamp(curDs))
      .should("be.visible");
  });

  it("Should have 3 days from current", () => {
    let curDs = getNeededDatestamp(selectors.indexPage[2].day);
    indexPge
      .get3DaysAfterDate()
      .contains(getDateFromStamp(curDs))
      .should("be.visible");
  });

  it("Should have 7 days from current", () => {
    let curDs = getNeededDatestamp(selectors.indexPage[3].day);
    indexPge
      .getLastDate()
      .contains(getDateFromStamp(curDs))
      .should("be.visible");
  });
});
