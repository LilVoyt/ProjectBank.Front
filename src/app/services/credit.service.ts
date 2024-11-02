import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditCreate } from '../models/creditCreate';
import { Credit } from '../models/credit';
import { Observable } from 'rxjs';
import { CreditInfo } from '../models/creditInfo';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private http: HttpClient) { }

  postCredit(creditCreate: CreditCreate): Observable<Credit> {
    console.log(creditCreate);
    return this.http.post<Credit>('https://localhost:7281/create', creditCreate);
  }

  getCredits(accountId: string) : Observable<Credit[]> {
    return this.http.get<Credit[]>(`https://localhost:7281/get-account-credits?accountId=${accountId}`);
  }

  getCreditInfo(creditId: string) : Observable<CreditInfo> {
    return this.http.get<CreditInfo>(`https://localhost:7281/get-credit-info?creditId=${creditId}`);
  }

  monthlyPayment(creditId: string){
    return this.http.post<any>(`https://localhost:7281/monthly-pay`, { creditId });
  }
}
