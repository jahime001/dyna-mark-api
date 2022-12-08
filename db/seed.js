//seed
const bookMarkData = require('../db/bookmarks.json')
const BookMark = require('../models/Bookmarks');


BookMark.deleteMany()

  .then(() => BookMark.insertMany(bookMarkData))

  .then(console.log)
  .catch(console.error)
  .finally(process.exit);