const express = require('express')
const middleware = require('@line/bot-sdk').middleware
const app = express()

const config = {
  channelAccessToken: 'c9HRUFxkCRt5VIknZRPxWKDzmznAtiHzImOqBPpc5OjwvJgwAEKh5yD/CJ1oXGcN3LvqxeosYrhwQ2Rqbs5Yprmqyp4VkFFyi1w5A4i8grZ7dDRlXn/K83hXKgG99+YhGg1I+UJaH4rqTn9hTovCygdB04t89/1O/w1cDnyilFU=',
  channelSecret: '5e506ff69e67d6114a9e736109697d58'
}

app.get('/', function (req, res) {
    res.send('Hello World!!')
})
app.post('/webhook', middleware(config), (req, res) => {
 console.log('webhook success')
})

app.set('port', (process.env.PORT || 4000))

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})