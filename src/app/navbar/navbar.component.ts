import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../languages.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  item1: string;
  item2: string;
  item3: string;

  constructor(public languagesService: LanguagesService) { }

  ngOnInit() {
    this.item1 = this.languagesService.navItem1;
    this.item2 = this.languagesService.navItem2;
    this.item3 = this.languagesService.navItem3;
  }

}
