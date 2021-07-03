var express = require('express');
var cors = require('cors')
const bodyParser= require('body-parser')
const app = express();
const userRouter=require('./routes/index')

app.use(cors()) // Use this after the variable declaration
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());             // Very Important to process ui request from ui to node
app.use('/user',userRouter);


app.post('/insertUser', (req, res) => {
    console.log("req is",req.body);
    res.send('Hello World')
  });
app.listen(3001, function() {
    console.log('listening on 3001')
  });