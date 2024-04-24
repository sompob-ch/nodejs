class BookingService {
  constructor() {}

  bookTicket(email, tickets) {
    this.checkTicketQuantity(tickets);
    // insert in database
    // update ticket count
    return `Successfully booked ${tickets} tickets!`;
  }

  checkTicketQuantity(tickets) {
    if (tickets < 1 || tickets > 10) {
      throw new Error("You can only book 1 to 10 tickets.");
    }
    return true;
  }
}

module.exports = BookingService;
