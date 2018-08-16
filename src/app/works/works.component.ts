import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { LanguagesService } from '../languages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor(private router: Router, public languagesService: LanguagesService, public navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.currentPage = 'works';
  }

  navigate(uniquePage) {
    this.router.navigateByUrl('/works/' + uniquePage);
  }

}
