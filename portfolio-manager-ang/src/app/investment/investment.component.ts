import { Component, OnInit } from '@angular/core';
import {InvestmentService} from "../../services/investment.service";

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {

  public reportData = {}
  paramObj = {category:'stock'}

  constructor(private investmentService:InvestmentService) { }

  ngOnInit(): void {
  }

  makeServiceCall(){
    this.investmentService.getInvestData(this.paramObj).subscribe((data:any)=>{
      this.reportData = JSON.stringify(data)
    })
  }

}
