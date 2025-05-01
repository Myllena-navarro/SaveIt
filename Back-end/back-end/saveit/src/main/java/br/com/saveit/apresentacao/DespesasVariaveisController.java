package br.com.saveit.apresentacao;

import br.com.saveit.dominio.Despesas;
import br.com.saveit.dominio.Usuario;
import br.com.saveit.dto.TelaDespesasVariaveis;
import br.com.saveit.servico.ServicoDespesasVariaveis;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping("/despesas-variaveis")

public class DespesasVariaveisController {
    @Autowired
    private ServicoDespesasVariaveis servicoDespesasVariaveis;

    @PostMapping("/cadastrar")
    public ResponseEntity<Despesas> cadastrarDespesaVariavel(
            @RequestBody TelaDespesasVariaveis telaDespesasVariaveis,
            @RequestAttribute("usuarioAutenticado") Usuario usuarioAutenticado) {
        try {
            Despesas despesaCadastrada = servicoDespesasVariaveis.cadastrarDespesaVariavel(telaDespesasVariaveis, usuarioAutenticado);
            return new ResponseEntity<>(despesaCadastrada, CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(BAD_REQUEST);
        }
    }

    @GetMapping("/periodicidades")
    public ResponseEntity<List<String>> listarPeriodicidades() {
        return ResponseEntity.ok(servicoDespesasVariaveis.listarPeriodicidadesPredefinidas());
    }
}

