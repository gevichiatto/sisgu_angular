package br.com.gevichiatto.sisgu_angular.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.gevichiatto.sisgu_angular.entity.Perfis;

@Repository
public interface PerfisRepository extends JpaRepository<Perfis,Long>{
    
}
