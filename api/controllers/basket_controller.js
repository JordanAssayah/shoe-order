'use strict'
var moment = require('moment')

module.exports = { addCustomizationToBasket }

function addCustomizationToBasket (req, res) {
  var basketCookie

  if (req.headers.cookie.indexOf('basket') !== -1) {
    const basketCookies = req.headers.cookie.split(';')
    for (var basketCooki of basketCookies) {
      if (basketCooki.indexOf('basket') !== -1) {
        var tmp      = basketCooki.replace('basket=', '')
        console.log(decodeURIComponent(tmp));
        tmp          = JSON.parse(decodeURIComponent(tmp))

        tmp.push(parseInt(req.body.customizationId))
        basketCookie = '['
        for (var i = 0; i < tmp.length; i++) {
          if (i + 1 === tmp.length) {
            basketCookie += String(tmp[i])
          } else {
            basketCookie += String(tmp[i]) + ','
          }
        }
        basketCookie += ']'
        console.log(basketCookie);
      }
    }


  } else {
    basketCookie = `[${req.body.customizationId}]`
  }

  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Methods', 'POST,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Accept,X-Requested-With')
  res.cookie('basket', basketCookie, {
    domain: 'localhost',
    path: '/',
    expires: new Date( Date.now() + 60 * 60 * 10000 )
  })

  return res.json({
    code   : 200,
    message: 'Customization added to the basket !'
  })
}
