
let CommandsFactory = require('hystrixjs').commandFactory;

const axios = require('axios');
let express = require('express');

let hystrixStreamResponse = require("./app/hystrix-stream-config")

let app = express();

var hystrixConfig = require('hystrixjs').hystrixConfig;
hystrixConfig.init({
    "hystrix.circuit.volumeThreshold.forceOverride": true,
    "hystrix.circuit.volumeThreshold.override": 0
});

app.get('/app/:ms', (req, res) => {

    let serviceCommand = CommandsFactory.getOrCreate("callFakeService")
        .timeout(3000)
        .requestVolumeRejectionThreshold(5)
        .circuitBreakerSleepWindowInMilliseconds(5000)
        .fallbackTo(() => console.log("fallback"))
        .run(callFakeService)
        .build();

     serviceCommand.execute(req.params.ms)
        .then((response) => res.send(response.data))
        .catch((error) => res.send({message: 'Error' }));

    function callFakeService(ms){
        return axios.get('http://localhost:3000/service-fake/' + ms);
    }    
});

app.get('/hystrix.stream', hystrixStreamResponse)

app.listen(3001,() => console.log('Example app listening on port 3001!'));

