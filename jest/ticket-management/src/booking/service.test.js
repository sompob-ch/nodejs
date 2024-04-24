const BookingService = require("./service");

describe("Ticket Booking B", () => {
  let bookingService;
  beforeAll(() => {
    bookingService = new BookingService();
    console.log("Before all tests");
  });

  test("books 1 ticket successfully", () => {
    const expected = true;
    const actual = bookingService.checkTicketQuantity(1);
    expect(actual).toBe(expected);
  });

  test("books 10 tickets successfully", () => {
    const expected = true;
    const actual = bookingService.checkTicketQuantity(10);
    expect(actual).toBe(expected);
  });

  test("throws error when booking 0 tickets", () => {
    expect(() => 
      bookingService.checkTicketQuantity(0))
      .toThrow("You can only book 1 to 10 tickets.");
  });

  test("throws error when booking 11 tickets", () => {
    expect(() => bookingService.checkTicketQuantity(11)).toThrow("You can only book 1 to 10 tickets.");
  });
});
