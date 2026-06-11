import { Component } from '@angular/core';
import { Home } from './pages/home/home';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Home, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
