package br.com.saveit.servico;

import br.com.saveit.dominio.MetaFinanceira;
import br.com.saveit.dominio.Usuario;
import br.com.saveit.dto.TelaCadastroMetaFinanceira;
import br.com.saveit.repositorio.RepositorioMetasFinanceiras;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;

@Service
public class ServicoMetasFinanceiras {

    @Autowired
    private RepositorioMetasFinanceiras repositorioMetasFinanceiras;

    public MetaFinanceira criarMetaFinanceira(TelaCadastroMetaFinanceira dto, Usuario usuario) {
        if (dto.getNome() == null || dto.getNome().isBlank()) {
            throw new IllegalArgumentException("Nome da meta obrigatório");
        }
        if (dto.getValorTotal() == null || dto.getValorTotal().compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Valor total deve ser positivo");
        }
        if (dto.getPrazo() == null || dto.getPrazo() <= 0) {
            throw new IllegalArgumentException("Prazo deve ser maior que zero");
        }
        if (dto.getUnidadePrazo() == null || dto.getUnidadePrazo().isBlank()) {
            throw new IllegalArgumentException("Unidade do prazo é obrigatória");
        }

        MetaFinanceira meta = new MetaFinanceira();
        meta.setUsuario(usuario);
        meta.setNome(dto.getNome());
        meta.setValorTotal(dto.getValorTotal());
        meta.setPrazo(dto.getPrazo());
        meta.setUnidadePrazo(dto.getUnidadePrazo());
        meta.setValorAcumulado(BigDecimal.ZERO);

        return repositorioMetasFinanceiras.save(meta);
    }

    public BigDecimal calcularAporteMensal(MetaFinanceira meta) {
        int meses;
        if ("anos".equalsIgnoreCase(meta.getUnidadePrazo())) {
            meses = meta.getPrazo() * 12;
        } else if ("meses".equalsIgnoreCase(meta.getUnidadePrazo())) {
            meses = meta.getPrazo();
        } else {
            throw new IllegalArgumentException("Unidade de prazo inválida. Use 'meses' ou 'anos'.");
        }

        BigDecimal valorRestante = meta.getValorTotal().subtract(meta.getValorAcumulado());
        if (valorRestante.compareTo(BigDecimal.ZERO) <= 0) {
            return BigDecimal.ZERO;
        }

        return valorRestante.divide(BigDecimal.valueOf(meses), 2, RoundingMode.HALF_UP);
    }

    public BigDecimal calcularValorRestante(MetaFinanceira meta) {
        return meta.getValorTotal().subtract(meta.getValorAcumulado());
    }

    public List<MetaFinanceira> buscarMetasPorUsuario(Long usuarioId) {
        return repositorioMetasFinanceiras.findByUsuarioId(usuarioId);
    }
}
