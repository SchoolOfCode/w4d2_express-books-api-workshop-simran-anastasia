const express = require("express");
const router = express.Router();

const books = require('../books-data.js')

router.get("/", function (req, res) {
    const responseObject = {success: true, data: books}
    res.json(responseObject)
  });

  module.exports = router;