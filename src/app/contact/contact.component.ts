import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavigationService } from '../navigation.service';
import { MailServiceService } from '../mail-service.service';

export interface Showroom {
  value: string;
  viewValue: string;
}

export interface ShowroomGroup {
  name: string;
  Showroom: Showroom[];
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  checked = false;
  mailObject = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    address: '',
    phone: '',
    catalog: 'non',
    showroomCatalog: '/'
  };

  showroomControl = new FormControl();
  showroomGroups: ShowroomGroup[] = [
    {
      name: 'Île de France',
      Showroom: [
        {value: 'Paris8', viewValue: 'Paris 8ème'},
        {value: 'Paris7', viewValue: 'Paris 7ème'},
        {value: 'Paris12', viewValue: 'Paris 12ème'},
        {value: 'LePerreux', viewValue: 'Le Perreux'}
      ]
    },
    {
      name: 'Grand-Est',
      Showroom: [
        {value: 'City1', viewValue: 'City 1'},
        {value: 'City2', viewValue: 'City 2'},
        {value: 'City3', viewValue: 'City 3'}
      ]
    },
  ];

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, public navigationService: NavigationService, public mailService: MailServiceService) { }

  ngOnInit() {
    this.navigationService.currentPage = 'contact';
    this.firstFormGroup = this._formBuilder.group({
      firstNameCtrl: ['', ]
    });
    this.secondFormGroup = this._formBuilder.group({
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.email],
      countryCtrl: ['', Validators.required],
      addressCtrl: ['', Validators.required],
      phoneCtrl: ['', Validators.pattern('([(+]*[0-9]+[()+. -]*)')]
    });
  }

  sendEmail() {
    if (this.checked === true) {
      this.mailObject.catalog = 'oui';
    }
    this.mailService.sendMail(this.mailObject).subscribe(() => {
        console.log('email sent with success');
      });
  }

}
