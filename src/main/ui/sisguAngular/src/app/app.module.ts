import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { CargoListComponent } from './cargo-list/cargo-list.component';
import { CargoService } from './services/cargo.service';
import { CargoFormComponent } from './cargo-form/cargo-form.component';
import { FormsModule } from '@angular/forms';
import { PerfilListComponent } from './perfil-list/perfil-list.component';
import { PerfilFormComponent } from './perfil-form/perfil-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CargoListComponent,
    CargoFormComponent,
    PerfilListComponent,
    PerfilFormComponent,
    UsuarioListComponent,
    UsuarioFormComponent
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
