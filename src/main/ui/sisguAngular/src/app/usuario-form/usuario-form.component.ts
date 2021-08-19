import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from '../classes/cargo';
import { Perfil } from '../classes/perfil';
import { Usuario } from '../classes/usuario';
import { CargoService } from '../services/cargo.service';
import { PerfilService } from '../services/perfil.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  cargos!: Cargo[];
  perfis!: Perfil[];
  listaUsuarios!: Usuario[];

  nomeUsuario!: string;
  cpfUsuario!: string;
  dataNascimento!: Date;
  sexo!: string;
  nomeCargo!: string;
  nomePerfil!: string;

  cargoObj!: Cargo;
  perfilObj!: Perfil;

  usuario!: Usuario;

  nomeValido: boolean = true;
  cpfValido: boolean = true;
  dataValida: boolean = true;
  cpfUnico: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private perfilService: PerfilService, private cargoService: CargoService, private usuarioService: UsuarioService) {
    this.usuario = new Usuario();
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
      this.nomePerfil = this.perfis[0].nome;

      this.cargoService.findAll().subscribe(data => {
        data.sort(function(a,b) { 
          if (a.nome >= b.nome)
            return 1;
          else
            return -1;
        });
        this.cargos = data;
        this.nomeCargo = this.cargos[0].nome;
        this.usuarioService.findAll().subscribe(data => {
          this.listaUsuarios = data;
        })
      });
    });
    this.sexo = "F";
  }

  onSubmit() {
    this.nomeValido = true;
    this.cpfValido = true;
    this.dataValida = true;
    this.cpfUnico = true;

    for (let p of this.perfis) {
      if (p.nome == this.nomePerfil) {
        this.perfilObj = p;
      }
    }

    for (let c of this.cargos) {
      if (c.nome == this.nomeCargo) {
        this.cargoObj = c;
      }
    }

    this.usuario.nome = this.nomeUsuario;
    this.usuario.cpf = this.cpfUsuario;
    this.usuario.dataNascimento = new Date(this.dataNascimento);
    this.usuario.sexo = this.sexo == "Feminino" ? "F" : "M";
    this.usuario.perfil = this.perfilObj;
    this.usuario.cargo = this.cargoObj;
    this.usuario.dataCadastro = new Date();

    if (!this.validarForm(this.usuario)) {
      return;
    } 
    
    this.usuarioService.save(this.usuario).subscribe(result => {});
  }

  validarForm(user: Usuario) {
    if (!user.nome) { 
      this.nomeValido = false;
      return false;
    } 
    else if (!user.cpf) { 
      this.cpfValido = false;
      return false;
    } else if (!this.validaCPFUnico(user.cpf)) {
      return false;
    } else if (!user.dataNascimento.valueOf()) { 
      this.dataValida = false;
      return false;
    } 
    else { return true; }
  }

  validaCPFUnico(cpf: string) {
    for (let u of this.listaUsuarios) {
      if (u.cpf == cpf) {
        this.cpfUnico = false;
        return false;
      }
    }
    return true;
  }
}
