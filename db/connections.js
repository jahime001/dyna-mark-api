//connection
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/dyna-mark', { useNewUrlParser: true })

mongoose.Promise = Promise

module.exports = mongoose