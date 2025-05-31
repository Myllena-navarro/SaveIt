package br.com.saveit.servico;

import br.com.saveit.dominio.Usuario;
import br.com.saveit.dto.TelaCadastroUsuario;
import br.com.saveit.dto.TelaLogin;
import br.com.saveit.repositorio.RepositorioUsuarios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class ServicoUsuarios {

    private final RepositorioUsuarios repositorioUsuario;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public ServicoUsuarios(RepositorioUsuarios repositorioUsuario, BCryptPasswordEncoder passwordEncoder) {
        this.repositorioUsuario = repositorioUsuario;
        this.passwordEncoder = passwordEncoder;
    }

    public Usuario cadastrar(TelaCadastroUsuario telaCadastro) {
        Usuario usuario = new Usuario();
        usuario.setNome(telaCadastro.getNome()); 
        usuario.setDataNascimento(telaCadastro.getDataNascimento()); 
        usuario.setCpf(telaCadastro.getCpf());
        usuario.setEmail(telaCadastro.getEmail());
        usuario.setSenha(passwordEncoder.encode(telaCadastro.getSenha()));
        return repositorioUsuario.save(usuario);
    }

    public Usuario buscarPorEmail(String email) {
        return repositorioUsuario.findByEmail(email).orElse(null);
    }

    public Usuario autenticar(TelaLogin telaLogin) {
        Usuario usuario = repositorioUsuario.findByEmail(telaLogin.getEmail())
                .orElseThrow(() -> new BadCredentialsException("E-mail não encontrado"));

        boolean senhaCorreta = passwordEncoder.matches(telaLogin.getSenha(), usuario.getSenha());

        if (!senhaCorreta) {
            throw new BadCredentialsException("Senha incorreta");
        }

        return usuario;
    }
}
