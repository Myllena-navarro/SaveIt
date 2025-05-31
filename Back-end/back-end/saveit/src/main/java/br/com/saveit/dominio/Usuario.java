package br.com.saveit.dominio;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String nome;

    @Column(name = "data_nascimento", nullable = false)
    private LocalDate dataNascimento;

    @Column(nullable = true, unique = true, length = 11)
    private String cpf;

    @Column(nullable = false, unique = true, length = 50)
    private String email;

    @Column(nullable = false, length = 60)
    private String senha;

    public Long getId() { 
        return id; 
    }
    public void setId(Long id) {
         this.id = id;
    }
    public String getNome() { 
        return nome;
    }
    public void setNome(String nome) { 
        this.nome = nome; 
    }
    public LocalDate getDataNascimento() { 
        return dataNascimento; 
    }
    public void setDataNascimento(LocalDate dataNascimento) { 
        this.dataNascimento = dataNascimento; 
    }
    public String getCpf() { 
        return cpf; 
    }
    public void setCpf(String cpf) { 
        this.cpf = cpf; 
    }
    public String getEmail() { 
        return email; 
    }
    public void setEmail(String email) { 
        this.email = email; 
    }
    public String getSenha() { 
        return senha; 
    }
    public void setSenha(String senha) { 
        this.senha = senha; 
    }
}
