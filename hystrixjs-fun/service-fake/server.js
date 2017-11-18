
let express = require('express');
let app = express();

app.get('/service-fake/:timeout', (req, res) => {
    console.log("Inside service fake" + req.params.timeout);
    setTimeout(() => res.send({message : 'Hello World!'}), req.params.timeout);
});

app.listen(3000,() => console.log('Example app listening on port 3000!'));

