import { Component, effect } from '@angular/core';
import { Product } from '../../componenets/product/product';
import { CoffeeService } from '../../services/coffee-service';

@Component({
  selector: 'app-home',
  imports: [Product],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private coffeeService: CoffeeService) {
    effect(() => {
      console.log(this.coffeeService.scrollHeight());
    });
  }
}
