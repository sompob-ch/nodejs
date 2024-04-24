const mongoose = require("mongoose");

class MongoDatabase {
  uri;
  clientOptions;
  connection;
  constructor() {
    this.uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ticket-db';
    this.clientOptions = {
      serverApi: { version: "1", strict: true, deprecationErrors: true },
    };
  }

  async openConnection() {
    try {
      // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
      this.connection = await mongoose.connect(this.uri, this.clientOptions);
      this.connection = await mongoose.connection.db.admin().command({ ping: 1 });
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );
    } catch (error) {
      console.error("Error connecting to MongoDB: ", error);
    }
  }

}

const mongoDatabase = new MongoDatabase();
module.exports = mongoDatabase;