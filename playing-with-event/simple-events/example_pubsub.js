
const PubSub = require('./pubsub.js')
const simplePubSub = new PubSub()

simplePubSub.on('coligo', function(){
  console.log('Received a COLIGO event!');
})

simplePubSub.on('nodejs', function(){
  console.log('Received a NODEJS event!');
})

simplePubSub.on('javascript', function(){
  console.log('Received a javascript event!');
})
