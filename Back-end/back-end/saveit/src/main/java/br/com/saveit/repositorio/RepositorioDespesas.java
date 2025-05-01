package br.com.saveit.repositorio;

import br.com.saveit.dominio.Categoria;
import br.com.saveit.dominio.Despesas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositorioDespesas extends JpaRepository<Despesas, Long> {

}

