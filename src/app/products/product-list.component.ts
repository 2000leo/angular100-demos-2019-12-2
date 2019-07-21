import { Component, OnInit } from '@angular/core';
import { Product } from './shared/product';

@Component({
  selector: 'app-product-list',
  template: `
    <h1>Products</h1>
    <ul *ngIf="products">
      <li *ngFor="let product of products; let i = index">
        {{ product.description }}
        Cost: {{ product.price | currency: 'USD' }}
      </li>
    </ul>

    <ul *ngIf="products">
      <li *ngFor="let product of products; let i = index">
        {{ product.description }}
        Cost: {{ product.price | currency: 'EUR':'symbol-narrow' }}
      </li>
    </ul>

    <ul *ngIf="products">
      <li *ngFor="let product of products; let i = index">
        {{ product.description }}
        Cost: {{ product.price | currency: 'USD' | lowercase }}
      </li>
    </ul>
  `
})
export class ProductListComponent implements OnInit {
  products: Product[];
  productId = 3;

  ngOnInit() {
    this.products = [
      { id: 1, description: 'cups', quantity: 1, price: 12.99 },
      { id: 2, description: 'spoons', quantity: 10000, price: 24.0 },
      { id: 3, description: 'knives', quantity: 0, price: 53.23 }
    ];
  }
}
