import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { BondComponent } from './bond/bond.component';
import { FutureComponent } from './future/future.component';
import { EtfComponent } from './etf/etf.component';
import { CashAccountComponent } from './cash-account/cash-account.component';
import { NetWorthComponent } from './net-worth/net-worth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    BondComponent,
    FutureComponent,
    EtfComponent,
    CashAccountComponent,
    NetWorthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
