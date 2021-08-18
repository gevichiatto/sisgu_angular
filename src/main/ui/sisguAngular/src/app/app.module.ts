import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { CargoListComponent } from './cargo-list/cargo-list.component';
import { CargoService } from './services/cargo.service';
import { CargoFormComponent } from './cargo-form/cargo-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CargoListComponent,
    CargoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CargoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
