import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from '../classes/cargo';
import { CargoService } from '../services/cargo.service';

@Component({
  selector: 'app-cargo-form',
  templateUrl: './cargo-form.component.html',
  styleUrls: ['./cargo-form.component.css']
})
export class CargoFormComponent implements OnInit {

  private cargo: Cargo;
  private cargos!: Cargo[];
  nome!: string;
  nomeUnico: boolean = true;
  nomeFilled: boolean = true;
  
  constructor(private route: ActivatedRoute, private router: Router, private cargoService: CargoService) {
    this.cargo = new Cargo();
  }

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

  onSubmit() {
    this.nomeUnico = true;
    this.nomeFilled = true;

    if (!this.nome) {
      this.nomeFilled = false;
      return;
    } else if (!this.validaNomeUnico(this.nome)) {
      return;
    }

    this.cargo.nome = this.nome;
    this.cargoService.save(this.cargo).subscribe(result => this.gotoCargoList());
  }

  gotoCargoList() {
    this.router.navigate(['/cargos']);
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
