import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  constructor(private _http: HttpClient) { }

  sendMail(body) {
    console.log('service function');
    return this._http.post('http://localhost:3000/form', body);
  }
}
