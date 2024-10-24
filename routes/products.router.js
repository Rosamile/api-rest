const express = require('express');
const ProductService = require('../service/products.service')
const router = express.Router();

const service = new ProductService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const productsId = await service.findOne(id);
  res.json(productsId);
})


router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);

  res.json({
    newProduct
  });
})


router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message

    });
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.delete(id);
  res.json(product);
})
module.exports = router;
