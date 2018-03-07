
const { ConsumerGroup } = require('kafka-node');

const options = {
    host: 'localhost:2182',  
    kafkaHost: 'localhost:9093, localhost:9094',
    ssl: true, 
    groupId: 'group-id-1',
    sessionTimeout: 15000,
    protocol: ['roundrobin'],
    fromOffset: 'latest',
    outOfRangeOffset: 'earliest',
  };

const consumerGroup = new ConsumerGroup(options, 'test');


consumerGroup.on("ready", () => console.log("sssss"));

consumerGroup.on("message", (message) => console.log(message.value));