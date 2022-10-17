import { user } from "../fixtures/login";
describe("Проверка открытия сеансов фильма", () => {
  beforeEach(() => {
    cy.goToStartPage();
  });

  it("Успешное открытие фильма", () => {
    cy.visit("http://qamid.tmweb.ru/admin");
    cy.successfulАuthorization(user.login, user.password);
    cy.get('[class="conf-step__title"]')
      .eq(3)
      .should("contain.text", "Сетка сеансов");
    cy.get('[class="conf-step__movie"]')
      .eq(0)
      .move({ deltaX: 209, deltaY: 287 });
  });
});
