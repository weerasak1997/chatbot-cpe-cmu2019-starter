const express = require('express')

const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!!')
})

app.set('port', 3000)

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})