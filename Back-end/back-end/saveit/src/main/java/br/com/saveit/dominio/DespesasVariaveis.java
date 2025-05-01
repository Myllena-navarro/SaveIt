package br.com.saveit.dominio;


import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.PrimaryKeyJoinColumns;
import jakarta.persistence.Table;

@Entity
@Table(name = "despesas_variaveis")
@PrimaryKeyJoinColumn(name = "despesa_id")
public class DespesasVariaveis extends Despesas{

}
