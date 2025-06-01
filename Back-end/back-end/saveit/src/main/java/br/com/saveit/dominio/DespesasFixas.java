package br.com.saveit.dominio;

import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name = "despesas_fixas")
@PrimaryKeyJoinColumn(name = "despesa_id")
public class DespesasFixas extends Despesas{

}
