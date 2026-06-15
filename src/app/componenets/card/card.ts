import {
  ChangeDetectorRef,
  Component,
  computed,
  effect,
  input,
  model,
  OnInit,
  signal,
  untracked,
  WritableSignal,
} from '@angular/core';
import { CoffeeService } from '../../services/coffee-service';
import { Icoffee } from '../../interfaces/icoffee';
import { ProductStatus } from '../../types/Product-status';
import { JsonPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgClass],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {
  coffees: WritableSignal<Icoffee[]> = signal<Icoffee[]>([]);
  status = input.required<ProductStatus>();
  constructor(
    private coffeeService: CoffeeService,
    private cdr: ChangeDetectorRef,
  ) {}
  computedCoffees = computed(() => {
    let status = this.status();

    if (status === 'Available') {
      return this.coffees().filter((coffee) => coffee.available);
    } else {
      return this.coffees();
    }
  });
  ngOnInit(): void {
    this.coffeeService.getCoffee().subscribe({
      next: (products: Icoffee[]) => {
        this.coffees.set(products);
        this.cdr.detectChanges();
        this.coffeeService.scrollHeight.set(document.documentElement.scrollHeight);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
