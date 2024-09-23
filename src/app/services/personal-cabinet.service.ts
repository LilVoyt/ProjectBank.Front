import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class PersonalCabinetService {

  constructor(private http: HttpClient) { }

  getAccountById(userId: string): Observable<Account> {
    return this.http.get<Account>(`https://localhost:7281/api/account?login=${userId}`).pipe(
      map(account => {
        account.cards.forEach(card => {
          card.expiryDate = new Date(card.expiryDate);
        });
        console.log(account); 
        return account;
      })
    );
    }
}
