const express = require('express')
const path = require('path')
const app = express()


app.use(express.static('public'))

app.get('/dummy', (req, res) => {
    res.send('Hello World!')
})


app.listen(3000, () => console.log("server started"))