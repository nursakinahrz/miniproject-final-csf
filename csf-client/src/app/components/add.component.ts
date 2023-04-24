import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {



  constructor (private contactService: ContactService, private fb: FormBuilder, private router: Router) {}
  data: any;
  // form!: FormGroup;

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


ngOnInit(): void {
  // this.createForm();
}



submit() {
  this.data = this.form.value
  console.log(this.data)

  this.contactService.addContact(this.data).subscribe(data => {
    console.log(data)
  })

  this.router.navigate(['/'])
}

}
