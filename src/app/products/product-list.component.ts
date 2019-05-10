import { Component, OnInit } from '@angular/core';
import { Product } from './shared/product';

@Component({
  selector: 'app-product-list',
  template: `
    <h1>Products</h1>
    <ul *ngIf="products">
      <li *ngFor="let product of products; let i = index">
        {{ i + 1 }}) {{ product.description }} {{ product.quantity }}
      </li>
    </ul>
    <div *ngIf="!products">No products yet - wait 5 seconds</div>
  `
})
export class ProductListComponent implements OnInit {
  products: Product[];
  productId = 3;

  ngOnInit() {
    setTimeout(() => {
      this.products = [
        { id: 1, description: 'cups', quantity: 30 },
        { id: 2, description: 'spoons', quantity: 10000 },
        { id: 3, description: 'knives', quantity: 0 }
      ];
    }, 5000);
  }
}
