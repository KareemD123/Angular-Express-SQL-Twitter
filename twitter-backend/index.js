const express = require('express')
const tweetController = require('./controllers/tweets')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())

app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use((req,res, next)=> {
    console.log(`${req.method} at path ${req.path}`)
    // console.log(req.method + " at path " + req.path)
    next()
})

app.use('/', tweetController)

app.listen(4100, () => {
    console.log('App is listening on port 4100!')
})








