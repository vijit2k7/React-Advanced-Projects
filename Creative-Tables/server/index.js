const express = require('express');
const connectDB = require('./config/db');
const table = require('./routes/api/fetchTableData');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/tableData')
 .then(() => console.log('MongoDb Connected…'))
 .catch(err => console.error('Connection failed…'));


console.log("sdsadasdasd")
const tableSchema=new mongoose.Schema({
    name:String,
    age:String,
    color:String
})
const Table=mongoose.model('table',tableSchema);

async function createData(){
  const table = new Table({
  name:'Sid',
  age:'26',
  color:'Narangi'
});

  const result=await table.save();
  console.log("result async await",result);
}
createData();
const result=Table.find();
console.log("resulkt is ",result);
app.get('/', (req, res) => res.send('Hello noobsss!'));

app.use(express.json());
app.use('/api', table);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));