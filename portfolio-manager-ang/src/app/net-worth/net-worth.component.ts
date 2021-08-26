import { Component, OnInit } from '@angular/core';
import {NetWorthService} from 'src/services/net-worth.service';

@Component({
  selector: 'app-net-worth',
  templateUrl: './net-worth.component.html',
  styleUrls: ['./net-worth.component.css']
})

export class NetWorthComponent implements OnInit {

  public netWorthData: any = [{}]
  public imgChart:any = null
  public imgHarry:any = null
  public home:any = null
  public totalNetWorth = 0.00
  public message = ""

  
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


  showImg(){
    this.imgChart = './assets/pieChart.png'
  }

  showHarry(){
    this.imgHarry = './assets/harryKane.jpeg'
    this.home = "ITS COMING HOME"

  calculateTotalNetWorth(){
    this.totalNetWorth = 962456.08
  }


}
