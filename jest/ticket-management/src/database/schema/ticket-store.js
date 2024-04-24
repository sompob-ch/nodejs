const mongoose = require("mongoose");
const ticketStoreSchema = new mongoose.Schema({
  avaiable: number,
});
const TicketStore = mongoose.model("TicketStore", ticketStoreSchema);
module.exports = TicketStore;
