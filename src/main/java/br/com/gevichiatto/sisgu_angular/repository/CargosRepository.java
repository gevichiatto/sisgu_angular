package br.com.gevichiatto.sisgu_angular.repository;

import br.com.gevichiatto.sisgu_angular.entity.Cargos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CargosRepository extends JpaRepository<Cargos, Long> {

}