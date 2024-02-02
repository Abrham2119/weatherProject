const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const https = require('https');
const { url } = require('inspector');




app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.post('/', (req, res) => {
  console.log("the post is recived")
})

 


// const query = "london"
//   const id = "5258bf5a2f6b44af48b5a89b7c32f567"
//   const myLon="10.99"
//   const myLat="44.34"
  
//   const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +query+"&lat="+myLat+"&lon="+myLon+"&appid="+id;

//   https.get(apiUrl, (response) => { 
//     console.log(response.statusCode);
//     response.on('data', (data)=>{
//       const weatherData=JSON.parse(data)
//       console.log(weatherData)

//       // const weatherDataJson=JSON.stringify(weatherData)
//       // console.log(weatherDataJson)
//       const temp=weatherData.main.temp;
      
//       // console.log(temp)
//       const description=weatherData.weather[0].description;  
//       const icon=weatherData.weather[0].icon
//       const imgURL="https://openweathermap.org/img/wn/" + icon + "@2x.png"
//       res.write("<p>The weather data is"+description+"</p>")
//       res.write("<h1>The temperature is " + temp + " degrees</h1>")
//       res.write("<img src="+imgURL+">")
//       res.send()
//       // res.send("<h1>The temperature is " + temp + " degrees</h1><p>The weather is " + description + "</p>");

//     })     
//   })






app.listen(5000, () => {
  console.log('Example app listening on port 3000!')
})