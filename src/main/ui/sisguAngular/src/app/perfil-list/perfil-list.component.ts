import { Component, OnInit } from '@angular/core';
import { Perfil } from '../classes/perfil';
import { Usuario } from '../classes/usuario';
import { PerfilService } from '../services/perfil.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-perfil-list',
  templateUrl: './perfil-list.component.html',
  styleUrls: ['./perfil-list.component.css']
})
export class PerfilListComponent implements OnInit {

  perfis!: Perfil[];
  usuarios!: Usuario[];
  onEditting: boolean = false;
  perfilEdicao!: Perfil;
  nomeUnico: boolean = true;
  nomeFilled: boolean = true;
  perfisExiste: boolean = false;

  constructor(private perfilService: PerfilService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.perfilService.findAll().subscribe(data => {
      data.sort(function(a,b) { 
        if (a.nome >= b.nome)
          return 1;
        else
          return -1;
      });
      if (data.length) {
        this.perfis = data;
        this.perfisExiste = true;
      }

      this.usuarioService.findAll().subscribe(data => {
        this.usuarios = data;
      })
    });
  }

  onEditar(perfil: Perfil) {
    this.onEditting = true;
    this.nomeUnico = true;
    this.nomeFilled = true;
    this.perfilEdicao = perfil;
  }

  onExcluir(perfil: Perfil) {
    this.perfilService.delete(perfil).subscribe(result => {
      this.ngOnInit();
    });
  }

  onSubmit() {
    this.nomeUnico = true;
    this.nomeFilled = true;

    if (!this.perfilEdicao.nome) {
      this.nomeFilled = false;
      return this.ngOnInit();;
    } else if (!this.validaNomeUnico(this.perfilEdicao.nome)) {
      return this.ngOnInit();;
    }

    this.perfilService.update(this.perfilEdicao).subscribe(result => {
      this.onEditting = false;
      this.ngOnInit();
    });
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

  podeExcluir(perfil: Perfil) {
    if (this.usuarios) {
      for (let u of this.usuarios) {
        if (u.perfil.nome == perfil.nome) {
          return false;
        }
      }
    }
    return true;
  }
  
}
