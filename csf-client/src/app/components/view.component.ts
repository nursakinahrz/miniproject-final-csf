import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  contacts: any[] | undefined
  private backendUrl = "http://localhost:8080";

  constructor(private contactService: ContactService, private router: Router) {}


  ngOnInit(): void {
    this.contactService.getContacts().subscribe(data => {
      this.contacts = data;
    })
  }

  deleteContact(id : number) {
    this.contactService.deleteContact(id).subscribe(data => {
      this.contacts = this.contacts?.filter(contact => contact.id !== id);
    })


  }

  updateContact(id: number) {
    this.router.navigate(['update', id])
  }

}
