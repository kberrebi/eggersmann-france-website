import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../languages.service';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public languagesService: LanguagesService, public navigationService: NavigationService) { }

  ngOnInit() {
  }

  goTo(destinationPage) {
    this.navigationService.navigateTo(destinationPage);
  }

  setFrLanguage() {
    this.languagesService.setLanguage('fr');
  }

  setEnLanguage() {
    this.languagesService.setLanguage('en');
  }

}
