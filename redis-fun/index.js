const redis = require("redis");
const client = redis.createClient("6379", "172.17.0.3");

client.set("mykey", "POC");

client.get("mykey", (error, result) => {
    if (error) {
        console.log(error);
        throw error;
    }
    console.log('GET result ->' + result);
});
