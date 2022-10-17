import { user, invalidUser } from "../fixtures/login";

beforeEach(() => {
  cy.goToStartPage();
});

describe("Проверка авторизации в ЛК Администратора", () => {
  it("Пользователь успешно прошёл авторизацию в 'Администраторскую'", () => {
    cy.get('[type="email"]').type(user.login);
    cy.get('[type="password"]').type(user.password);
    cy.get('[class="text-center"]').click();
  });
  it("Авторизация не прошла, ввод невалидных данных", () => {
    cy.get('[type="email"]').type(invalidUser.login);
    cy.get('[type="password"]').type(invalidUser.password);
    cy.get('[class="text-center"]').click();
  });
});
