import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { LanguagesService } from '../languages.service';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css']
})
export class DistributorsComponent implements OnInit {

  lat1 = 51.678418;
  lng1 = 7.809007;

  constructor(public languagesService: LanguagesService, public navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.currentPage = 'distributors';
  }

  goToExpansionPanel(region) {
    region.scrollIntoView({behavior: 'smooth'});
  }

}
