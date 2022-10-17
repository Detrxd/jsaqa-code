require("@4tw/cypress-drag-drop");

Cypress.Commands.add("goToStartPage", () => {
  cy.visit("http://qamid.tmweb.ru/admin");
});

Cypress.Commands.add("successfulАuthorization", (login, password) => {
  cy.get('[type="email"]').type(login);
  cy.get('[type="password"]').type(password);
  cy.get('[class="text-center"]').click();
});
