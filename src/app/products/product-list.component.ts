import { Component, OnInit } from '@angular/core';
import { Product } from './shared/product';

@Component({
  selector: 'app-product-list',
  template: `
    <h1>Products</h1>
    <ul *ngIf="products">
      <li *ngFor="let product of products; let i = index" [ngSwitch]="product.quantity">
        Qty: {{ product.quantity }} - {{ product.description }}

        <span *ngSwitchCase="'0'" class="text-danger">Out of stock</span>
        <span *ngSwitchCase="'1'" class="text-warning">Last one!</span>
        <span *ngSwitchDefault class="text-primary">In stock</span>
      </li>
    </ul>
  `
})
export class ProductListComponent implements OnInit {
  products: Product[];
  productId = 3;

  ngOnInit() {
    this.products = [
      { id: 1, description: 'cups', quantity: 1 },
      { id: 2, description: 'spoons', quantity: 10000 },
      { id: 3, description: 'knives', quantity: 0 }
    ];
  }
}
