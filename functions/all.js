const axios = require('axios')
const cronTime = require('cron-time-generator')

exports.handler = function (event, context, callback) {
  // your server-side functionality

  var montofri = ''
  let arr = []

  montofri = cronTime.everyWeekDay('monday', 'friday')
  tuetosat = cronTime.everyWeekDay('tuesday', 'saturday')

  everyYear = cronTime.everyYear()

  onceMonth = cronTime.everyMonth()

  everymon = cronTime.everyMonday()

  everySatAT = cronTime.everySaturdayAt(5)

  evenHr = cronTime.every('even').hours()

  onspecficDays = cronTime.onSpecificDays(['monday', 'tuesday', 'thursday'])

  everyWeekDayAt = cronTime.everyWeekDayAt(5, 5, 'sunday', 'thursday')

  everyDayAt = cronTime.everyDayAt(4)

  betweenDays = cronTime.between(1, 31).days()

  let datas = {
    montofri: montofri,
    tuetosat: tuetosat,
    everyYear: everyYear,
    onceMonth: onceMonth,
    everymon: everymon,
    everySat: everySatAT,
    evenHr: evenHr,
    onspecficDays: onspecficDays,
    everyWeekDayAt: everyWeekDayAt,
    everyDayAt: everyDayAt,
    betweenDays: betweenDays,
  }
  arr.push(datas)

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
  const all = () => {
    axios
      .get()
      .then((res) => send(res.data))
      .catch((err) => send(err))
  }

  all()
}
