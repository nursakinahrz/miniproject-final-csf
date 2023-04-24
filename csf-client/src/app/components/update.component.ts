import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  contact!: Contact
  data: any
  // form!: FormGroup

  constructor(private contactService: ContactService, private fb: FormBuilder, private activatedRoute: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.contactService.getContactById(id).subscribe(data => {
      this.contact = data
    })
  }

  // createForm(): FormGroup {
  //   return this.fb.group({
  //     name: this.fb.control('', [Validators.required]),
  //     email: this.fb.control('', [Validators.required]),
  //     phone: this.fb.control('', [Validators.required]),
  //     address: this.fb.control('', [Validators.required]),
  //   });
  // }

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required])
  })

  submit() {
    this.data = this.form.value
    this.contactService.updateContact(this.contact?.id, this.data).subscribe(data => {

    })
    this.route.navigate(['/']);

  }


}
