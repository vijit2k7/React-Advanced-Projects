const mongoose = require('mongoose');

const TableSchema=new mongoose.Schema({
  name:String,
  age:String,
  color:String
})

const Table=mongoose.model('Table', TableSchema);
console.log("lololo",Table.find());
module.exports   = Table;