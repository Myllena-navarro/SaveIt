package br.com.saveit.apresentacao;

import br.com.saveit.dominio.Despesas;
import br.com.saveit.dominio.Usuario;
import br.com.saveit.dto.TelaDespesasFixas;
import br.com.saveit.servico.ServicoDespesasFixas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/despesas-fixas")
public class DespesasFixasController {
    @Autowired
    private ServicoDespesasFixas servicoDespesasFixas;

    @PostMapping("/cadastrar")
    public ResponseEntity<Despesas> cadastrarDespesaFixa(
            @RequestBody TelaDespesasFixas telaDespesasFixas,
            @RequestAttribute("usuarioAutenticado") Usuario usuarioAutenticado) {
        try {
            Despesas despesaCadastrada = servicoDespesasFixas.cadastrarDespesaFixa(telaDespesasFixas, usuarioAutenticado);
            return new ResponseEntity<>(despesaCadastrada, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/categorias")
    public ResponseEntity<List<String>> listarCategorias() {
        return ResponseEntity.ok(servicoDespesasFixas.listarCategoriasPredefinidas());
    }

    @GetMapping("/periodicidades")
    public ResponseEntity<List<String>> listarPeriodicidades() {
        return ResponseEntity.ok(servicoDespesasFixas.listarPeriodicidadesPredefinidas());
    }
}
