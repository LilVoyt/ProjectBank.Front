import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { Account } from '../models/account';
import { Transaction } from '../models/transaction';
import { Card } from '../models/card';
import { CreateTransactionCommand } from '../models/transactionDto';
import { Guid } from "guid-typescript";
import { AddCardDto } from '../models/addCardDto';


@Injectable({
  providedIn: 'root'
})
export class PersonalCabinetService {

  accountCards: Card[] | null = null;

  constructor(private http: HttpClient) { }

  getAccountById(userId: String): Observable<Account> {
    return this.http.get<Account>(`https://localhost:7281/api/account?id=${userId}`)
    }

  getAllTransactions(senderId: string | undefined, receiverId: string | undefined, sortItem: string = "date", sortOrder: string = "asc"): Observable<Transaction[]>{
      return this.http.get<Transaction[]>(`https://localhost:7281/api/transactions?sender=${senderId}&receiver=${receiverId}&sortItem=${sortItem}${sortItem}`).pipe(
        map(response => response as Transaction[])
      )
    }
  
  setAccountCards(accountCards: Card[]){
    this.accountCards = accountCards;
    console.log(this.accountCards)
  }

  getAccountCards(accountId: string) : Observable<Card[]> {
    return this.http.get<Card[]>(`https://localhost:7281/api/card?accountId=${accountId}`);
  }

  postTransaction(createTransactionCommand: CreateTransactionCommand): Observable<CreateTransactionCommand> {
    console.log(createTransactionCommand);
    return this.http.post<CreateTransactionCommand>('https://localhost:7281/api/transactions', createTransactionCommand);
  }

  getToken(){
    var res = localStorage.getItem('token');
    if(res === null){
      return " ";
    }
    else{
      return res;
    }
    // console.log(res);
  }

  getId(token: string) : string {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  addCard(addCardDto : AddCardDto) : Observable<Card>{
    return this.http.post<Card>(`https://localhost:7281/api/card`, addCardDto);
  }
}
