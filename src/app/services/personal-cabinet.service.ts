import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { Account } from '../models/account';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class PersonalCabinetService {

  constructor(private http: HttpClient) { }

  getAccountById(userId: string): Observable<Account> {
    return this.http.get<any>(`https://localhost:7281/api/account?login=${userId}`).pipe(
      map(response => this.parseAccountResponse(response))
    );
    }

    getAllransactions(): Observable<Transaction[]>{
      return this.http.get<Transaction[]>(`https://localhost:7281/transactions`);
    }

    parseAccountResponse(response: any): Account {
      const account: Account = {
        id: response.id,
        name: response.name,
        customer: response.customer,
        cards: response.cards.$values
      };
  
      return account; 
    }
}
