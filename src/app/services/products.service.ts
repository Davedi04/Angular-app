import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = [
    { id: 1, name: "Figurine Astérix", price: 29.99, image: './assets/images/astérix.jpg', description: "et bien"},
    { id: 2, name: "Figurine Obélix", price: 24.99, image: './assets/images/obélix.jpg' },
    { id: 2, name: "Figurine Idéfix", price: 19.99, image: './assets/images/idéfix.jpg' },
    { id: 2, name: "Figurine Panoramix", price: 34.99, image: './assets/images/panoramix.jpg' },
    { id: 2, name: "Figurine Falbala", price: 22.99, image: './assets/images/falbala.jpg' },
    { id: 2, name: "Figurine Abraracourcix", price: 28.99, image: './assets/images/abraracourcix.jpg' },
    { id: 2, name: "Figurine Assurancetourix", price: 19.99, image: './assets/images/assurancetourix.jpg' },
    { id: 2, name: "Figurine Romain", price: 10.99, image: './assets/images/romain.jpg' },
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}