import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashAccountComponent } from "./cash-account/cash-account.component";
import { NetWorthComponent } from "./net-worth/net-worth.component";


const routes: Routes = [
  {path:'', redirectTo: '/cash-account', pathMatch:'full'},
  {path:'cash-account', component:CashAccountComponent},
  {path:'net-worth', component:NetWorthComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
