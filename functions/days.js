const axios = require('axios')
const cronTime = require('cron-time-generator')

exports.handler = function (event, context, callback) {
  // your server-side functionality

  var data = ''

  // request_data = event['queryStringParameters']
  // name = request_data['name']

  let min = [...Array(31).keys()]
  let arr = []
  min.map((i) => {
    data = cronTime.every(i).days(5)
    if (i == 0) {
      i = ''
    }
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
