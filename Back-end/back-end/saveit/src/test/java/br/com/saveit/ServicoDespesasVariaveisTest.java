package br.com.saveit;

import br.com.saveit.dominio.Categoria;
import br.com.saveit.dominio.Despesas;
import br.com.saveit.dominio.DespesasVariaveis;
import br.com.saveit.dominio.Usuario;
import br.com.saveit.dto.TelaDespesasVariaveis;
import br.com.saveit.dto.TelaDespesasVariaveis;
import br.com.saveit.repositorio.RepositorioCategoria;
import br.com.saveit.repositorio.RepositorioDespesas;
import br.com.saveit.servico.ServicoDespesasVariaveis;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class ServicoDespesasVariaveisTest {

    @Mock
    private RepositorioDespesas despesaRepositorio;

    @Mock
    private RepositorioCategoria categoriaRepositorio;

    @InjectMocks
    private ServicoDespesasVariaveis servicoDespesasVariaveis;

    private Usuario usuario;
    private TelaDespesasVariaveis telaDespesasVariaveis;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        usuario = new Usuario();
        usuario.setId(1L);
        telaDespesasVariaveis = new TelaDespesasVariaveis();
        telaDespesasVariaveis.setValor(new BigDecimal("50.00"));
        telaDespesasVariaveis.setCategoria("Mercado");
        telaDespesasVariaveis.setPeriodicidade("Semanal");
    }

    @Test
    void cadastrarDespesasVariaveis_ComDadosValidos_DeveSalvarDespesaECategoria() {
        Categoria categoriaExistente = new Categoria();
        categoriaExistente.setId(1L);
        categoriaExistente.setNome("Mercado");

        when(categoriaRepositorio.findByNome("Mercado")).thenReturn(Optional.of(categoriaExistente));
        when(despesaRepositorio.save(any(DespesasVariaveis.class))).thenReturn(new DespesasVariaveis());

        Despesas despesaCadastrada = servicoDespesasVariaveis.cadastrarDespesaVariavel(telaDespesasVariaveis, usuario);

        assertNotNull(despesaCadastrada);
        verify(categoriaRepositorio, times(1)).findByNome("Mercado");
        verify(categoriaRepositorio, never()).save(any(Categoria.class));
        verify(despesaRepositorio, times(1)).save(any(DespesasVariaveis.class));
    }

    @Test
    void cadastrarDespesasVariaveis_ComNovaCategoria_DeveSalvarDespesaECategoria() {
        when(categoriaRepositorio.findByNome("Supermercado")).thenReturn(Optional.empty());
        Categoria novaCategoria = new Categoria();
        novaCategoria.setId(2L);
        novaCategoria.setNome("Supermercado");
        when(categoriaRepositorio.save(any(Categoria.class))).thenReturn(novaCategoria);
        telaDespesasVariaveis.setCategoria("Supermercado");
        when(despesaRepositorio.save(any(DespesasVariaveis.class))).thenReturn(new DespesasVariaveis());

        Despesas despesaCadastrada = servicoDespesasVariaveis.cadastrarDespesaVariavel(telaDespesasVariaveis, usuario);

        assertNotNull(despesaCadastrada);
        verify(categoriaRepositorio, times(1)).findByNome("Supermercado");
        verify(categoriaRepositorio, times(1)).save(any(Categoria.class));
        verify(despesaRepositorio, times(1)).save(any(DespesasVariaveis.class));
    }

    @Test
    void cadastrarDespesasVariaveis_ComValorZero_DeveLancarExcecao() {
        telaDespesasVariaveis.setValor(BigDecimal.ZERO);

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            servicoDespesasVariaveis.cadastrarDespesaVariavel(telaDespesasVariaveis, usuario);
        });
        assertEquals("O valor da despesa deve ser maior que zero.", exception.getMessage());
        verify(categoriaRepositorio, never()).findByNome(anyString());
        verify(categoriaRepositorio, never()).save(any(Categoria.class));
        verify(despesaRepositorio, never()).save(any(Despesas.class));
    }

    @Test
    void cadastrarDespesasVariaveis_ComValorNegativo_DeveLancarExcecao() {
        telaDespesasVariaveis.setValor(new BigDecimal("-20.00"));

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            servicoDespesasVariaveis.cadastrarDespesaVariavel(telaDespesasVariaveis, usuario);
        });
        assertEquals("O valor da despesa deve ser maior que zero.", exception.getMessage());
        verify(categoriaRepositorio, never()).findByNome(anyString());
        verify(categoriaRepositorio, never()).save(any(Categoria.class));
        verify(despesaRepositorio, never()).save(any(Despesas.class));
    }

    @Test
    void cadastrarDespesasVariaveis_ComCategoriaInvalida_DeveLancarExcecao_NomeVazio() {
        telaDespesasVariaveis.setCategoria("");

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            servicoDespesasVariaveis.cadastrarDespesaVariavel(telaDespesasVariaveis, usuario);
        });
        assertEquals("A categoria deve conter apenas letras e ter até 100 caracteres.", exception.getMessage());
        verify(categoriaRepositorio, never()).findByNome(anyString());
        verify(categoriaRepositorio, never()).save(any(Categoria.class));
        verify(despesaRepositorio, never()).save(any(Despesas.class));
    }

    @Test
    void cadastrarDespesasVariaveis_ComCategoriaInvalida_DeveLancarExcecao_CaracteresInvalidos() {
        telaDespesasVariaveis.setCategoria("Supermercado123!");

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            servicoDespesasVariaveis.cadastrarDespesaVariavel(telaDespesasVariaveis, usuario);
        });
        assertEquals("A categoria deve conter apenas letras e ter até 100 caracteres.", exception.getMessage());
        verify(categoriaRepositorio, never()).findByNome(anyString());
        verify(categoriaRepositorio, never()).save(any(Categoria.class));
        verify(despesaRepositorio, never()).save(any(Despesas.class));
    }

    @Test
    void cadastrarDespesasVariaveis_ComCategoriaInvalida_DeveLancarExcecao_NomeMuitoLongo() {
        telaDespesasVariaveis.setCategoria("Nome de Categoria Muito Longooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            servicoDespesasVariaveis.cadastrarDespesaVariavel(telaDespesasVariaveis, usuario);
        });
        assertEquals("A categoria deve conter apenas letras e ter até 100 caracteres.", exception.getMessage());
        verify(categoriaRepositorio, never()).findByNome(anyString());
        verify(categoriaRepositorio, never()).save(any(Categoria.class));
        verify(despesaRepositorio, never()).save(any(Despesas.class));
    }

    @Test
    void cadastrarDespesasVariaveis_ComPeriodicidadeInvalida_DeveLancarExcecao() {
        telaDespesasVariaveis.setPeriodicidade("Anualmento");

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            servicoDespesasVariaveis.cadastrarDespesaVariavel(telaDespesasVariaveis, usuario);
        });
        assertEquals("Periodicidade inválida. As opções são: Diário, Mensal, Semanal, Anual", exception.getMessage());
        verify(categoriaRepositorio, never()).findByNome(anyString());
        verify(categoriaRepositorio, never()).save(any(Categoria.class));
        verify(despesaRepositorio, never()).save(any(Despesas.class));
    }

    @Test
    void listarPeriodicidadesPredefinidas_DeveRetornarListaCorreta() {
        List<String> periodicidades = servicoDespesasVariaveis.listarPeriodicidadesPredefinidas();

        assertEquals(List.of("Diário", "Mensal", "Semanal", "Anual"), periodicidades);
    }
}
