const express = require('express');
const bodyparser = require('body-parser');

// CRUD of the apps
const ObjectiveRoute = require('./routes/NewsRoute')

const app = express();
app.use(bodyparser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers',
        'Origin,X-Requested-With,Content-Type,Accept,Authorization,x-auth-token')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,DELETE,PATCH,POST,GET')
        return res.status(200).json({})
    }
    next()
})

//other routs
app.use('/news', ObjectiveRoute)

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    console.log('been in the 404 middleware')
    next(error)
});
app.use((error, req, res, next) => {
    console.log('entered the error middleware')
    res.status(error.status || 500)
        .json({
            error: {
                message: error.message
            }
        })
})

module.exports = app