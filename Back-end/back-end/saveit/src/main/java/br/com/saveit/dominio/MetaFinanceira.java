package br.com.saveit.dominio;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
public class MetaFinanceira {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    private String nome;
    private BigDecimal valorTotal;
    private BigDecimal valorAcumulado;
    private Integer prazo;
    private String unidadePrazo;

    // Getters e setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Usuario getUsuario() { return usuario; }
    public void setUsuario(Usuario usuario) { this.usuario = usuario; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public BigDecimal getValorTotal() { return valorTotal; }
    public void setValorTotal(BigDecimal valorTotal) { this.valorTotal = valorTotal; }

    public BigDecimal getValorAcumulado() { return valorAcumulado; }
    public void setValorAcumulado(BigDecimal valorAcumulado) { this.valorAcumulado = valorAcumulado; }

    public Integer getPrazo() { return prazo; }
    public void setPrazo(Integer prazo) { this.prazo = prazo; }

    public String getUnidadePrazo() { return unidadePrazo; }
    public void setUnidadePrazo(String unidadePrazo) { this.unidadePrazo = unidadePrazo; }
}
