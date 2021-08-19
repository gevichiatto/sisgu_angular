import { Component, OnInit } from '@angular/core';
import { Cargo } from '../classes/cargo';
import { CargoService } from '../services/cargo.service';

@Component({
  selector: 'app-cargo-list',
  templateUrl: './cargo-list.component.html',
  styleUrls: ['./cargo-list.component.css']
})
export class CargoListComponent implements OnInit {

  cargos!: Cargo[];
  onEditting: boolean = false;
  cargoEdicao!: Cargo;
  nomeUnico: boolean = true;
  nomeFilled: boolean = true;

  constructor(private cargoService: CargoService) {}

  ngOnInit() {
    this.cargoService.findAll().subscribe(data => {
      data.sort(function(a,b) { 
        if (a.nome >= b.nome)
          return 1;
        else
          return -1;
      });
      this.cargos = data;
    });
  }

  onEditar(cargo: Cargo) {
    this.onEditting = true;
    this.nomeUnico = true;
    this.nomeFilled = true;
    this.cargoEdicao = cargo;
  }

  onSubmit() {
    this.nomeUnico = true;
    this.nomeFilled = true;
    
    if (!this.cargoEdicao.nome) {
      this.nomeFilled = false;
      return this.ngOnInit();
    } else if (!this.validaNomeUnico(this.cargoEdicao.nome)) {
      return this.ngOnInit();
    }

    this.cargoService.update(this.cargoEdicao).subscribe(result => {
      this.onEditting = false;
      this.ngOnInit();
    });
  }

  validaNomeUnico(name: string) {
    for (let c of this.cargos) {
      if (c.nome == name) {
        this.nomeUnico = false;
        return false;
      }
    }
    return true;
  }

}
