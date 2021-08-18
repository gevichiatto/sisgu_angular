package br.com.gevichiatto.sisgu_angular.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import br.com.gevichiatto.sisgu_angular.model.Sexo;

@Entity
public abstract class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    String nome;
    String cpf;
    Date dataNascimento;

   
    @Enumerated(EnumType.STRING)
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
