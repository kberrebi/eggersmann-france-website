import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../navigation.service';
import { Router } from '@angular/router';
import { LanguagesService } from '../../languages.service';

@Component({
  selector: 'app-pietra-viva',
  templateUrl: './pietra-viva.component.html',
  styleUrls: ['./pietra-viva.component.css']
})
export class PietraVivaComponent implements OnInit {

  previousUniquePage = '';
  previousUniqueUrl = '';
  nextUniquePage = '';
  nextUniqueUrl = '';

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public navigationService: NavigationService, private router: Router, public LanguagesService: LanguagesService) {
    this.navigationService.currentUniquePage = this.LanguagesService.uniqueTitle4;
  }

  ngOnInit() {
    this.navigationService.currentPage = 'unique';
    this.previousUniquePage = this.navigationService.previousUniquePage().text;
    this.previousUniqueUrl = this.navigationService.previousUniquePage().url;
    this.nextUniquePage = this.navigationService.nextUniquePage().text;
    this.nextUniqueUrl = this.navigationService.nextUniquePage().url;
  }

  navigate(goto) {
    this.router.navigateByUrl('/unique/' + goto);
  }

}
