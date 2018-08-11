import { Component, OnInit, NgModule } from '@angular/core';
import { LanguagesService } from '../languages.service';
import { Router } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-lookbook',
  templateUrl: './lookbook.component.html',
  styleUrls: ['./lookbook.component.css']
})

export class LookbookComponent implements OnInit {

  constructor(private router: Router, public languagesService: LanguagesService, public navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.currentPage = 'lookbook';
  }

  navigate(lookbookPage) {
    this.router.navigateByUrl('/lookbook/' + lookbookPage);
  }

}
