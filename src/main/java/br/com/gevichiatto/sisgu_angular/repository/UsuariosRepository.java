package br.com.gevichiatto.sisgu_angular.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.gevichiatto.sisgu_angular.entity.Usuario;

@Repository
public interface UsuariosRepository extends JpaRepository<Usuario,Long>{
    
}
