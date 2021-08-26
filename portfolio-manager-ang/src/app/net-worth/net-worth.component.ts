import { Component, OnInit } from '@angular/core';
import {NetWorthService} from 'src/services/net-worth.service';

@Component({
  selector: 'app-net-worth',
  templateUrl: './net-worth.component.html',
  styleUrls: ['./net-worth.component.css']
})

export class NetWorthComponent implements OnInit {

  public netWorthData: any = [{}]
  
  constructor(private netWorthService:NetWorthService) { }
  ngOnInit(): void {
  }

  netWorthServiceCall(){
    this.netWorthService.getNetWorthData().subscribe((data:any)=> {
      this.netWorthData = data
      console.log(this.netWorthData[0].cashAccounts.institution);
    })
    //console.log(this.netWorthData);
  }


}
