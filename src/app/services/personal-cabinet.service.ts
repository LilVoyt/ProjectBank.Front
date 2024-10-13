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
    return this.http.get<Account>(`https://localhost:7281/api/account?login=${userId}`)
    }

  getAllTransactions(senderId: string | undefined, receiverId: string | undefined, sortItem: string = "date", sortOrder: string = "asc"): Observable<Transaction[]>{
      return this.http.get<Transaction[]>(`https://localhost:7281/api/transactions?sender=${senderId}&receiver=${receiverId}&sortItem=${sortItem}${sortItem}`).pipe(
        map(response => response as Transaction[])
      )
    }
  // postTransaction(senderNumber: string, receiverNumber: string, sum: number){
  //   this.http.post<>
  // }
}
