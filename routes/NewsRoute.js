const express = require('express')
const router = express.Router()
const config = require('config')
const NewsAPI = require('newsapi')
const newsapi = new NewsAPI(config.get('newsApiKey'))

// "country=ma&q=covid&from=from=2020-05-20&sortBy=publishedAt&apiKey="+apiKey

router.get('/byCountry', (req, res, next) => {
    newsapi.v2.topHeadlines({
      q: req.query.q,
      country: req.query.country,
      from: "2020-06-01",
      sortBy: "publishedAt",
    }).then(response => {
      res.status(200).json(response)
    })   
})

module.exports = router