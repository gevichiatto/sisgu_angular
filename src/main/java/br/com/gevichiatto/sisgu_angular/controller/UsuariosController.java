package br.com.gevichiatto.sisgu_angular.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.gevichiatto.sisgu_angular.entity.Usuario;
import br.com.gevichiatto.sisgu_angular.repository.UsuariosRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UsuariosController {
    
    @Autowired
    private UsuariosRepository usuariosRepository;
    
    @GetMapping("/usuarios")
    public List<Usuario> getUsuarios() {
        return (List<Usuario>) usuariosRepository.findAll();
    }

    @PostMapping("/usuarios")
    void addUsuario(@RequestBody Usuario usuario) {
        usuariosRepository.save(usuario);
    }

    @PutMapping("/usuarios")
    void updateUsuairo(@RequestBody Usuario usuario) {
        usuariosRepository.save(usuario);
    }
}
