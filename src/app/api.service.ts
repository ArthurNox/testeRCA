import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  baseUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  listar () {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

}
