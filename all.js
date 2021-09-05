console.log('connected')
let tbody = document.querySelector('#tbody')
let table = document.querySelector('#table')

const getData = async () => {
  try {
    const response = await fetch(`/.netlify/functions/all`)
    const data = await response.json()
    console.log(data)

    data.map((item) => {
      tbody.innerHTML += `
      <tr><td>Monday to Friday</td><td>${item.montofri}</td><td>(Monday through any day)</td></tr>
      <tr><td>BetweenDays</td><td>${item.betweenDays}</td><td>Between Days(1-31)</td></tr>
      <tr><td>Even Hour</td><td>${item.evenHr}</td><td>at 0 mins past the hour, every 2 hours</td></tr>
      <tr><td>Every Day At</td><td>${item.everyDayAt}</td><td>Every Day at(time)</td></tr>
      <tr><td>Every Saturday</td><td>${item.everySat}</td><td>only on Saturday</td></tr>
      <tr><td>EveryWeekDayAt</td><td>${item.everyWeekDayAt}<td>EveryWeekdatAt(time)</td></td></tr>
      <tr><td>Every Year</td><td>${item.everyYear}</td><td>(only on jan)</td></tr>
      <tr><td>Once Month</td><td>${item.onceMonth}</td><td>(on day 1 of the month)</td></tr>
      <tr><td>on specficDays</td><td>${item.onspecficDays}</td><td>(only on Monday, Tuesday, and Thursday)</td></tr>

      
      `
    })
    table.appendChild(tbody)
  } catch (error) {
    // console.log(error)
  }
}

getData()
