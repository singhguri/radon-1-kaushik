const mongoose = require("mongoose");

const newBookSchema = new mongoose.Schema(
  {
    name: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "newAuthor" },
    price: Number,
    ratings: String,
    publisher: { type: mongoose.Schema.Types.ObjectId, ref: "newPublisher" },
  },
  { timestamps: true }
);

const newAuthorSchema = new mongoose.Schema(
  {
    authorName: String,
    age: Number,
    address: String,
    rating: Number,
  },
  { timestamps: true }
);

const newPublisherSchema = new mongoose.Schema(
  {
    name: String,
    headQuarter: String,
  },
  { timestamps: true }
);

const newBook = mongoose.model("newBook", newBookSchema);
const newAuthor = mongoose.model("newAuthor", newAuthorSchema);
const newPublisher = mongoose.model("newPublisher", newPublisherSchema);

module.exports = {
  newAuthor,
  newBook,
  newPublisher,
};
