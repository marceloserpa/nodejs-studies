
const dashboard = require('hystrix-dashboard');
let express = require('express');
let app = express();

app.use(dashboard({
    idleTimeout: 4000,  // will emit "ping if no data comes within 4 seconds, 
    interval: 2000,      // interval to collect metrics 
    proxy: true  
}));

app.listen(8080,() => console.log('Example app listening on port 8080!'));