const axios = require('axios')
const cronTime = require('cron-time-generator')

exports.handler = function (event, context, callback) {
  // your server-side functionality

  var data = ''

  // request_data = event['queryStringParameters']
  // name = request_data['name']

  let min = [...Array(23).keys()]
  let arr = []
  min.map((i) => {
    i = i + 1
    data = cronTime.every(i).hours()
    let datas = {
      data: data,
      i: i,
    }
    arr.push(datas)
  })

  const send = () => {
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'Origin, X-Request-With, Content-Type , Accept',
      },
      body: JSON.stringify(arr),
    })
  }
  //   Perform APi Call
  const hours = () => {
    axios
      .get()
      .then((res) => send(res.data))
      .catch((err) => send(err))
  }

  hours()
}
