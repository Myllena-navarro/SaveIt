package br.com.saveit.repositorio;

import br.com.saveit.dominio.Categoria;
import br.com.saveit.dominio.Despesas;
import br.com.saveit.dto.RelatorioCategoriaDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RepositorioDespesas extends JpaRepository<Despesas, Long> {

    @Query("SELECT new br.com.saveit.dto.RelatorioCategoriaDTO(d.categoria, SUM(d.valor)) " +
           "FROM Despesas d " +
           "WHERE (:categoria IS NULL OR d.categoria = :categoria) " +
           "AND MONTH(d.dataCadastro) = :mes AND YEAR(d.dataCadastro) = :ano " +
           "GROUP BY d.categoria")
    List<RelatorioCategoriaDTO> obterRelatorioPorCategoria(
        @Param("mes") int mes,
        @Param("ano") int ano,
        @Param("categoria") Categoria categoria
    );
}
