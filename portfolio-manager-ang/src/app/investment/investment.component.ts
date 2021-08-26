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
  public total:number = 0

  constructor(private investmentService:InvestmentService) { }

  ngOnInit(): void {
  }

  makeServiceCall(){
    this.investmentService.getInvestData(this.paramObj).subscribe((data:any)=>{
      this.reportData = data
    })
  }

  addStocks(){
    if(this.paramObj.category == 'stock'){
      for(let i=0; i<this.reportData.length; i++){
        this.total += this.reportData[i].closingPrice
      }
      console.log(this.total)
    }
  }






}
