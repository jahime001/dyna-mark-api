//bookmarkController

const express = require('express')
const router = express.Router()

const BookMark = require('../models/Bookmarks')


router.get('/', async (req, res, next) => {
    try {
        const bookmarks = await BookMark.find({})
        res.json(bookmarks)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const bookmark = await BookMark.findById(req.params.id)
        res.json(bookmark)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newBookmark = await BookMark.create(req.body)
        res.status(201).json(newBookmark)
    } catch(err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updateBookmark = await BookMark.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        )
        if(updateBookmark) {
            res.json(updateBookmark)
        } else {
            res.sendStatus(404)
        }
    } catch(err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const deleteBookmark = await BookMark.findByIdAndDelete(req.params.id)
        if(deleteBookmark) {
            res.sendStatus(204)
        } else {
            res.sendStatus(404)
        }
    } catch(err) {
        next(err)
    }
})

module.exports = router