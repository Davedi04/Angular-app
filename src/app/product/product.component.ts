import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductComponent {
  product: any;

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = {
      id,
      name: id === '1' ? 'Figurine Astérix' : id === '2' ? 'Figurine Obélix' : 'Figurine Idéfix',
      price: id === '1' ? 19.99 : id === '2' ? 29.99 : 14.99,
    };
  }
}
