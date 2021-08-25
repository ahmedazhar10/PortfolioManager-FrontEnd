import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashAccountComponent } from "./cash-account/cash-account.component";


const routes: Routes = [
  {path:'', redirectTo: '/cash-account', pathMatch:'full'},
  {path:'cash-account', component:CashAccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
