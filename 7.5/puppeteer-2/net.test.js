const {
  clickElement,
  bookingSomeChairs,
  successBooking,
} = require("./lib/commands.js");

let page;
let day = ".page-nav > a:nth-child(3)";
let time = "a.movie-seances__time";
let button = "button.acceptin-button";

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("http://qamid.tmweb.ru/client/index.php");
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("Бронирование билетов в театр", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });

  test("Успешное бронирование одного билета в кино", async () => {
    await bookingSomeChairs(page, day, time, button, "chair 3");
    await successBooking(
      page,
      "После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал."
    );
  });

  test("Успешное бронирование двух билетов в кино", async () => {
    await bookingSomeChairs(page, day, time, button, "chair 7", "chair 8");
    await successBooking(
      page,
      "После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал."
    );
  });

  test("Негативная проверка бронирования билета в кино", async () => {
    await bookingSomeChairs(page, day, time, button, "chair 2");
    await successBooking(
      page,
      "После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал."
    );
    await page.goto("http://qamid.tmweb.ru/client/index.php");
    await clickElement(page, day);
    await clickElement(page, time);
    await clickElement(page, "chair 2");
    expect(
      String(
        await page.$eval("button", (button) => {
          return button.disabled;
        })
      )
    ).toContain("true");
  });
});
