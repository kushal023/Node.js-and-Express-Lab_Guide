const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./shortUrl')
const Port=process.env.PORT||3000
const server = express()

mongoose.connect('mongodb://localhost/fyndShortUrl')

server.set('view engine', 'ejs')
server.use(express.urlencoded({ extended: false }))

server.get('/', async (req, res) => {
  const shorten = await ShortUrl.find()
  res.render('index', { shorten: shorten })
})

server.post('/shorten', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl })

  res.redirect('/')
})

server.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)

  
  shortUrl.save()

  res.redirect(shortUrl.full)
})

server.listen(Port,(req,res)=>{
  console.log(`http://localhost:${Port}`)
});