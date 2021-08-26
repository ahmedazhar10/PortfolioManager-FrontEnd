import { Component, OnInit } from '@angular/core';
import {CashAccountService} from 'src/services/cash-account.service';

@Component({
  selector: 'app-cash-account',
  templateUrl: './cash-account.component.html',
  styleUrls: ['./cash-account.component.css']
})
export class CashAccountComponent implements OnInit {

  public cashAccountData = []
  constructor(private cashAccountService:CashAccountService) { }
  ngOnInit(): void {
  }
  
  cashAccountServiceCall(){
    this.cashAccountService.getCashData().subscribe((data:any)=> {
      this.cashAccountData = data
      console.log(this.cashAccountData[0]);
    })
    }

}
