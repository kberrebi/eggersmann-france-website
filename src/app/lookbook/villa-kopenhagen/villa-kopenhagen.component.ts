import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../navigation.service';
import { Router } from '@angular/router';
import { LanguagesService } from '../../languages.service';

@Component({
  selector: 'app-villa-kopenhagen',
  templateUrl: './villa-kopenhagen.component.html',
  styleUrls: ['./villa-kopenhagen.component.css']
})
export class VillaKopenhagenComponent implements OnInit {

  previousLookbookPage = '';
  previousLookbookUrl = '';
  nextLookbookPage = '';
  nextLookbookUrl = '';

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public navigationService: NavigationService, private router: Router, public LanguagesService: LanguagesService) {
    this.navigationService.currentLookbookPage = this.LanguagesService.lookbookTitle25;
  }

  ngOnInit() {
    this.navigationService.currentPage = 'lookbook';
    this.previousLookbookPage = this.navigationService.previousLookbookPage().text;
    this.previousLookbookUrl = this.navigationService.previousLookbookPage().url;
    this.nextLookbookPage = this.navigationService.nextLookbookPage().text;
    this.nextLookbookUrl = this.navigationService.nextLookbookPage().url;
  }

  navigate(goto) {
    this.router.navigateByUrl('/lookbook/' + goto);
  }

}
