package br.com.saveit;

import br.com.saveit.dominio.Usuario;
import br.com.saveit.dto.TelaCadastroUsuario;
import br.com.saveit.dto.TelaLogin;
import br.com.saveit.repositorio.RepositorioUsuarios;
import br.com.saveit.servico.ServicoUsuarios;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.time.LocalDate;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ServicoUsuariosTest {

    @InjectMocks
    private ServicoUsuarios servicoUsuarios;

    @Mock
    private RepositorioUsuarios repositorioUsuarios;

    @Mock
    private BCryptPasswordEncoder passwordEncoder;

    @Test
    void cadastrar_usuarioValido_deveSalvarUsuarioECriptografarSenha() {

        TelaCadastroUsuario telaCadastro = new TelaCadastroUsuario();
        telaCadastro.setNome("Teste Usuario");
        telaCadastro.setDataNascimento(LocalDate.of(2000, 1, 1));
        telaCadastro.setCpf("12345678901");
        telaCadastro.setEmail("teste@example.com");
        telaCadastro.setSenha("senha123");

        String senhaCriptografada = "senhaCriptografada";
        Usuario usuarioSalvo = new Usuario();
        usuarioSalvo.setId(1L);
        usuarioSalvo.setNome(telaCadastro.getNome());
        usuarioSalvo.setDataNascimento(telaCadastro.getDataNascimento());
        usuarioSalvo.setCpf(telaCadastro.getCpf());
        usuarioSalvo.setEmail(telaCadastro.getEmail());
        usuarioSalvo.setSenha(senhaCriptografada);

        when(passwordEncoder.encode(telaCadastro.getSenha())).thenReturn(senhaCriptografada);
        when(repositorioUsuarios.save(any(Usuario.class))).thenReturn(usuarioSalvo);

        Usuario resultado = servicoUsuarios.cadastrar(telaCadastro);

        
        assertNotNull(resultado);
        assertEquals(usuarioSalvo.getId(), resultado.getId());
        assertEquals(telaCadastro.getNome(), resultado.getNome());
        assertEquals(senhaCriptografada, resultado.getSenha());
        verify(passwordEncoder, times(1)).encode(telaCadastro.getSenha());
        verify(repositorioUsuarios, times(1)).save(any(Usuario.class));
    }

    @Test
    void autenticar_usuarioExistenteSenhaCorreta_deveRetornarUsuario() {
        
        TelaLogin telaLogin = new TelaLogin();
        telaLogin.setEmail("teste@example.com");
        telaLogin.setSenha("senha123");

        Usuario usuarioBanco = new Usuario();
        usuarioBanco.setId(1L);
        usuarioBanco.setEmail(telaLogin.getEmail());
        usuarioBanco.setSenha(passwordEncoder.encode("senha123")); // Senha já criptografada no banco

               when(repositorioUsuarios.findByEmail(telaLogin.getEmail())).thenReturn(Optional.of(usuarioBanco));
        when(passwordEncoder.matches(telaLogin.getSenha(), usuarioBanco.getSenha())).thenReturn(true);

        Usuario resultado = servicoUsuarios.autenticar(telaLogin);

        assertNotNull(resultado);
        assertEquals(usuarioBanco.getId(), resultado.getId());
        assertEquals(usuarioBanco.getEmail(), resultado.getEmail());
        verify(repositorioUsuarios, times(1)).findByEmail(telaLogin.getEmail());
        verify(passwordEncoder, times(1)).matches(telaLogin.getSenha(), usuarioBanco.getSenha());
    }

    @Test
    void _usuarioNaoExistente_deveLancarExcecao() {
        
        TelaLogin telaLogin = new TelaLogin();
        telaLogin.setEmail("naoexiste@example.com");
        telaLogin.setSenha("senha123");

        when(repositorioUsuarios.findByEmail(telaLogin.getEmail())).thenReturn(Optional.empty());

        RuntimeException exception = assertThrows(RuntimeException.class, () -> servicoUsuarios.autenticar(telaLogin));
        assertEquals("E-mail não encontrado", exception.getMessage());
        verify(repositorioUsuarios, times(1)).findByEmail(telaLogin.getEmail());
        verify(passwordEncoder, never()).matches(anyString(), anyString());
    }

    @Test
    void autenticar_usuarioExistenteSenhaIncorreta_deveLancarExcecao() {

        TelaLogin telaLogin = new TelaLogin();
        telaLogin.setEmail("teste@example.com");
        telaLogin.setSenha("senhaerrada");

        Usuario usuarioBanco = new Usuario();
        usuarioBanco.setId(1L);
        usuarioBanco.setEmail(telaLogin.getEmail());
        usuarioBanco.setSenha(passwordEncoder.encode("senha123"));

        when(repositorioUsuarios.findByEmail(telaLogin.getEmail())).thenReturn(Optional.of(usuarioBanco));
        when(passwordEncoder.matches(telaLogin.getSenha(), usuarioBanco.getSenha())).thenReturn(false);

        RuntimeException exception = assertThrows(RuntimeException.class, () -> servicoUsuarios.autenticar(telaLogin));
        assertEquals("Senha incorreta", exception.getMessage());
 
       verify(repositorioUsuarios, times(1)).findByEmail(telaLogin.getEmail());
        verify(passwordEncoder, times(1)).matches(telaLogin.getSenha(), usuarioBanco.getSenha());
    }
}