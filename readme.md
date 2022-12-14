# Dyna-Mark-API (Back-End)

## Creators
- Bibhor Gurung
- Jahime Cameau
- Morgan Arancibia

## Installation & Setup
- Fork & Clone this repo
- Run "npm i" in the terminal
- Run "npm i nodemon" in the terminal
- Run "mongosh" in the terminal to run mongoose 
- Run "nodemon" in the terminal to start the server

## Project Links
- [GitHub Front-end Repo](https://github.com/jahime001/dyna-mark)
- [Deployed Front-end](https://dyna-mark.vercel.app/)
- [Deployed Back-end](https://dyna-mark.fly.dev/api/bookmark)

## Project Overview

| Directories | Description | 
| --- | :---: |  
| Controllers | This directory currently only holds one file, the bookmarkControllerJS. bookControllers contains all our routes for interacting with our database  | 
| Db | This directory currently holds our json, connections, and seed files. Our connections file gives our backend api access to the database, and our seed file will insert data from the database to make it accessible to our app. | 
| Models | This directory currently only holds one file, the BookmarksJS. Bookmarks contains the template we will follow to access our seeded data. | 

### Time Frames

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| bookmarkControllerJS | H | 2hrs| 30min | 30mins |
| commentControllerJS | H | 2hrs | 30min | 1hr |
| bookmarksJSON | H | 1hr | 3hrs | 4hrs | 
| connectionsJS | H | 1hr | 1hr | 5hrs |
| seedJS | H | 1hr | 1hr | 6hrs |
| BookmarksJS(Model) | H | 30mins | 1hr | 7hrs |
| CommentsJS(Model) | H | 30mins | 1hr | 8hrs |
| Total | H | 12hrs| 8hrs | 8hrs |

### Req-Res Diagram
![Screen Shot 2022-12-07 at 8 28 58 PM](https://user-images.githubusercontent.com/108837222/207635273-987a4e0b-9e9e-40c0-ad05-e74f6db9c650.png)

### User Stories
- As a user, I want to be able to access data in my database
- As a user, I want to be able to add new entries into my database
- As a user, I want to be able to update enteries in my database
- As a user, I want to be able to delete entries in my database

### Technologies Used
- [![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)]()
- [![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)]()
- [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)]()
- [![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)]()
- [![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)]()

### References List

### Code Snippet (For our seed file)

```
//seedJS
const bookMarkData = require('../db/bookmarks.json')
const BookMark = require('../models/Bookmarks');


BookMark.deleteMany()

  .then(() => BookMark.insertMany(bookMarkData))

  .then(console.log)
  .catch(console.error)
  .finally(process.exit);
```

### Issues and Resolutions
- **ERROR**: Inaccurate Node Modules
**RESOLUTION**: Deleting modules and reinstalling them with assistance from our instructor David Magbee

- **ERROR**: Seeding Data
**RESOLUTION**: Using delete many to clear the location for the seeded data, then using insert many to place the seeded data if more than one
