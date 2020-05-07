const express = require('express')
const mongoose = require('mongoose')
const fpRoutes = require('./routes/fproutes')
const db = require('./config/db')
const http = require('http');
const https = require('https');

const privateKey = fs.readFileSync('/home/aezakmi/cert/cloud-privkey.pem', 'utf8');
const certificate = fs.readFileSync('/home/aezakmi/cert/cloud-cert.pem', 'utf8');

const credentials = {
    key: privateKey,
    cert: certificate
};

const PORT = process.env.PORT || 8888
const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST")
    //res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE")
    res.header("Access-Control-Allow-Headers", "Content-Type")
    next();
});

app.use(express.json())
app.use(fpRoutes)

async function start() {
  try {
    await mongoose.connect(db.url, db.params)
    https.createServer(credentials, app).listen(PORT, () => {
      console.log('Server has been started port:' + PORT)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
