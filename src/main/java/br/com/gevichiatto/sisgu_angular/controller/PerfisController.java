package br.com.gevichiatto.sisgu_angular.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
    public List<Perfis> getPergis() {
        return (List<Perfis>) perfisRepository.findAll();
    }

    @PostMapping("/perfis")
    void addPerfil(@RequestBody Perfis perfil) {
        perfisRepository.save(perfil);
    }
    
}
