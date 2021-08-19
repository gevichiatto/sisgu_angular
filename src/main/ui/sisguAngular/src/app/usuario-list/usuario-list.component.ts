import { Component, OnInit } from '@angular/core';
import { Cargo } from '../classes/cargo';
import { Perfil } from '../classes/perfil';
import { Usuario } from '../classes/usuario';
import { CargoService } from '../services/cargo.service';
import { PerfilService } from '../services/perfil.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios!: Usuario[];
  cargos!: Cargo[];
  perfis!: Perfil[];
  onEditting: boolean = false;
  usuarioEdicao!: Usuario;

  nomeUsuario!: string;
  cpfUsuario!: string;
  dataNascimento!: Date;
  sexo!: string;
  nomeCargo!: string;
  nomePerfil!: string;

  nomeValido: boolean = true;
  cpfValido: boolean = true;
  dataValida: boolean = true;
  cpfUnico: boolean = true;

  usuariosExiste: boolean = false;

  constructor(private usuarioService: UsuarioService, private cargoService: CargoService, private perfilService: PerfilService) { }

  ngOnInit() {
    this.usuarioService.findAll().subscribe(data => {
      data.sort(function(a,b) { 
        if (a.nome >= b.nome)
          return 1;
        else
          return -1;
      });
      if (data.length) {
        this.usuarios = data;
        this.usuariosExiste = true;
      }

      this.cargoService.findAll().subscribe(data => {
        data.sort(function(a,b) { 
          if (a.nome >= b.nome)
            return 1;
          else
            return -1;
        });
        this.cargos = data;

        this.perfilService.findAll().subscribe(data => {
          data.sort(function(a,b) { 
            if (a.nome >= b.nome)
              return 1;
            else
              return -1;
          });
          this.perfis = data;
        })
      })
    })
  }

  onEditar(usuario: Usuario) {
    this.onEditting = true;
    this.usuarioEdicao = usuario;
    this.usuarioEdicao.sexo = this.usuarioEdicao.sexo == "F" ? "Feminino" : "Masculino";
    this.usuarioEdicao.dataNascimento = new Date(this.usuarioEdicao.dataNascimento);
  }

  onSubmit() {
    this.nomeValido = true;
    this.cpfValido = true;
    this.dataValida = true;
    this.cpfUnico = true;

    this.usuarioEdicao.sexo = this.usuarioEdicao.sexo == "Feminino" ? "F" : "M";

    this.selectCargo();
    this.selectPerfil();

    if (!this.validarForm(this.usuarioEdicao)) {
      return;
    }

    this.usuarioService.update(this.usuarioEdicao).subscribe(result => {
      this.onEditting = false;
      this.ngOnInit();
    })
  }

  selectCargo() {
    for (let cargo of this.cargos) {
      if (this.usuarioEdicao.cargo.nome == cargo.nome) {
        this.usuarioEdicao.cargo = cargo;
      }
    }
  }

  selectPerfil() {
    for (let perfil of this.perfis) {
      if (this.usuarioEdicao.perfil.nome == perfil.nome) {
        this.usuarioEdicao.perfil = perfil;
      }
    }
  }

  validarForm(user: Usuario) {
    if (!user.nome) { 
      this.nomeValido = false;
      return false;
    } 
    else if (!user.cpf) { 
      this.cpfValido = false;
      return false;
    } else if (!this.validaCPFUnico(user)) {
      return false;
    } else if (!user.dataNascimento.valueOf()) { 
      this.dataValida = false;
      return false;
    } 
    else { return true; }
  }

  validaCPFUnico(user: Usuario) {
    for (let u of this.usuarios) {
      if (u.nome != user.nome) {
        if (u.cpf == user.cpf) {
          this.cpfUnico = false;
          return false;
        }
      }
    }
    return true;
  }

}
