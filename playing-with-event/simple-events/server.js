const EventEmitter = require('events').EventEmitter

// create an instance of the EventEmitter object
const eventEmitter = new EventEmitter()

eventEmitter.on('randomString', function(randomStr){
  console.log('Listener 1 - Received the string: ' + randomStr);
});

eventEmitter.on('randomString', function(randomStr){
  console.log('Listener 2 - Received the string: ' + randomStr);
});

eventEmitter.emit('randomString', randomString())

function randomString(){
  const stringArr = ['NodeJS', 'codequs.com', 'JavaScript', 'EventEmmiter']
  return stringArr[Math.floor(Math.random() * stringArr.length)]
}
