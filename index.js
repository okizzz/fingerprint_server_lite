const express = require('express')
const mongoose = require('mongoose')
const fpRoutes = require('./routes/fproutes')
const db = require('./config/db')

const PORT = process.env.PORT || 8888
const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST")
    //res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE")
    res.header("Access-Control-Allow-Headers", "Content-Type")
    next();
});

app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
app.use(fpRoutes)

async function start() {
  try {
    await mongoose.connect(db.url, db.params)
    app.listen(PORT, () => {
      console.log('Server has been started port:' + PORT)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
