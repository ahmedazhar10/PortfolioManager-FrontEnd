import { Component, OnInit } from '@angular/core';
import {CashAccountService} from 'src/services/cash-account.service';

@Component({
  selector: 'app-cash-account',
  templateUrl: './cash-account.component.html',
  styleUrls: ['./cash-account.component.css']
})
export class CashAccountComponent implements OnInit {

  reportData = {}
  constructor(private cashAccountService:CashAccountService) { }

  ngOnInit(): void {
    this.cashAccountService.getCashData().subscribe((data)=>
      console.warn('get data', data)
    )
  }



}
