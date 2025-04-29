package br.com.saveit.repositorio;

import br.com.saveit.dominio.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface RepositorioUsuarios extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByEmail(String email);
}
