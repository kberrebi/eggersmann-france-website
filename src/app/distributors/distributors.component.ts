import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { LanguagesService } from '../languages.service';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css']
})
export class DistributorsComponent implements OnInit {

  constructor(public languagesService: LanguagesService, public navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.currentPage = 'distributors';
  }

}