package br.com.gevichiatto.sisgu_angular.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import br.com.gevichiatto.sisgu_angular.model.Sexo;

@Entity
public class Usuario extends Pessoa{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nome;
    private String cpf;
    private Date dataNascimento;
   
    @Enumerated(EnumType.STRING)
    private Sexo sexo;

    @ManyToOne
    @JoinColumn(name = "idCargo", nullable = false)
    private Cargos cargo;

    @ManyToOne
    @JoinColumn(name = "idPerfil", nullable = true)
    private Perfis perfil;

    private Date dataCadastro;

    @Override
    public long getId() {
        return this.id;
    }

    @Override
    public String getNome() {
        return this.nome;
    }

    @Override
    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override
    public String getCpf() {
        return this.cpf;
    }

    @Override
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    @Override
    public Date getDataNascimento() {
        return this.dataNascimento;
    }

    @Override
    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    @Override
    public Sexo getSexo() {
        return this.sexo;
    }

    @Override
    public void setSexo(Sexo sexo) {
        this.sexo = sexo;
    }

    public Date getDataCadastro() {
        return this.dataCadastro;
    }

    public void setDataCadastro(Date dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    public Cargos getCargo() {
        return this.cargo;
    }

    public void setCargo(Cargos cargo) {
        this.cargo = cargo;
    }

    public Perfis getPerfil() {
        return this.perfil;
    }

    public void setPerfil(Perfis perfil) {
        this.perfil = perfil;
    }
    
}
