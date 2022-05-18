const express = require("express");
const router = express.Router();

const books = require('../books-data.js')





router.get("/", function (req, res) {
    const responseObject = {success: true, data: books}
    res.json(responseObject)
  });


/*
- set up seperate path = /:id X
- make a variable storing req.params.id X
- use a for loop to loop through books array X
- use an if statement to define if book id matches param id X
- res.json
*/

router.get("/:id", function (req, res) {
  const id = req.params.id 
  let searchedBook = {}
  for (let i=0; i < books.length; i++) {
    if (Number(id) === books[i].id) {
      searchedBook = books[i]
    }
  }
  const responseObject = {success: true, message: `books for id ${id}`, data: searchedBook}
    res.json(responseObject)

});



  module.exports = router;