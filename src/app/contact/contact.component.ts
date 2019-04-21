import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavigationService } from '../navigation.service';
import { MailServiceService } from '../mail-service.service';
import { HttpClient } from '@angular/common/http';


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

  distributors: any;

  showroomControl = new FormControl();
  showroomGroups: ShowroomGroup[] = [];

  innerWidth: any;
  pannel = 1;
  pannel1Option1 = false;
  pannel1Option2 = false;
  pannel3Option1 = false;
  pannel3Option2 = false;

  sendEmailLoading = false;


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
    showroomCatalog: ''
  };

  isLinear = false;
  formGroup: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private _formBuilder: FormBuilder, public navigationService: NavigationService, public mailService: MailServiceService, public http: HttpClient) {
    this.http.get('/assets/JSON/distributors.json').subscribe(data => {
      this.distributors = data['regions'];
      this.distributors.forEach(region => {
        this.showroomGroups.push(region);
      });
    });
  }

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
    this.sendEmailLoading = true;
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
      showroomCatalog: ''
    };
    if (this.pannel1Option1) {
      this.mailObject.status = 'client';
    }
    if (this.pannel1Option2) {
      this.mailObject.status = 'partenaire distributeur';
    }
    if (this.pannel3Option1 && this.showroomControl.value) {
      this.mailObject.showroomCatalog = this.showroomControl.value;
    }
    this.mailService.sendMail(this.mailObject).then(() => {
      this.goToPannel(6);
    });
  }

}
