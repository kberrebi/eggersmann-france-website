import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../navigation.service';
import { Router } from '@angular/router';
import { LanguagesService } from '../../languages.service';

@Component({
  selector: 'app-works-black-stripes',
  templateUrl: './works-black-stripes.component.html',
  styleUrls: ['./works-black-stripes.component.css']
})
export class WorksBlackStripesComponent implements OnInit {

  previousWorksPage = '';
  previousWorksUrl = '';
  nextWorksPage = '';
  nextWorksUrl = '';

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public navigationService: NavigationService, private router: Router, public LanguagesService: LanguagesService) {
    this.navigationService.currentWorksPage = this.LanguagesService.worksTitle1;
  }

  ngOnInit() {
    this.navigationService.currentPage = 'works';
    this.previousWorksPage = this.navigationService.previousWorksPage().text;
    this.previousWorksUrl = this.navigationService.previousWorksPage().url;
    this.nextWorksPage = this.navigationService.nextWorksPage().text;
    this.nextWorksUrl = this.navigationService.nextWorksPage().url;
  }

  navigate(goto) {
    this.router.navigateByUrl('/works/' + goto);
  }

}
