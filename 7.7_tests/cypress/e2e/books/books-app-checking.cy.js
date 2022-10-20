import { bookUser } from "../../fixtures/login";

beforeEach(() => {
  cy.goToBookPage();
  cy.successfulBookAuthorization(bookUser.login, bookUser.password);
});

describe("Проверка 'Избранного'", () => {
  it("Добавление книги в 'Избранное'", () => {
    cy.addNewFavoriteBook(
      "Пробная книга",
      "Тестовая книга",
      "Руководство по эксплуатации"
    );
  });

  it("Удалиние из 'Избранного'", () => {
    cy.addNewFavoriteBook("Вторая книга", "Третья книга", "Четвёртая книга");
    cy.contains("Delete from favorite").click();
    cy.contains("Add to favorite").should("be.visible");
  });

  it("Добавление в 'Избранное' уже добавленной книги", () => {
    cy.addNewFavoriteBook(
      "Книга номер раз",
      "Книга номер два",
      "Книга номер три"
    );
    cy.contains("Delete from favorite").click();
    cy.contains("Add to favorite").click();
    cy.contains("Delete from favorite").should("be.visible");
  });
});
