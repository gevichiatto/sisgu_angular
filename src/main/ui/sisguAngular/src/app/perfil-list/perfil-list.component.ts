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
  onEditting: boolean = false;
  perfilEdicao!: Perfil;

  constructor(private perfilService: PerfilService) { }

  ngOnInit() {
    this.perfilService.findAll().subscribe(data => {
      this.perfis = data;
    });
  }

  onEditar(perfil: Perfil) {
    this.onEditting = true;
    this.perfilEdicao = perfil;
  }

  onExcluir(perfil: Perfil) {
    this.perfilService.delete(perfil).subscribe(result => {
      this.ngOnInit();
    });
  }

  onSubmit() {
    this.perfilService.update(this.perfilEdicao).subscribe(result => {
      this.onEditting = false;
      this.ngOnInit();
    });
  }
  
}
