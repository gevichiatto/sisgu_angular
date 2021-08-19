import { Cargo } from "./cargo";
import { Perfil } from "./perfil";

export class Usuario {
    id!: string;
    cpf!: string;
    dataNascimento!: Date;
    nome!: string;
    sexo!: string;
    dataCadastro!: Date;
    cargo!: Cargo;
    perfil!: Perfil;
}
