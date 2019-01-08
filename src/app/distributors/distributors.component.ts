import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { LanguagesService } from '../languages.service';
import distributors from '../../assets/JSON/distributors.json';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css']
})
export class DistributorsComponent implements OnInit {

  focus = '';

  constructor(public languagesService: LanguagesService, public navigationService: NavigationService) { }

  ngOnInit() {
    console.log(distributors);
    this.navigationService.currentPage = 'distributors';
  }

  goToExpansionPanel(region, focused = '') {
    this.focus = focused;
    region.scrollIntoView({behavior: 'smooth'});
  }

}
