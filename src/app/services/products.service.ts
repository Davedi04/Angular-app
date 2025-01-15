import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = [
    { id: 1, name: 'Figurine Astérix', price: 30 },
    { id: 2, name: 'Figurine Obélix', price: 40 },
    { id: 3, name: 'Figurine Idéfix', price: 20 },
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
