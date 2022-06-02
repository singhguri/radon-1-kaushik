const express = require("express");
const externalModule = require("./logger");
const _ = require("lodash");

const { welcome } = require("../logger/logger");
const { printDate, printMonth, getBatchInfo } = require("../util/helper");
const {
  trim,
  changeToUpperCase,
  changetoLowerCase,
} = require("../validator/formatter");

const router = express.Router();

router.get("/test-me", function (req, res) {
  console.log(
    "The constant in logger route has a value " + externalModule.endpoint
  );
  console.log("The current batch is " + externalModule.batch);
  externalModule.log();

  // logger module to print welcome message
  welcome();

  // helper module to print date, month and batch info
  printDate();
  printMonth();
  getBatchInfo();

  // formatter module to apply formats on a hardcoded string
  trim();
  changeToUpperCase();
  changetoLowerCase();

  res.send("My first ever api!");
});

router.get("/test-me1", function (req, res) {
  res.send("My second ever api!");
});

router.get("/test-me2", function (req, res) {
  res.send("My third api!");
});

router.get("/test-me3", function (req, res) {
  res.send("My 4th api!");
});

router.get("/test-me4", function (req, res) {
  res.send("My last api!");
});

router.get("/hello", (req, res) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // problem 4: a) using chunk method from loadsh
  console.log(_.chunk(months, 4));

  // create an array of first 10 odd numbers
  const oddNums = [];
  let num = 1;
  while (oddNums.length != 10) {
    if (num % 2 != 0) oddNums.push(num);
    num++;
  }

  // problem 4: b) using tail method from lodash
  console.log(_.tail(oddNums));

  const num1 = [1, 2, 3, 1, 2, 5],
    num2 = [2, 3, 1, 2, 5],
    num3 = [4, 5, 3, 2, 5, 1],
    num4 = [4, 2, 3, 2, 4, 1],
    num5 = [6, 4, 2, 3, 1, 3];

  // problem 4: c) using union and uniq method from lodash
  console.log(
    _.union([
      _.uniq(num1),
      _.uniq(num2),
      _.uniq(num3),
      _.uniq(num4),
      _.uniq(num5),
    ])
  );

  // problem 4: d) using fromPairs method from lodash
  console.log(
    _.fromPairs([
      ["horror", "The Shining"],
      ["drama", "Titanic"],
      ["thriller", "Shutter Island"],
      ["fantasy", "Pans Labyrinth"],
    ])
  );

  res.send("Hello World");
});

module.exports = router;
// adding this comment for no reason
