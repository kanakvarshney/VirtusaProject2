package VS.service;

import java.util.Set;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import VS.domain.User;
import VS.domain.model.UserRole;


@Service
public interface UserService extends UserDetails,UserDetailsService {
	
	User createUser(User user, Set<UserRole> userRoles);

}
