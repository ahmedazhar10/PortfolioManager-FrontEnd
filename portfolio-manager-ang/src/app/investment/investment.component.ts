import { Component, OnInit } from '@angular/core';
import {InvestmentService} from "../../services/investment.service";

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {

  public reportData: any = [{}]
  paramObj = {category:''}
  total = 0

  constructor(private investmentService:InvestmentService) { }

  ngOnInit(): void {
  }

  makeServiceCall(){
    this.investmentService.getInvestData(this.paramObj).subscribe((data:any)=>{
      this.reportData = data
    })
  }

  addInvestments(){
    this.total = 0
    if(this.paramObj.category == 'stock'){
      for(let i=0; i<this.reportData.length; i++){
        let val = this.reportData[i].volume * this.reportData[i].closingPrice
        this.total += val
      }
    }
    else if(this.paramObj.category == 'bond'){
      for(let i=0; i<this.reportData.length; i++){
        this.total += this.reportData[i].coupon
      }
    }
    else if(this.paramObj.category == 'future'){
      for(let i=0; i<this.reportData.length; i++){
        this.total += this.reportData[i].contractValue
      }
    }
    else if(this.paramObj.category == 'etf'){
      for(let i=0; i<this.reportData.length; i++){
        this.total += this.reportData[i].ytdReturncoupon
      }
    }
  }


}
