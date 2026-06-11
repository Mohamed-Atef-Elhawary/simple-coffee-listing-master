import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { CoffeeService } from '../../services/coffee-service';
import { Icoffee } from '../../interfaces/icoffee';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {
  coffees: WritableSignal<Icoffee[]> = signal<Icoffee[]>([]);
  constructor(private coffeeService: CoffeeService) {}
  ngOnInit(): void {
    this.coffeeService.getCoffee().subscribe(console.log);
  }
}
