const { newAuthor } = require("../models/newBook");

const createAuthor = async function (req, res) {
  let author = req.body;
  let authorCreated = await newAuthor.create(author);
  res.send({ data: authorCreated });
};

const getAuthorsData = async function (req, res) {
  let authors = await newAuthor.find();
  res.send({ data: authors });
};

module.exports = { createAuthor, getAuthorsData };
