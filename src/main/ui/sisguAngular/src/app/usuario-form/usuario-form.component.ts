import { Component, OnInit } from '@angular/core';
import { Cargo } from '../classes/cargo';
import { Perfil } from '../classes/perfil';
import { Usuario } from '../classes/usuario';
import { CargoService } from '../services/cargo.service';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  cargos!: Cargo[];
  perfis!: Perfil[];

  nomeUsuario!: string;
  cpfUsuario!: string;
  dataNascimento!: Date;
  sexo!: string;
  nomeCargo!: string;
  nomePerfil!: string;

  cargoObj!: Cargo;
  perfilObj!: Perfil;

  usuario!: Usuario;

  constructor(private perfilService: PerfilService, private cargoService: CargoService) {
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
      this.cargoService.findAll().subscribe(data => {
        data.sort(function(a,b) { 
          if (a.nome >= b.nome)
            return 1;
          else
            return -1;
        });
        this.cargos = data;
      });
    });
  }

  onSubmit() {
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
    this.usuario.sexo = this.sexo;
    this.usuario.perfil = this.perfilObj;
    this.usuario.cargo = this.cargoObj;
    this.usuario.dataCadastro = new Date();

    console.log("Usuario: ", this.usuario);

  }


}
