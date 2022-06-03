const BookModel = require("../models/bookModel");

// create new book
const createBook = async (req, res) => {
  let data = req.body;

  // if there is data, send true respone message, else send false response message
  if (data) {
    // check if this book name already exists.
    const oldBook = await BookModel.find({ BookName: data.BookName });
    if (oldBook.length > 0)
      res.send({
        respStatus: false,
        respMsg: "Book with same name already exists.",
      });
    else {
      // create new book
      const book = await BookModel.create(data);
      // if all OK, send true respone message, else send false response message
      if (book)
        res.send({
          respStatus: true,
          respMsg: "New Book created sucessfully.",
        });
      else
        res.send({
          respStatus: false,
          respMsg: "Some error occured while creating new book.",
        });
    }
  } else
    res.send({
      respStatus: false,
      respMsg: "Please provide new book details.",
    });
};

// get all books
const getBooks = async (req, res) => {
  // find all books without any filter
  const books = await BookModel.find({});
  res.send({ respStatus: true, respMsg: "OK", model: null, lstModel: books });
};

// get book by a book id
const getBooksById = async (req, res) => {
  const id = req.params.bookId;
  // if there is id in parameters, send true respone message, else send false response message
  if (id) {
    // find all books with this id
    const book = await BookModel.find({ _id: id });
    res.send({ respStatus: true, respMsg: "OK", model: book, lstModel: [] });
  } else res.send({ respStatus: false, respMsg: "Please provide a book Id" });
};

module.exports = { createBook, getBooks, getBooksById };
