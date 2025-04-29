package br.com.saveit.dto;

import java.time.LocalDate;

public class TelaCadastroUsuario {

    private String nome;
    private LocalDate dataNascimento;
    private String cpf;
    private String email;
    private String senha;

    public String getNome() {
        return nome;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public String getCpf() {
        return cpf;
    }

    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }

}