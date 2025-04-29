package br.com.saveit.util;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Mensagens {

    @Value("${mensagem.email.nao.encontrado}")
    private String emailNaoEncontrado;

    @Value("${mensagem.senha.incorreta}")
    private String senhaIncorreta;

    @Value("${mensagem.usuario.cadastrado.sucesso}")
    private String usuarioCadastradoSucesso;

    @Value("${mensagem.usuario.email.existente}")
    private String usuarioEmailExistente;

    public String getEmailNaoEncontrado() {
        return emailNaoEncontrado;
    }

    public String getSenhaIncorreta() {
        return senhaIncorreta;
    }

    public String getUsuarioCadastradoSucesso() {
        return usuarioCadastradoSucesso;
    }

    public String getUsuarioEmailExistente() {
        return usuarioEmailExistente;
    }
}


