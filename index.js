const express = require('express')
const app = express()
app.set('port', process.env.PORT || 4000)
const cors = require('cors')




app.use(cors({origin: '*'}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))






app.get('/', (req, res) => {
    res.redirect('/api/bookmark')
});

const bookmarkController = require('./controllers/bookmarkController')
app.use('/api/bookmark/', bookmarkController)


if (!module.parent) {
    app.listen(app.get('port'), () => { console.log(`PORT: ${app.get('port')} `) })
};
module.exports = app