'use strict'

// noinspection NodeJsCodingAssistanceForCoreModules
const path = require('path')
const express = require('express')
const expressJwt = require('express-jwt')
const jwt = require('jsonwebtoken')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use('/hi', expressJwt({
    secret: 'secret',
}))

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).end('Unauthorized')
    }
})

app.get('/hi', (req, res) => res.json(req.user))

app.get('/token', (req, res) => {
    const token = jwt.sign({name: 'ada'}, 'secret');
    res.json({token})
})

app.listen(3000, () => console.log('listening 3000'))