const express = require("express");
const router = express.Router();

const books = require('../books-data.js')


/*
- Create a variable with a request query ✅
- Intialize an empty array ✅
- If statement to check if the title is truthy ✅
- Loop through an array comparing the title to the array (for loop) ✅
- If statement within the for to compare the title to the array ✅
  -use include method and toLowerCase method to check if the string matches title string ✅
  -if it does, push them to the array that we've made ✅
  - make a response object 
  - send res.json 
*/


router.get("/", function (req, res) {
    const title = req.query.title;
if (title) {
  let searchedTitle = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].title.toLowerCase().includes(title.toLowerCase())){
         searchedTitle.push(books[i]) 
        }
 }
    const responseObject = {success: true, data: searchedTitle}
    res.json(responseObject)
    return
}
const author = req.query.author;
if(author) {
    let searchedAuthor = [];
    for(let i = 0; i < author.length; i++) {
        if (books[i].author.toLowerCase().includes(author.toLowerCase())){
            searchedAuthor.push(books[i])
        }
    }
    const responseObjectAuthor = {success: true, data: searchedAuthor}
    res.json(responseObjectAuthor)
    return
}

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