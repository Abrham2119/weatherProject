const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.get('/display', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

app.post('/display', function(req, res) {
    console.log(num1)
    var num1 =parseFloat(req.body.num1)
    
    res.send('Your BMI is '+num1)

})

app.listen(3008, () => {
  console.log('Example app listening on port 3000!')
})