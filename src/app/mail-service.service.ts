import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  constructor(private _http: HttpClient) { }

  sendMail(body) {
    return this._http.post('https://eggersmann.fr/backend/form_9f773b75ffcda6bb2a95.php', body, {responseType: 'text'})
    .toPromise()
    .then((response) => response);
  }
}
