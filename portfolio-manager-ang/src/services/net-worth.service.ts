import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetWorthService {
  
  constructor(private http:HttpClient) { }

  getNetWorthData(){
    return this.http.get(`http://demospring-demospring.namdevops6.conygre.com/api/portfoliomanager/networth`)
  }
}
