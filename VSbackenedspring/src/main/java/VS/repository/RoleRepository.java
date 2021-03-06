package VS.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import VS.domain.model.Role;


@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {

}
