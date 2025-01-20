import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products = [
    { id: 1, name: 'Figurine Astérix', price: 19.99 },
    { id: 2, name: 'Figurine Obélix', price: 29.99 },
    { id: 3, name: 'Figurine Idéfix', price: 14.99 },
  ];

  searchTerm: string = '';
}

