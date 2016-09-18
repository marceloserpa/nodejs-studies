// pubsub.js

 const EventEmitter = require('events')
 const util = require('util')

 // get a random string and emit the appropriate event every 3 seconds
 function PubSub() {
   EventEmitter.call(this)

   const that = this
   setInterval(function () {
     var randomStr = randomString()

     if (randomStr.indexOf('coligo') > -1) {
       that.emit('coligo')
     } else if (randomStr.indexOf('nodejs') > -1) {
       that.emit('nodejs')
     } else if (randomStr.indexOf('javascript') > -1) {
       that.emit('javascript')
     }
   }, 300)
 }

 // conventionally, NodeJs uses util.inherits() for inheritance
 util.inherits(PubSub, EventEmitter)

 // simple function to randomly select a string from an array
 function randomString () {
   const stringsArr = ['nodejs', 'codequs', 'javascript', 'EventEmitters',
     'random text', 'testing events in node', 'PubSub and events at coligo']
   return stringsArr[Math.floor(Math.random() * stringsArr.length)]
 }

 module.exports = PubSub
