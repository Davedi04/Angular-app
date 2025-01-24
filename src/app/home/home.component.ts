import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { SortByPricePipe } from '../pipes/sort-by-price.pipe';
import { FilterByNamePipe } from '../pipes/filter-by-name.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, SortByPricePipe,FilterByNamePipe, FormsModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  searchText = '';

  sortOrder: string = 'asc';

  sortedProducts: any[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  toggleSortOrder() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.sortProducts(); // Re-trie les produits
  }

  sortProducts() {
    this.sortedProducts = [...this.products].sort((a, b) =>
      this.sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );
  }

  changeSortOrder(order: string) {
    
   
    this.sortOrder = order;
  }
}