import { user } from "/User/loginFirstUser.js";

describe("Logining into testapp", () => {
  it("Type testlogin & testpassword", () => {
    cy.visitTestPage();
    cy.contains("Log in").click();
    cy.get('[placeholder="Enter email"]').type(user.email);
    cy.get('[placeholder="Enter password"]').type(user.password);
    cy.contains("Submit").click();
    cy.get('[class="pt-2"]').should(
      "contain.text",
      "Добро пожаловать " + `${user.email}`
    );
  });
  CDDC;
  it("Should not login with empty login", () => {
    cy.visitTestPage();
    cy.contains("Log in").click();
    cy.get("#mail").type(" ");
    cy.get("#pass").type("test");
    cy.contains("Submit").click();
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });

  it("Should not login with empty password", () => {
    cy.visitTestPage();
    cy.contains("Log in").click();
    cy.get("#mail").type("test@test.com");
    cy.contains("Submit").click();
    cy.get("#pass")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
});
