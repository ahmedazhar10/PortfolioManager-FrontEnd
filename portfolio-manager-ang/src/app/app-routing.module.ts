import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashAccountComponent } from "./cash-account/cash-account.component";
import { InvestmentComponent } from "./investment/investment.component";


const routes: Routes = [
  {path:'cash-account', component:CashAccountComponent},
  {path:'investment', component:InvestmentComponent, outlet:'investment'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
