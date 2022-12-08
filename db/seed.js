//seed
const bookMarkData = require('../db/bookmarks.json')
const BookMark = require('../models/Bookmarks');

BookMark.deleteMany({})
	.then(() => 

		 bookMarkData.map((mark) => {
            // console.log(mark)
            return ({
                title: mark.title,
                preview: mark.preview,
                description: mark.description,
                link: mark.link,
                likes: mark.likes,
                dislikes: mark.dislikes,
                tags: mark.tags
            })
        }))
        .then((mon) => BookMark.insertMany({mark}))
	.catch(console.error)
	.finally(() => {
		process.exit();
	});