const bodyParser = require('body-parser')
const express = require('express')
const massive= require('massive')
require('dotenv').config()

const controller = require('./controller')

const app = express()
const port = 3020

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db',dbInstance)
    app.listen(3020, ()=>{
        console.log(`Doing great things on port ${port}`)
    })
}).catch(err=>{
    console.log(err)
})

//////MiddleWare
app.use(bodyParser.json())



//////ENDPOINTS
app.get('/api/houses',controller.getAllHouses)
app.post('/api/house',controller.addHouse)
app.delete('/api/house/:id',controller.deleteHouse)