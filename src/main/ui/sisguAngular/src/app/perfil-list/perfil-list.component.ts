import { Component, OnInit } from '@angular/core';
import { Perfil } from '../classes/perfil';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-perfil-list',
  templateUrl: './perfil-list.component.html',
  styleUrls: ['./perfil-list.component.css']
})
export class PerfilListComponent implements OnInit {

  perfis: Perfil[] | undefined;

  constructor(private perfilService: PerfilService) { }

  ngOnInit() {
    this.perfilService.findAll().subscribe(data => {
      this.perfis = data;
    });
  }

}
