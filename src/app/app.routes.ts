import { Routes } from '@angular/router';
import { Product } from './componenets/product/product';
import { Card } from './componenets/card/card';

export const routes: Routes = [
  { path: 'p', component: Product },
  { path: 'c', component: Card },
];
