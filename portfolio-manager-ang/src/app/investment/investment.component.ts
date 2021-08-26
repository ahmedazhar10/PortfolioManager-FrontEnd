import { Component, OnInit } from '@angular/core';
import {InvestmentService} from "../../services/investment.service";

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {

  public reportData: any = [{}]
  paramObj = {category:'stock'}
  stockTotal = 0
  bondTotal = 0
  etfTotal:number = 0
  futureTotal:number = 0

  constructor(private investmentService:InvestmentService) { }

  ngOnInit(): void {
  }

  makeServiceCall(){
    this.investmentService.getInvestData(this.paramObj).subscribe((data:any)=>{
      this.reportData = data
    })
  }

  addInvestments(){
    if(this.paramObj.category == 'stock'){
      for(let i=0; i<this.reportData.length; i++){
        this.stockTotal += this.reportData[i].closingPrice
      }
      console.log(this.stockTotal)
    }

    else if(this.paramObj.category == 'bond'){
      for(let i=0; i<this.reportData.length; i++){
        this.bondTotal += this.reportData[i].coupon
      }
      console.log(this.bondTotal)
    }
    else if(this.paramObj.category == 'future'){
      for(let i=0; i<this.reportData.length; i++){
        this.futureTotal += this.reportData[i].contractValue
      }
      console.log(this.futureTotal)
    }
    else if(this.paramObj.category == 'etf'){
      for(let i=0; i<this.reportData.length; i++){
        this.etfTotal += this.reportData[i].ytdReturncoupon
      }
      console.log(this.etfTotal)
    }
  }







}
