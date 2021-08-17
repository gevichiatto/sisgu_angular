import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargoListComponent } from './cargo-list/cargo-list.component';

const routes: Routes = [
  { path: 'cargos', component: CargoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
