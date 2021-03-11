const express = require('express');
const router = express.Router();

// Load Table model
const Table = require('../../models/Tables');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send( "express test successful"));

// @route GET api/table
// @description Get all data
// @access Public
router.get('/', async (req, res) => {
    console.log("Table is",Table)
    const tables = await Table.find({},function(err,data){
        res.json(tables);
    });
    res.send(tables);
  });

// // @route GET api/books/:id
// // @description Get single book by id
// // @access Public
// router.get('/:id', (req, res) => {
//   Book.findById(req.params.id)
//     .then(book => res.json(book))
//     .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
// });

// // @route GET api/books
// // @description add/save book
// // @access Public
router.post('/',async (req, res) => {
  let data = await Table.findOne({name:req.body.name});   //Checking if we are not entering a duplicate seat number as seat number is unique.
  if (data) return res.status(400).send('Data already present');


  table = new Table({ name: req.body.name,age: req.body.age,color:req.body.color });
  table = await table.save();
  
  res.send(table);
});

// // @route GET api/books/:id
// // @description Update book
// // @access Public
// router.put('/:id', (req, res) => {
//   Book.findByIdAndUpdate(req.params.id, req.body)
//     .then(book => res.json({ msg: 'Updated successfully' }))
//     .catch(err =>
//       res.status(400).json({ error: 'Unable to update the Database' })
//     );
// });

// // @route GET api/books/:id
// // @description Delete book by id
// // @access Public
// router.delete('/:id', (req, res) => {
//   Book.findByIdAndRemove(req.params.id, req.body)
//     .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
//     .catch(err => res.status(404).json({ error: 'No such a book' }));
// });

module.exports = router;