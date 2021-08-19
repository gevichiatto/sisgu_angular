package br.com.gevichiatto.sisgu_angular.entity;

import java.util.Date;

import br.com.gevichiatto.sisgu_angular.model.Sexo;

public abstract class Pessoa {

    long id;
    String nome;
    String cpf;
    Date dataNascimento;
    Sexo sexo;

    abstract long getId();

    abstract String getNome();

    abstract void setNome(String nome);

    abstract String getCpf();

    abstract void setCpf(String cpf);

    abstract Date getDataNascimento();

    abstract void setDataNascimento(Date dataNascimento);

    abstract Sexo getSexo();

    abstract void setSexo(Sexo sexo);
}
