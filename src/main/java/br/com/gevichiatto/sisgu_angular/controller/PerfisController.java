package br.com.gevichiatto.sisgu_angular.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.gevichiatto.sisgu_angular.entity.Perfis;
import br.com.gevichiatto.sisgu_angular.repository.PerfisRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PerfisController {

    @Autowired
    private PerfisRepository perfisRepository;

    @GetMapping("/perfis")
    public List<Perfis> getPerfis() {
        return (List<Perfis>) perfisRepository.findAll();
    }

    @PostMapping("/perfis")
    void addPerfil(@RequestBody Perfis perfil) {
        perfisRepository.save(perfil);
    }

    @PutMapping("/perfis")
    void updatePerfil(@RequestBody Perfis perfil) {
        perfisRepository.save(perfil);
    }

    @DeleteMapping("/perfis/{id}")
    void deletePerfil(@PathVariable("id") long id) {
        perfisRepository.deleteById(id);
    }
    
}
