package br.com.saveit.servico;

import br.com.saveit.dominio.Usuario;
import br.com.saveit.dto.TelaCadastroUsuario;
import br.com.saveit.dto.TelaLogin;
import br.com.saveit.repositorio.RepositorioUsuarios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class ServicoUsuarios {

    @Autowired
    private RepositorioUsuarios repositorioUsuarios;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public Usuario cadastrar(TelaCadastroUsuario telaCadastro) {
        Usuario usuario = new Usuario();
        usuario.setNome(telaCadastro.getNome());
        usuario.setDataNascimento(telaCadastro.getDataNascimento());
        usuario.setCpf(telaCadastro.getCpf());
        usuario.setEmail(telaCadastro.getEmail());
        usuario.setSenha(passwordEncoder.encode(telaCadastro.getSenha()));

        return repositorioUsuarios.save(usuario);
    }

    public Usuario autenticar(TelaLogin telaLogin) {
        Usuario usuario = repositorioUsuarios.findByEmail(telaLogin.getEmail())
                .orElseThrow(() -> new RuntimeException("E-mail não encontrado"));

        if (!passwordEncoder.matches(telaLogin.getSenha(), usuario.getSenha())) {
            throw new RuntimeException("Senha incorreta");
        }

        return usuario;
    }
}
