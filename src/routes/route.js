const express = require("express");
const router = express.Router();

const {
  createAuthor,
  getAuthorsData,
} = require("../controllers/authorController");
const {
  getBooksWithAuthorPublisherDetails,
  createBook,
  getBooksData,
  getBooksWithAuthorDetails,
} = require("../controllers/bookController");
const {
  createPublisher,
  getPublishersData,
} = require("../controllers/publisherController");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.post("/createAuthor", createAuthor);
router.get("/getAuthorsData", getAuthorsData);

router.post("/createBook", createBook);
router.get("/getBooksData", getBooksData);
router.get("/getParticularBooks", getBooksWithAuthorPublisherDetails);
router.get("/getBooksWithAuthorDetails", getBooksWithAuthorDetails);

router.post("/createPublisher", createPublisher);
router.get("/getPublishersData", getPublishersData);

module.exports = router;
