const express = require('express')
const middleware = require('@line/bot-sdk').middleware
const Client = require('@line/bot-sdk').Client
const app = express()

const config = {
  channelAccessToken: 'c9HRUFxkCRt5VIknZRPxWKDzmznAtiHzImOqBPpc5OjwvJgwAEKh5yD/CJ1oXGcN3LvqxeosYrhwQ2Rqbs5Yprmqyp4VkFFyi1w5A4i8grZ7dDRlXn/K83hXKgG99+YhGg1I+UJaH4rqTn9hTovCygdB04t89/1O/w1cDnyilFU=',
  channelSecret: '5e506ff69e67d6114a9e736109697d58'
}
const client = new Client(config)

app.get('/', function (req, res) {
    res.send('Hello World!!')
    
})
app.post('/webhook', middleware(config), (req, res) => {
    res.send('Hello World!!')
  const event = req.body.events[0];
  
    if (event.type === 'message') {
      const message = event.message;
      console.log(message)
      client.replyMessage(event.replyToken, 
        {
          "type": "template",
          "altText": "This is a buttons template",
          "template": {
              "type": "buttons",
              "thumbnailImageUrl": "https://vignette.wikia.nocookie.net/line/images/b/bb/2015-brown.png/revision/latest?cb=20150808131630",
              "imageAspectRatio": "rectangle",
              "imageSize": "cover",
              "imageBackgroundColor": "#FFFFFF",
              "title": "Menu",
              "text": "Please select",
              "defaultAction": {
                  "type": "uri",
                  "label": "View detail",
                  "uri": "http://google.com/"
              },
              "actions": [
                  {
                    "type": "postback",
                    "label": "Buy",
                    "data": "action=buy&itemid=123"
                  },
                  {
                    "type": "message",
                    "label": "Add to cart",
                    "text": "no no no"
                  },
                  {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://google.com"
                  }
              ]
          }
        })
    }
  })
  
    
    }

})

app.set('port', (process.env.PORT || 4000))

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})