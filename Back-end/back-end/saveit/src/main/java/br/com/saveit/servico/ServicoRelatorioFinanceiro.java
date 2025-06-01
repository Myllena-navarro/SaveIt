package br.com.saveit.servico;

import br.com.saveit.dto.FiltroRelatorioDTO;
import br.com.saveit.dto.RelatorioCategoriaDTO;
import br.com.saveit.dominio.Categoria;
import br.com.saveit.repositorio.RepositorioCategoria;
import br.com.saveit.repositorio.RepositorioDespesas;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicoRelatorioFinanceiro {

    private final RepositorioDespesas repositorioDespesas;
    private final RepositorioCategoria repositorioCategoria;

    public ServicoRelatorioFinanceiro(RepositorioDespesas repositorioDespesas, RepositorioCategoria repositorioCategoria) {
        this.repositorioDespesas = repositorioDespesas;
        this.repositorioCategoria = repositorioCategoria;
    }

    public List<RelatorioCategoriaDTO> gerarRelatorio(FiltroRelatorioDTO filtro) {
        Categoria categoria = repositorioCategoria.findByNome(filtro.getCategoria())
            .orElseThrow(() -> new RuntimeException("Categoria não encontrada"));

        return repositorioDespesas.obterRelatorioPorCategoria(
            filtro.getMes(),
            filtro.getAno(),
            categoria
        );
    }
}
