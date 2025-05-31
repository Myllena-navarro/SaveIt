package br.com.saveit.dto;

import java.math.BigDecimal;

public class TelaCadastroMetaFinanceira {
    private String nome;
    private BigDecimal valorTotal;
    private Integer prazo;
    private String unidadePrazo; 

    
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public BigDecimal getValorTotal() { return valorTotal; }
    public void setValorTotal(BigDecimal valorTotal) { this.valorTotal = valorTotal; }

    public Integer getPrazo() { return prazo; }
    public void setPrazo(Integer prazo) { this.prazo = prazo; }

    public String getUnidadePrazo() { return unidadePrazo; }
    public void setUnidadePrazo(String unidadePrazo) { this.unidadePrazo = unidadePrazo; }
}
