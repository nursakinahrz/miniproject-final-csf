package csf.user.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import csf.user.models.Contact;

@Service
public interface ContactService {

    public Contact createContact (Contact contact);

    //get all contacts
    public List<Contact> getAllContacts();

    public Contact getContactById(Long id);

    public void deleteContact(Long id);

    public Contact updateContact (Contact contact, Long id);
    
    
}
