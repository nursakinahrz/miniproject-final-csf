import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private backendUrl = "";

  constructor(private httpClient: HttpClient) { }


  //create new contact
  addContact(contact: Contact) {
    return this.httpClient.post<Contact>(`${this.backendUrl}add`, contact)
    
  }

  getContacts(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.backendUrl + 'contacts')
  }

  getContactById(id: number): Observable<Contact>{
    return this.httpClient.get<Contact>(`${this.backendUrl}contact/$id}`)
  }

  updateContact(id?: number ,contact?: any): Observable<any>{
    return this.httpClient.put<any>(`${this.backendUrl}update/${id}`, contact)
  }

  deleteContact(id: number): Observable<any>{
    return this.httpClient.delete<any>(`${this.backendUrl}delete/${id}`)
  }

}
