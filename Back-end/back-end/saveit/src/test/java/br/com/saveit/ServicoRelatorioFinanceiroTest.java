import br.com.saveit.dominio.Categoria;
import br.com.saveit.dto.FiltroRelatorioDTO;
import br.com.saveit.dto.RelatorioCategoriaDTO;
import br.com.saveit.repositorio.RepositorioDespesas;
import br.com.saveit.repositorio.RepositorioCategoria;
import br.com.saveit.servico.ServicoRelatorioFinanceiro;
import org.junit.jupiter.api.Test;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ServicoRelatorioFinanceiroTest {

    @Test
    public void testGerarRelatorio() {
        RepositorioDespesas repositorioDespesasMock = mock(RepositorioDespesas.class);
        RepositorioCategoria repositorioCategoriaMock = mock(RepositorioCategoria.class);

        ServicoRelatorioFinanceiro servico = new ServicoRelatorioFinanceiro(repositorioDespesasMock, repositorioCategoriaMock);

        FiltroRelatorioDTO filtro = new FiltroRelatorioDTO();
        filtro.setMes(5);
        filtro.setAno(2025);
        filtro.setCategoria("Alimentação");

        Categoria categoria = new Categoria();
        categoria.setNome("Alimentação");

        when(repositorioCategoriaMock.findByNome("Alimentação")).thenReturn(Optional.of(categoria));
        when(repositorioDespesasMock.obterRelatorioPorCategoria(5, 2025, categoria))
            .thenReturn(Collections.emptyList());

        List<RelatorioCategoriaDTO> resultado = servico.gerarRelatorio(filtro);

        assertEquals(0, resultado.size());

        verify(repositorioCategoriaMock).findByNome("Alimentação");
        verify(repositorioDespesasMock).obterRelatorioPorCategoria(5, 2025, categoria);
    }
}
