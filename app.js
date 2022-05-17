/*PLAN
- Find out what type of modules we are using (CommonJs) ✅
- Export data from the book-data.js ✅
- Import data into the app.js and put into a variable ✅
- Set up app.get ✅
- Have the path be '/books ✅
- Turn data into an object 
- Send res.json 

*/
let booksData = require('./books-data.js');



const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", function (req, res) {
  res.json({ message: "Hello from the root path!" });
});

app.get("/books", function (req, res) {
  const responseObject = {success: true, data: booksData}
  res.json(responseObject)
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`)
});
