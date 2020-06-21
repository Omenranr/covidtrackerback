const express = require('express')
const router = express.Router()
const config = require('config')
const NewsAPI = require('newsapi')
const newsapi = new NewsAPI(config.get('newsApiKey'))

router.get('/', JWTCtrl.verifyToken, (req, res, next)=>{
    CampanionCtrl.selectAll(req, res, next)
    .then( data =>{
        res.json(data);
    })
    .catch( err =>{ res.json(err)});
})


module.exports = router