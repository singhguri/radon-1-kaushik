const { newPublisher } = require("../models/newBook");

const createPublisher = async function (req, res) {
  let publisher = req.body;
  let publisherCreated = await newPublisher.create(publisher);
  res.send({ data: publisherCreated });
};

const getPublishersData = async function (req, res) {
  let publisher = await newPublisher.find();
  res.send({ data: publisher });
};

module.exports = { createPublisher, getPublishersData };
