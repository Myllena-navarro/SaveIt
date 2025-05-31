package br.com.saveit.apresentacao;

import br.com.saveit.dominio.Usuario;
import br.com.saveit.dto.TelaCadastroUsuario;
import br.com.saveit.dto.TelaLogin;
import br.com.saveit.servico.ServicoUsuarios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private final ServicoUsuarios servicoUsuarios;
    private final AuthenticationManager authenticationManager;

    @Autowired
    public UsuarioController(ServicoUsuarios servicoUsuarios, AuthenticationManager authenticationManager) {
        this.servicoUsuarios = servicoUsuarios;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<Usuario> cadastrar(@RequestBody TelaCadastroUsuario telaCadastro) {
        Usuario novoUsuario = servicoUsuarios.cadastrar(telaCadastro);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoUsuario);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody TelaLogin telaLogin,
                                        HttpServletRequest request) {
        try {
            UsernamePasswordAuthenticationToken authToken =
                    new UsernamePasswordAuthenticationToken(telaLogin.getEmail(), telaLogin.getSenha());

            Authentication authentication = authenticationManager.authenticate(authToken);

            SecurityContextHolder.getContext().setAuthentication(authentication);

            HttpSession session = request.getSession(true);
            session.setAttribute("SPRING_SECURITY_CONTEXT", SecurityContextHolder.getContext());

            return ResponseEntity.ok("Login realizado com sucesso!");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Falha no login: " + e.getMessage());
        }
    }
}