package br.com.gevichiatto.sisgu_angular.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.gevichiatto.sisgu_angular.repository.CargosRepository;
import br.com.gevichiatto.sisgu_angular.entity.Cargos;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CargosController {

    @Autowired
    private CargosRepository cargosRepository;

    @GetMapping("/cargos")
    public List<Cargos> getCargos() {
        return (List<Cargos>) cargosRepository.findAll();
    }

    @PostMapping("/cargos")
    void addCargo(@RequestBody Cargos cargo) {
        cargosRepository.save(cargo);
    }

    @PutMapping("/cargos")
    void updateCargo(@RequestBody Cargos cargo) {
        cargosRepository.save(cargo);
    }
    
}
