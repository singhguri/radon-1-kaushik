const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  BookName: String,
  AuthorName: String,
  Catagory: {
    type: String,
    enum: ["Fiction", "Non-fiction"],
  },
  PublishedInYear: Number,
});

module.exports = mongoose.model("Book", bookSchema);
