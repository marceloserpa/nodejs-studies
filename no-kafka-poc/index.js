const { SimpleConsumer } = require('no-kafka');

const config = { connectionString: "localhost:9092,localhost:9093" };
const topic = 'test';

const consumer = new SimpleConsumer(config);
 
const handler = (messageSet, topic, partition) => {
    messageSet.forEach((m) =>  console.log(m.message.value.toString('utf8')));
};
 
return consumer.init().then(() => {
    return consumer.subscribe(topic, 0, handler);
});



