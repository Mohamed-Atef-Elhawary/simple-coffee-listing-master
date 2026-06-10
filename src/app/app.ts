import { Component, signal } from '@angular/core';
import { CoffeeService } from './services/coffee-service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private cs: CoffeeService) {
    this.cs.getCoffee().subscribe(console.log);
  }
}
