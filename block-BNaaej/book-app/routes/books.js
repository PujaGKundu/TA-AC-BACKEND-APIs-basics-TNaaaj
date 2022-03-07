var express = require("express");
var router = express.Router();
var Book = require("../models/book");

router.post("/", (req, res, next) => {
  var book = req.body;
  Book.create(req.body, (err, createdBook) => {
    if (err) return next(err);
    console.log(book);
    res.send("Book is added to the database");
  });
});

router.get("/", (req, res) => {
  Book.find({}, (err, books) => {
    if (err) return next(err);
    res.json(books);
  });
});

router.get("/:isbn", (req, res) => {
  // reading isbn from the URL
  var isbn = req.params.isbn;

  // searching books for the isbn
  for (let book of books) {
    if (book.isbn === isbn) {
      res.json(book);
      return;
    }
  }

  // sending 404 when not found something is a good practice
  res.status(404).send("Book not found");
});

router.delete("/:isbn", (req, res) => {
  // reading isbn from the URL
  var isbn = req.params.isbn;

  // remove item from the books array
  books = books.filter((i) => {
    if (i.isbn !== isbn) {
      return true;
    }

    return false;
  });

  // sending 404 when not found something is a good practice
  res.send("Book is deleted");
});

router.post("/:isbn", (req, res) => {
  // reading isbn from the URL
  var isbn = req.params.isbn;
  var newBook = req.body;

  // remove item from the books array
  for (let i = 0; i < books.length; i++) {
    let book = books[i];

    if (book.isbn === isbn) {
      books[i] = newBook;
    }
  }

  // sending 404 when not found something is a good practice
  res.send("Book is edited");
});

module.exports = router;
