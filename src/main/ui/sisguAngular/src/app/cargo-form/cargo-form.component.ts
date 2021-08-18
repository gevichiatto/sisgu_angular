import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from '../classes/cargo';
import { CargoService } from '../services/cargo.service';

@Component({
  selector: 'app-cargo-form',
  templateUrl: './cargo-form.component.html',
  styleUrls: ['./cargo-form.component.css']
})
export class CargoFormComponent {

  private cargo: Cargo;
  nome!: string;
  
  constructor(private route: ActivatedRoute, private router: Router, private cargoService: CargoService) {
    this.cargo = new Cargo();
  }

  onSubmit() {
    this.cargo.nome = this.nome;
    this.cargoService.save(this.cargo).subscribe(result => this.gotoCargoList());
  }

  gotoCargoList() {
    this.router.navigate(['/cargos']);
  }

}
