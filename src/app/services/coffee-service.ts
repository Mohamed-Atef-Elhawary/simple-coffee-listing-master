import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Icoffee } from '../interfaces/icoffee';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  constructor(private http: HttpClient) {}
  getCoffee(): Observable<Icoffee[]> {
    return this.http.get<Icoffee[]>(environment.APIURL);
  }
}
