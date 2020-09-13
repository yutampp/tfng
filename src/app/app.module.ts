import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaindeckComponent } from './maindeck/maindeck.component';
import { ExtradeckComponent } from './extradeck/extradeck.component';
import { SidedeckComponent } from './sidedeck/sidedeck.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { CardpoolComponent } from './cardpool/cardpool.component';
import { CardViewComponent } from './card-view/card-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MaindeckComponent,
    ExtradeckComponent,
    SidedeckComponent,
    CardlistComponent,
    CardpoolComponent,
    CardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
