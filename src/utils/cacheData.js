let instance;
class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }

    this.products = [];
    this.categories = [];
    instance = this;
  }

  getProducts() {
    return this.products;
  }

  setProducts(products) {
    if (this.products.length == 0) this.products.push(products);
  }

  getCategories() {
    return this.categories;
  }
  setCategories(categories) {
    if (this.categories.length == 0) this.categories.push(categories);
  }
}

const singletonCounter = Object.freeze(new Counter());

export default singletonCounter;
