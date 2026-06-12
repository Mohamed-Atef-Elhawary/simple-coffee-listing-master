import { Component, model, signal } from '@angular/core';
import { ProductStatus } from '../../types/Product-status';
import { Card } from '../card/card';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [Card, NgClass],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  status = signal<ProductStatus>('All');
  setAvailable() {
    this.status.set('Available');
  }
  setAll(): void {
    this.status.set('All');
  }
}
