import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../navigation.service';
import { Router } from '@angular/router';
import { LanguagesService } from '../../languages.service';

@Component({
  selector: 'app-oak-laminate',
  templateUrl: './oak-laminate.component.html',
  styleUrls: ['./oak-laminate.component.css']
})
export class OakLaminateComponent implements OnInit {

  previousE30Page = '';
  previousE30Url = '';
  nextE30Page = '';
  nextE30Url = '';

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public navigationService: NavigationService, private router: Router, public LanguagesService: LanguagesService) {
    this.navigationService.currentE30Page = this.LanguagesService.e30Title6;
  }

  ngOnInit() {
    this.navigationService.currentPage = 'e30';
    this.previousE30Page = this.navigationService.previousE30Page().text;
    this.previousE30Url = this.navigationService.previousE30Page().url;
    this.nextE30Page = this.navigationService.nextE30Page().text;
    this.nextE30Url = this.navigationService.nextE30Page().url;
  }

  navigate(goto) {
    this.router.navigateByUrl('/e30/' + goto);
  }

}
