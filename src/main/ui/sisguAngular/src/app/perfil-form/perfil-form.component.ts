import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from '../classes/perfil';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.css']
})
export class PerfilFormComponent {

  private perfil: Perfil;
  nome!: string;

  constructor(private route: ActivatedRoute, private router: Router, private perfilService: PerfilService) {
    this.perfil = new Perfil();
  }

  onSubmit() {
    this.perfil.nome = this.nome;
    this.perfilService.save(this.perfil).subscribe(result => this.gotoPerfilList());
  }

  gotoPerfilList() {
    this.router.navigate(['/perfis']);
  }
}
