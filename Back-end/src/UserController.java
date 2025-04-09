package com.saveit.controller;

import com.saveit.model.User;
import com.saveit.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/cadastro")
    public User cadastrarUsuario(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping
    public List<User> listarUsuarios() {
        return userRepository.findAll();
    }
}
