package br.com.saveit.repositorio;

import br.com.saveit.dominio.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RepositorioCategoria extends JpaRepository<Categoria, Long> {
    Optional<Categoria> findByNome(String nome);
}
