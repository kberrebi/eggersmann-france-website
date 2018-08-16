import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../languages.service';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public languagesService: LanguagesService, public navigationService: NavigationService) {
  }

  ngOnInit() {
  }

}
