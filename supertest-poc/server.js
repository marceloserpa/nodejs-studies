const port = 8000;
let app = require('./src/app');

app.listen(port, () => {
  console.log(`Listening port ${port}`);
});
