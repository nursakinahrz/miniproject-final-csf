package csf.user.repositories;

import org.springframework.stereotype.Repository;

import csf.user.models.Contact;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;


@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {


    
}
