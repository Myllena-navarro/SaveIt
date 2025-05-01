package br.com.saveit.servico;

import br.com.saveit.dominio.Categoria;
import br.com.saveit.dominio.Despesas;
import br.com.saveit.dominio.DespesasVariaveis;
import br.com.saveit.dominio.Usuario;
import br.com.saveit.dto.TelaDespesasVariaveis;
import br.com.saveit.repositorio.RepositorioCategoria;
import br.com.saveit.repositorio.RepositorioDespesas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.regex.Pattern;

@Service
public class ServicoDespesasVariaveis {

    @Autowired
    private RepositorioDespesas repositorioDespesas;

    @Autowired
    private RepositorioCategoria repositorioCategoria;

    private static final List<String> PERIODICIDADES_PREDEFINIDAS = Collections.unmodifiableList(Arrays.asList("Diário", "Mensal", "Semanal", "Anual"));

    public Despesas cadastrarDespesaVariavel(TelaDespesasVariaveis telaDespesasVariaveis, Usuario usuario) {

        if (telaDespesasVariaveis.getValor() == null || telaDespesasVariaveis.getValor().compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("O valor da despesa deve ser maior que zero.");
        }

        if (telaDespesasVariaveis.getCategoria() == null || telaDespesasVariaveis.getCategoria().trim().isEmpty() || !Pattern.matches("^[a-zA-ZÀ-ú ]+$", telaDespesasVariaveis.getCategoria()) || telaDespesasVariaveis.getCategoria().trim().length() > 100) {
            throw new IllegalArgumentException("A categoria deve conter apenas letras e ter até 100 caracteres.");
        }

        Categoria categoria = repositorioCategoria.findByNome(telaDespesasVariaveis.getCategoria()).get();
        if (categoria == null) {
            categoria = new Categoria();
            categoria.setNome(telaDespesasVariaveis.getCategoria().trim());
            repositorioCategoria.save(categoria);
        }

        if (telaDespesasVariaveis.getPeriodicidade() == null || telaDespesasVariaveis.getPeriodicidade().trim().isEmpty() || !PERIODICIDADES_PREDEFINIDAS.contains(telaDespesasVariaveis.getPeriodicidade())) {
            throw new IllegalArgumentException("Periodicidade inválida. As opções são: " + String.join(", ", PERIODICIDADES_PREDEFINIDAS));
        }

        DespesasVariaveis despesas = new DespesasVariaveis();
        despesas.setValor(telaDespesasVariaveis.getValor());
        despesas.setPeriodicidade(telaDespesasVariaveis.getPeriodicidade());
        despesas.setCategoria(categoria);
        despesas.setUsuario(usuario);

        return repositorioDespesas.save(despesas);
    }

    public List<String> listarPeriodicidadesPredefinidas() {
        return PERIODICIDADES_PREDEFINIDAS;
    }

}
