package csf.user.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import csf.user.Services.ContactService;
import csf.user.models.Contact;

@RestController
@CrossOrigin(origins= "*")
@RequestMapping(path="/api")
public class ContactRestController {


    @Autowired
    ContactService contactSvc;

    @GetMapping("/contacts")
    public ResponseEntity<List<Contact>> getAllContacts () {
        List<Contact> contacts = contactSvc.getAllContacts();
        return new ResponseEntity<>(contacts, HttpStatus.OK);
    }

    //get contact by id
    @GetMapping("/contact/{id}")
    public ResponseEntity<Contact> getContactById (@PathVariable("id") Long id) {
        Contact contact = contactSvc.getContactById(id);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<Contact> createContact(@RequestBody Contact contact) {
        Contact newContact = contactSvc.createContact(contact);  
        return new ResponseEntity<>(newContact, HttpStatus.CREATED);
        // return newContact;  
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Contact> updateContactById(@RequestBody Contact contact, @PathVariable Long id) {
        Contact updateContact = contactSvc.updateContact(contact, id);
        return new ResponseEntity<>(updateContact, HttpStatus.OK);
    
    }

  

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteContact(@PathVariable Long id) {
        contactSvc.deleteContact(id);
        System.out.println("Contact deleted successfully!");
        return new ResponseEntity<>(HttpStatus.OK);
    }


  



    
}
