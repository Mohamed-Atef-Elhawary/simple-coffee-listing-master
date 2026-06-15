import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Icoffee } from '../interfaces/icoffee';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  scrollHeight = signal<number>(0);
  constructor(private http: HttpClient) {}
  getCoffee(): Observable<Icoffee[]> {
    return this.http.get<Icoffee[]>(environment.APIURL).pipe(catchError(() => EMPTY));
  }
}
