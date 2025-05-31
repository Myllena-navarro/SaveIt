package br.com.saveit.repositorio;

import br.com.saveit.dominio.MetaFinanceira;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface RepositorioMetasFinanceiras extends JpaRepository<MetaFinanceira, Long> {
    List<MetaFinanceira> findByUsuarioId(Long usuarioId);
}
