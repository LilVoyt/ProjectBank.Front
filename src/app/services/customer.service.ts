import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public getCustomers() : Observable<Customer[]> {
    return this.http.get<Customer[]>('https://localhost:7281/api/customers');
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>('https://localhost:7281/api/customers', customer);
  }
}
