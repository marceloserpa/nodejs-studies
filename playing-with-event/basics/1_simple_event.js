
//Basics
const EventEmitter = require('events').EventEmitter

const eventEmitter = new EventEmitter()

eventEmitter.on('event', () => {
  console.log('an event occured!');
})

eventEmitter.emit('event');
eventEmitter.emit('event');
eventEmitter.emit('event');

//Passing arguments
//acessing this inside callback
const eventEmitter2 = new EventEmitter();
eventEmitter2.on('event', function(a, b){
  console.log(a, b, this);
});
eventEmitter2.emit('event', 'a', 'b');

//using arrow function i cant acess this :(
const eventEmitter3 = new EventEmitter();
eventEmitter3.on('event', (a, b) =>{
  console.log(a, b, this);
});
eventEmitter3.emit('event', 'a', 'b');

//Asynchronous vs. Synchronous
//For default all event will be called synchronously in the order in which they were registered
//Using setImmediate event will be called asynchronously
const eventEmitter4 = new EventEmitter();
eventEmitter4.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously: ' + a + ' ' + b);
  });
});
console.log('Asynchronous vs. Synchronous');
eventEmitter4.emit('event', 'a1', 'b1');
eventEmitter4.emit('event', 'a2', 'b2');
eventEmitter4.emit('event', 'a3', 'b3');

console.log("Synchronous EventEmmiter Sample");
const eventEmitter5 = new EventEmitter();
eventEmitter5.on('event', (sleepBy, name) =>{
  setTimeout(function(){
      console.log('Finished execution: ' + name);
  }, sleepBy);
});
eventEmitter5.emit('event', 3000, 'A');
eventEmitter5.emit('event', 500, 'B');
eventEmitter5.emit('event', 2000, 'C');
