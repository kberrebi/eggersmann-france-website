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

  innerWidth: any;
  pannel = 0;
  pannel1Option1 = false;
  pannel1Option2 = false;
  pannel3Option1 = false;
  pannel3Option2 = false;


  checked = false;
  mailObject = {
    status: '',
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    address: '',
    city: '',
    postCode: '',
    phone: '',
    message: '',
    showroomCatalog: '',
    paymentOption: ''
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
  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, public navigationService: NavigationService, public mailService: MailServiceService) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.navigationService.currentPage = 'contact';
    this.formGroup = this._formBuilder.group({
      firstNameCtrl: ['', [Validators.required, Validators.minLength(2)]],
      lastNameCtrl: ['', [Validators.required, Validators.minLength(2)]],
      emailCtrl: ['', [Validators.required, Validators.email]],
      countryCtrl: ['', [Validators.required, Validators.minLength(2)]],
      addressCtrl: ['', [Validators.required, Validators.minLength(2)]],
      cityCtrl: ['', [Validators.required, Validators.minLength(2)]],
      postCodeCtrl: ['', Validators.required],
      phoneCtrl: ['', [Validators.required, Validators.minLength(3), Validators.pattern('([(+]*[0-9]+[()+. -]*)')]],
      messageCtrl: ['', ],
    });
  }

  back() {
    this.pannel1Option1 = false;
    this.pannel1Option2 = false;
    this.pannel3Option1 = false;
    this.pannel3Option2 = false;
    this.goToPannel(1);
  }

  goToPannel(pannelNumber, option?: string) {
    window.scroll(0, 0);
    this.pannel = pannelNumber;
    switch (option) {
      case 'pannel1Option1': {
        this.pannel1Option1 = true;
        break;
      }
      case 'pannel1Option2': {
        this.pannel1Option2 = true;
        break;
      }
      case 'pannel3Option1': {
        this.pannel3Option1 = true;
        break;
      }
      case 'pannel3Option2': {
        this.pannel3Option2 = true;
        break;
      }
      default: {
        break;
      }
    }
  }

  sendEmail() {
    this.mailObject = {
      status: '',
      firstName: this.formGroup.get('firstNameCtrl').value,
      lastName: this.formGroup.get('lastNameCtrl').value,
      email: this.formGroup.get('emailCtrl').value,
      country: this.formGroup.get('countryCtrl').value,
      address: this.formGroup.get('addressCtrl').value,
      city: this.formGroup.get('cityCtrl').value,
      postCode: this.formGroup.get('postCodeCtrl').value,
      phone: this.formGroup.get('phoneCtrl').value,
      message: this.formGroup.get('messageCtrl').value,
      showroomCatalog: '',
      paymentOption: ''
    };
    if (this.pannel1Option1) {
      this.mailObject.status = 'client';
    }
    if (this.pannel1Option2) {
      this.mailObject.status = 'partenaire distributeur';
    }
    if (this.pannel3Option1 && this.showroomControl.value !== null) {
      this.mailObject.showroomCatalog = this.showroomControl.value;
      this.mailObject.paymentOption = 'non';
    }
    if (this.pannel3Option2) {
      this.mailObject.paymentOption = 'oui';
    }
    this.mailService.sendMail(this.mailObject);
  }

}
