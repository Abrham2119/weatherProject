const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const https = require('https');
const { url } = require('inspector');




app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99#';

  https.get(apiUrl, (response) => {
    console.log(response);
  });

  res.send('Hello!')
})


app.listen(3008, () => {
  console.log('Example app listening on port 3000!')
})