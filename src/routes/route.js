const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

const {
  createBook,
  getBooksById,
  getBooks,
} = require("../controllers/bookController");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

// user routes
router.post("/createUser", UserController.createUser);
router.get("/getUsersData", UserController.getUsersData);

// book routes
router.get("/books", getBooks);
router.get("/books/:bookId", getBooksById);
router.post("/books", createBook);

module.exports = router;
