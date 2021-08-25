import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor(private http:HttpClient) { }

  getInvestData(params={category:'stock'}){
    return this.http.get(`http://demospring-demospring.namdevops6.conygre.com/api/portfoliomanager/${params.category}`)
  }
}
