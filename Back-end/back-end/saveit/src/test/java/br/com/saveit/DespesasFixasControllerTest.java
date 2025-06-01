import br.com.saveit.apresentacao.DespesasFixasController;
import br.com.saveit.dominio.Categoria;
import br.com.saveit.dominio.DespesasFixas;
import br.com.saveit.dominio.Usuario;
import br.com.saveit.dto.TelaDespesasFixas;
import br.com.saveit.servico.ServicoDespesasFixas;
import br.com.saveit.servico.ServicoUsuarios;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class DespesasFixasControllerTest {

    @Mock
    private ServicoDespesasFixas servicoDespesasFixas;

    @Mock
    private ServicoUsuarios servicoUsuarios;

    @InjectMocks
    private DespesasFixasController controller;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCadastrarDespesaFixa() {
        TelaDespesasFixas dto = new TelaDespesasFixas();
        dto.setValor(new BigDecimal("200.00"));
        dto.setCategoria("Moradia");
        dto.setPeriodicidade("Mensal");

        Usuario usuario = new Usuario();
        usuario.setId(1L);
        usuario.setEmail("usuario@teste.com");

        Categoria categoria = new Categoria();
        categoria.setNome(dto.getCategoria());

        DespesasFixas despesaSalva = new DespesasFixas();
        despesaSalva.setValor(dto.getValor());
        despesaSalva.setCategoria(categoria);
        despesaSalva.setPeriodicidade(dto.getPeriodicidade());

        Authentication authentication = mock(Authentication.class);
        when(authentication.isAuthenticated()).thenReturn(true);
        when(authentication.getName()).thenReturn(usuario.getEmail());

        SecurityContext securityContext = mock(SecurityContext.class);
        when(securityContext.getAuthentication()).thenReturn(authentication);
        SecurityContextHolder.setContext(securityContext);

        when(servicoUsuarios.buscarPorEmail(usuario.getEmail())).thenReturn(usuario);
        when(servicoDespesasFixas.cadastrarDespesaFixa(dto, usuario)).thenReturn(despesaSalva);

        ResponseEntity<?> response = controller.cadastrarDespesaFixa(dto);

        assertEquals(201, response.getStatusCodeValue());
        assertTrue(response.getBody() instanceof DespesasFixas);
        DespesasFixas resposta = (DespesasFixas) response.getBody();
        assertEquals(dto.getValor(), resposta.getValor());
        assertEquals(dto.getCategoria(), resposta.getCategoria().getNome());
        assertEquals(dto.getPeriodicidade(), resposta.getPeriodicidade());
    }
}
