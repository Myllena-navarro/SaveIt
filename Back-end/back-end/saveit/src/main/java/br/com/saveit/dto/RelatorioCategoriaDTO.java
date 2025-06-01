package br.com.saveit.dto;

import br.com.saveit.dominio.Categoria;
import java.math.BigDecimal;

public class RelatorioCategoriaDTO {

    private Categoria categoria;
    private BigDecimal total;

    public RelatorioCategoriaDTO(Categoria categoria, BigDecimal total) {
        this.categoria = categoria;
        this.total = total;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public BigDecimal getTotal() {
        return total;
    }

    public void setTotal(BigDecimal total) {
        this.total = total;
    }
}
