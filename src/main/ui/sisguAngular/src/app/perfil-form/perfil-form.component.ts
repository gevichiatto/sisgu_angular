import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from '../classes/perfil';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.css']
})
export class PerfilFormComponent implements OnInit{

  private perfil: Perfil;
  private perfis!: Perfil[];
  nome!: string;
  nomeUnico: boolean = true;
  nomeFilled: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private perfilService: PerfilService) {
    this.perfil = new Perfil();
  }

  ngOnInit() {
    this.perfilService.findAll().subscribe(data => {
      data.sort(function(a,b) { 
        if (a.nome >= b.nome)
          return 1;
        else
          return -1;
      });
      this.perfis = data;
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

    this.perfil.nome = this.nome;
    this.perfilService.save(this.perfil).subscribe(result => this.gotoPerfilList());
  }

  gotoPerfilList() {
    this.router.navigate(['/perfis']);
  }

  validaNomeUnico(name: string) {
    for (let p of this.perfis) {
      if (p.nome == name) {
        this.nomeUnico = false;
        return false;
      }
    }
    return true;
  }
}
