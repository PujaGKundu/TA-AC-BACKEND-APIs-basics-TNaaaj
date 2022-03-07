var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  isbn: Number,
  title: String,
  category: String,
  author: String,
  publish_date: Date,
  publisher: String,
  numOfPages: Number,
});

var Book = mongoose.model("Book", bookSchema);

module.exports = Book;
