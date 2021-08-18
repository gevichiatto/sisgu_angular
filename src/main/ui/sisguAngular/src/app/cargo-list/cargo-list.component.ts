import { Component, OnInit } from '@angular/core';
import { Cargo } from '../classes/cargo';
import { CargoService } from '../services/cargo.service';

@Component({
  selector: 'app-cargo-list',
  templateUrl: './cargo-list.component.html',
  styleUrls: ['./cargo-list.component.css']
})
export class CargoListComponent implements OnInit {

  cargos: Cargo[] | undefined;
  onEditting: boolean = false;
  cargoEdicao!: Cargo;

  constructor(private cargoService: CargoService) {}

  ngOnInit() {
    this.cargoService.findAll().subscribe(data => {
      this.cargos = data;
    });
  }

  onEditar(cargo: Cargo) {
    this.onEditting = true;
    this.cargoEdicao = cargo;
  }

  onSubmit() {
    this.cargoService.update(this.cargoEdicao).subscribe(result => {
      this.onEditting = false;
      this.ngOnInit();
    });
  }

}
