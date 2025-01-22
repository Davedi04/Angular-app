import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products = [
    { id: 1, image: 'assets/images/astérix.jpg', name: 'Figurine Astérix', price: 19.99  },
    { id: 2, image: 'assets/images/obélix.jpg', name: 'Figurine Obélix', price: 29.99 },
    { id: 3, image: 'assets/images/idéfix.jpg', name: 'Figurine Idéfix', price: 14.99 },
    { id: 4, image: 'assets/images/panoramix.jpg', name: 'Figurine Panoramix', price: 34.99 },
    { id: 5, image: 'assets/images/falbala.jpg', name: 'Figurine Falbala', price: 16.99 },
    { id: 6, image: 'assets/images/assurancetourix.jpg', name: 'Figurine Assurancetourix', price: 22.99 },
    { id: 7, image: 'assets/images/abraracourcix.jpg', name: 'Figurine Abraracourcix', price: 30.99 },
    { id: 8, image: 'assets/images/romain.jpg', name: 'Figurine Romain', price: 10.99 },
  ];

  searchTerm: string = '';
}