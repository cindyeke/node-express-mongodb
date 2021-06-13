const mongoose = require("mongoose");

// Set Author Table also called Schema in NoSQL databases
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Author", authorSchema);
