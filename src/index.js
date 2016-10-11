import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router'
import $ from 'jquery'

function calcPercent(num1, num2) {
  return num1 / num2 * 100
}

function goodDays(arr) {
  let good = []
  arr.forEach((day) => {
    if (day[1] < day[4]) {
      good.push(day)
    }
  })
  return good.length
}

function goodDayAfterConsecutiveGoodDays() {
  $.ajax(`https://www.quandl.com/api/v1/datasets/YAHOO/INDEX_GSPC.json?trim_start=2000-01-01&collapse=daily&auth_token=6SfHcXos6YBX51kuAq8B`)
  .then((response) => {
    let buyDays = []
    response.data.forEach((day, i) => {
      if (i < 5) {
        return null
      }
      if (day[1] < day[4]
      && response.data[i - 1][1] < response.data[i - 1][4]
      && response.data[i - 2][1] < response.data[i - 2][4]) {
        buyDays.push(response.data[i + 1])
      }
    })
    console.log(buyDays.length)
    console.log(goodDays(buyDays) + ' out of ' + buyDays.length)
  })
}

goodDayAfterConsecutiveGoodDays()




ReactDOM.render(<Router />, document.getElementById('root'))
