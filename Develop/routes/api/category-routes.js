const router = require('express').Router();
const { Category, Product } = require('../../models');
const { restore } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({})
  .then((results) => {

    res.json(results)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  res.send("This is your id"+ req.params.id)
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((results) => {
    res.json(results)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
