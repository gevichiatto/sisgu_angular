import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { CargoListComponent } from './cargo-list/cargo-list.component';
import { CargoService } from './services/cargo.service';

@NgModule({
  declarations: [
    AppComponent,
    CargoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CargoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
