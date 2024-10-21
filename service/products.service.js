const { faker } = require('@faker-js/faker');
const { boom } = require('@hapi/boom');

class ProductService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate(size) {
    const limit = size || 10;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.database.mongodbObjectId(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url()
      })
    }

  }
  async create({ name, price, image }) {
    const newProduct = {
      id: faker.database.mongodbObjectId(),
      name,
      price,
      image

    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {

    return this.products;

  }

  async findOne(id) {
    const products = this.products.find(item => item.id === id);
    if (!this.products) {
      throw boom.notFound('product no found')
    }
    return products;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product no found');
    }
    this.products[index] = {
      ...this.products[index],
      ...changes,

    }
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product no found');
    }
    this.products.splice(index, 1);
    return {
      id
    };
  }

}

module.exports = ProductService;
