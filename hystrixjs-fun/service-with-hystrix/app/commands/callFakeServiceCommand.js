
let CommandsFactory = require('hystrixjs').commandFactory;

let callFakeServiceCommand = CommandsFactory.getOrCreate("callFakeService")
    .timeout(3000)
    .requestVolumeRejectionThreshold(5)
    .circuitBreakerSleepWindowInMilliseconds(5000)
    .fallbackTo(() => console.log("fallback"))
    .run(callFakeService)
    .build();

function callFakeService(ms){
    return axios.get('http://localhost:3000/service-fake/' + ms);
}  

module.exports = callFakeServiceCommand;