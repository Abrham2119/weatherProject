const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.get('/display', (req, res) => {
    res.send(__dirname+'/index.html')
})
app.post('/display', (req, res) => {
    const num1 = parseInt(req.body.num1)
    res.send('The nunmber is '+num1)
})

app.listen(3008, () => {
  console.log('Example app listening on port 3000!')
})