package br.com.saveit.apresentacao;

import br.com.saveit.dominio.Usuario;
import br.com.saveit.dto.TelaCadastroUsuario;
import br.com.saveit.dto.TelaLogin;
import br.com.saveit.servico.ServicoUsuarios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private ServicoUsuarios servicoUsuarios;

    @PostMapping("/cadastrar")
    public Usuario cadastrar(@RequestBody TelaCadastroUsuario telaCadastro) {
        return servicoUsuarios.cadastrar(telaCadastro);
    }

    @PostMapping("/login")
    public Usuario login(@RequestBody TelaLogin telaLogin) {
        return servicoUsuarios.autenticar(telaLogin);
    }
}

