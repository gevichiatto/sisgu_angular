import { Component, OnInit } from '@angular/core';
import { Usuario } from '../classes/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios: Usuario[] | undefined;
  onEditting: boolean = false;
  usuarioEdicao!: Usuario;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarios = [];
  }

}
