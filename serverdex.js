// serverdex
var express = require('express');
    app = express();

app.listen(3000, console.log('Welcome to the 3000'));
//coinbase=-
  const CoinbasePro = require('coinbase-pro');
  const publicClient = new CoinbasePro.PublicClient();
  const websocket = new CoinbasePro.WebsocketClient(['BTC-USD', 'ETH-USD', 'XRP-USD']);
  websocket.on('message', data=>{
    console.log(data)
  })
  websocket.on('error', err=>{
    console.log(err)
  })
  websocket.on('close', ()=>{
    console.log('socketsclosed')

  });
