const express = require ('express')
const router = require ('./routes.js')
const db = require ('./database.js')
const app = express()
const port = 3000


app.use(express.json())
app.use(router)


app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})