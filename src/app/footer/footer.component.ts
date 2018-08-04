import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../languages.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public languagesService: LanguagesService) { }

  ngOnInit() {
  }

  setFrLanguage() {
    this.languagesService.setLanguage('fr');
  }

  setEnLanguage() {
    this.languagesService.setLanguage('en');
  }

}
