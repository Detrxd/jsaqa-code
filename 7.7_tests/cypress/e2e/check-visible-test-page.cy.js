describe("Проверка отображения станицы сайчас бронирования билетов в кинотеатр", () => {
  it("Страница открылась", () => {
    cy.goToStartPage();
    cy.get('[class="login__title"]').should("contain.text", "Авторизация");
  });
});
