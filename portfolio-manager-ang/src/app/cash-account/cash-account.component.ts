import { Component, OnInit } from '@angular/core';
import {CashAccountService} from 'src/services/cash-account.service';

@Component({
  selector: 'app-cash-account',
  templateUrl: './cash-account.component.html',
  styleUrls: ['./cash-account.component.css']
})
export class CashAccountComponent implements OnInit {

  public reportData = {}
  constructor(private cashAccountService:CashAccountService) { }

  ngOnInit(): void {
  }

  makeServiceCall(){
    this.cashAccountService.getCashData().subscribe((data:any)=> {
      this.reportData = JSON.stringify(data)
    })
    }

}
