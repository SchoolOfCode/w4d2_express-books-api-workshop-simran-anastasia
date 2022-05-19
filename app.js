/*PLAN
- Find out what type of modules we are using (CommonJs) ✅
- Export data from the book-data.js ✅
- Import data into the app.js and put into a variable ✅
- Set up app.get ✅
- Have the path be '/books ✅
- Turn data into an object 
- Send res.json 

*/
// let booksData = require('./books-data.js');

let books = require('./routes/books.js')

const express = require("express");
const app = express();
const PORT = 3000;

app.use(function (req, res, next){
  console.log(req.body);
  next()
})

app.get("/", function (req, res) {
  res.json({ message: "Hello from the root path!" });
});

app.use('/books', books);

//app.get("/books", function (req, res) {
//   const responseObject = {success: true, data: booksData}
//   res.json(responseObject)
// });

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`)
});
