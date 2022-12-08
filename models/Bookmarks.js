//bookmarks
const mongoose = require('../db/connections')
const Schema = mongoose.Schema


const BookMark = new Schema({
  title: String,
  preview: String,
  description: String,
  link: String,
  tags: [String],
  likes: Number,
  dislikes: Number
})

module.exports = mongoose.model('BookMark', BookMark)