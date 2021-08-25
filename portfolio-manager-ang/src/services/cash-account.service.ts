import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CashAccountService {

  constructor(private http:HttpClient) { }

  getCashData(){
    return this.http.get(`http://demospring-demospring.namdevops6.conygre.com/api/portfoliomanager/cashaccounts`)
  }
}
