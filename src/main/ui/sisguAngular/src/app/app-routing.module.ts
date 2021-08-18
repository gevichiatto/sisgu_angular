import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargoFormComponent } from './cargo-form/cargo-form.component';
import { CargoListComponent } from './cargo-list/cargo-list.component';
import { PerfilFormComponent } from './perfil-form/perfil-form.component';
import { PerfilListComponent } from './perfil-list/perfil-list.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

const routes: Routes = [
  { path: 'cargos', component: CargoListComponent },
  { path: 'addcargo', component: CargoFormComponent },
  { path: 'perfis', component: PerfilListComponent },
  { path: 'addperfil', component: PerfilFormComponent },
  { path: 'usuarios', component: UsuarioListComponent },
  { path: 'addusuario', component: UsuarioFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
