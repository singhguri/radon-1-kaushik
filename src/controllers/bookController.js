const { newBook } = require("../models/newBook");
const ObjectId = require("mongoose").Types.ObjectId;

const createBook = async function (req, res) {
  let book = req.body;

  // check if author id is present
  if (book.author) {
    // check if author Id is valid object Id
    if (ObjectId.isValid(book.author)) {
      // check if publisher id is present
      if (book.publisher) {
        // check if publisher Id is valid object Id
        if (ObjectId.isValid(book.author)) {
          let bookCreated = await newBook.create(book);
          res.send({ data: bookCreated });
        } else {
          // send error msg
          res.send({ error: "Publisher not present." });
        }
      } else {
        // send error msg
        res.send({ error: "Publisher Id is required." });
      }
    } else {
      // send error msg
      res.send({ error: "Author not present." });
    }
  } else {
    // send error msg
    res.send({ error: "Author Id is required." });
  }
};

const getBooksData = async function (req, res) {
  let books = await newBook.find();
  res.send({ data: books });
};

const getBooksWithAuthorDetails = async function (req, res) {
  let specificBook = await newBook.find().populate("author_id");
  res.send({ data: specificBook });
};

const getBooksWithAuthorPublisherDetails = async function (req, res) {
  let specificBook = await newBook
    .find({ name: "The ABC of Murder" })
    .populate("author")
    .populate("publisher");
  res.send({ data: specificBook });
};

module.exports = {
  createBook,
  getBooksWithAuthorPublisherDetails,
  getBooksData,
  getBooksWithAuthorDetails,
};
