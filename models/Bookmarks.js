//bookmarks
const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Tags = new Schema({
    desc: String
})

const BookMark = new Schema({
  title: String,
  preview: String,
  description: String,
  link: String,
  tags: [Tags],
  likes: Boolean,
  dislikes: Boolean
})

module.exports = mongoose.model('BookMark', BookMark)