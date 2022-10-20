require("@4tw/cypress-drag-drop");

Cypress.Commands.add("goToStartPage", () => {
  cy.visit("http://qamid.tmweb.ru/admin");
});

Cypress.Commands.add("goToBookPage", () => {
  cy.visit("http://localhost:3001/");
});

Cypress.Commands.add("successfulАuthorization", (login, password) => {
  cy.get('[type="email"]').type(`${login}`);
  cy.get('[type="password"]').type(`${password}`);
  cy.get('[class="text-center"]').click();
});

Cypress.Commands.add("successfulBookAuthorization", (login, password) => {
  cy.get(".ml-auto > .ml-2").click();
  cy.get('[type="email"]').type(`${login}`);
  cy.get('[type="password"]').type(`${password}`);
  cy.get("form > .ml-2").click();
  cy.contains("Add new").click();
});

Cypress.Commands.add("addNewFavoriteBook", (title, description, author) => {
  cy.contains("Book description").should("be.visible");
  cy.get("#title").type(title);
  cy.get("#description").type(description);
  cy.get("#authors").type(author);
  cy.get("#favorite").click();
  cy.contains("Submit").click();
  cy.contains(author).should("be.visible");
  cy.contains("Delete from favorite").should("be.visible");
});
