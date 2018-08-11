import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, public navigationService: NavigationService) { }

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

}
