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

  constructor(private cargoService: CargoService) {}

  ngOnInit() {
    this.cargoService.findAll().subscribe(data => {
      this.cargos = data;
    });
  }

}
