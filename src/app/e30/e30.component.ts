import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../languages.service';
import { Router } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-e30',
  templateUrl: './e30.component.html',
  styleUrls: ['./e30.component.css']
})
export class E30Component implements OnInit {

  constructor(private router: Router, public languagesService: LanguagesService, public navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.currentPage = 'e30';
  }

  navigate(e30Page) {
    this.router.navigateByUrl('/e30/' + e30Page);
  }

}
