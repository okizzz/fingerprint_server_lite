const { Router } = require('express')
const Model = require('../models/fpmodel')
const router = Router()
const uaparser = require('ua-parser-js')

router.post('/create', async (req, res) => {
  // let hashObj = sha1(JSON.stringify(req.body))
  // let r = hashObj.navigator.connection = {}
  //  await Model.find({ title: hash },(err, fingerprint) => {
  //      if (err){
  //      	console.log(err.errmsg)
  //      	return res.status(500)
  //      }
  //      if (fingerprint){
  //      	 console.log(hash + ' already exists')
  //        return res.status(403)
  //      }
  // })
  let parser = uaparser(req.headers['user-agent'])
  const fingerprint = new Model({
     headers : {
      host: req.headers['host'],
      connection: req.headers['connection'],
      contentLength: req.headers['content-length'],
      origin: req.headers['origin'],
      contentType: req.headers['content-type'],
      accept: req.headers['accept'],
      secFetchSite: req.headers['sec-fetch-site'],
      secFetchMode: req.headers['sec-fetch-mode'],
      referer: req.headers['referer'],
      acceptEncoding: req.headers['accept-encoding'],
      acceptLanguage: req.headers['accept-language'],
      browser: parser.browser,
      device: parser.device,
      os: parser.os,
      engine: parser.engine,
      cpu: parser.cpu,
      ua: parser.ua
     },
     navigator: req.body.navigatorparams,
     screen: req.body.screenparams,
     webglparams: req.body.webglparams,
     fonts: req.body.fonts,
     body: req.body
  })
  await fingerprint.save((err, fingerprint) => {
    if (err){
      return res.status(500)
      console.log(err.errmsg)
    }
  })
  res.send('good work')
})

module.exports = router
