package csf.user.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import csf.user.models.Contact;
import csf.user.repositories.ContactRepository;

@Service
public class ContactServiceImplementation implements ContactService {

    @Autowired
    ContactRepository contactRepo;

    @Override
    public Contact createContact(Contact contact) {
        return contactRepo.save(contact);

        
    }

    @Override
    public List<Contact> getAllContacts() {
        return contactRepo.findAll();
       
    }

    @Override
    public Contact getContactById(Long id) {
        return contactRepo.findById(id).get();
        
    }

    @Override
    public void deleteContact(Long id) {
        contactRepo.deleteById(id);
       
    }

    @Override
    public Contact updateContact(Contact contact, Long id) {
        Contact newContact = contactRepo.findById(id).get();
        newContact.setName(contact.getName());
        newContact.setEmail(contact.getEmail());
        newContact.setPhone(contact.getPhone());
        newContact.setAddress(contact.getAddress());
        return contactRepo.save(newContact);

        
    }


    
}
