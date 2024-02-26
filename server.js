// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)
const corsOptions = {
  optionsSuccessStatus: 200
}

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(cors())

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Hello World!')
})

app.get('/books/:id', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled'})
})

// LISTEN
app.listen(PORT, () => {
  console.log('Greetings! From port: ', PORT);
})