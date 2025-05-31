package br.com.saveit.apresentacao;

import br.com.saveit.dominio.MetaFinanceira;
import br.com.saveit.dominio.Usuario;
import br.com.saveit.dto.TelaCadastroMetaFinanceira;
import br.com.saveit.servico.ServicoMetasFinanceiras;
import br.com.saveit.servico.ServicoUsuarios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/metas-financeiras")
public class MetaFinanceiraController {

    @Autowired
    private ServicoMetasFinanceiras servicoMetasFinanceiras;

    @Autowired
    private ServicoUsuarios servicoUsuarios;

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrarMetaFinanceira(@RequestBody TelaCadastroMetaFinanceira dto) {
        try {
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            if (auth == null || !auth.isAuthenticated() || "anonymousUser".equals(auth.getPrincipal())) {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }

            String email = auth.getName();
            Usuario usuario = servicoUsuarios.buscarPorEmail(email);
            if (usuario == null) {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }

            MetaFinanceira meta = servicoMetasFinanceiras.criarMetaFinanceira(dto, usuario);
            BigDecimal aporteMensal = servicoMetasFinanceiras.calcularAporteMensal(meta);

            return ResponseEntity.status(HttpStatus.CREATED).body(new Object() {
                public final MetaFinanceira metaFinanceira = meta;
                public final BigDecimal aporteMensalNecessario = aporteMensal;
            });

        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/listar")
    public ResponseEntity<?> listarMetasDoUsuario() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !auth.isAuthenticated() || "anonymousUser".equals(auth.getPrincipal())) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        String email = auth.getName();
        Usuario usuario = servicoUsuarios.buscarPorEmail(email);
        if (usuario == null) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        List<MetaFinanceira> metas = servicoMetasFinanceiras.buscarMetasPorUsuario(usuario.getId());

        var response = metas.stream().map(meta -> new Object() {
            public final MetaFinanceira metaFinanceira = meta;
            public final BigDecimal aporteMensalNecessario = servicoMetasFinanceiras.calcularAporteMensal(meta);
            public final BigDecimal valorRestante = servicoMetasFinanceiras.calcularValorRestante(meta);
        }).collect(Collectors.toList());

        return ResponseEntity.ok(response);
    }
}
