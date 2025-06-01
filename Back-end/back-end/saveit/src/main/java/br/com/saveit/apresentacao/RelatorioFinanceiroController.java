package br.com.saveit.controller;

import br.com.saveit.dto.FiltroRelatorioDTO;
import br.com.saveit.dto.RelatorioCategoriaDTO;
import br.com.saveit.servico.ServicoRelatorioFinanceiro;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/relatorio")
public class RelatorioFinanceiroController {

    private final ServicoRelatorioFinanceiro servicoRelatorioFinanceiro;

    public RelatorioFinanceiroController(ServicoRelatorioFinanceiro servicoRelatorioFinanceiro) {
        this.servicoRelatorioFinanceiro = servicoRelatorioFinanceiro;
    }

    @PostMapping("/financeiro")
    public ResponseEntity<List<RelatorioCategoriaDTO>> gerarRelatorio(@RequestBody FiltroRelatorioDTO filtro) {
        List<RelatorioCategoriaDTO> relatorio = servicoRelatorioFinanceiro.gerarRelatorio(filtro);
        return ResponseEntity.ok(relatorio);
    }
}
