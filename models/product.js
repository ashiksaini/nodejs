import { db } from "./utils/database.js";

class Product {
  constructor(id, title, price, description, imageUrl) {
    this.id, this.title, this.price, this.description, this.imageUrl;
  }

  save() {

  }

  deleteById(id) {

  }

  static fetchAll() {
    return db.execute('SELECT * FROM products')
  }

  findById(id) {

  }
}
