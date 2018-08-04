import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seaside-resort',
  templateUrl: './seaside-resort.component.html',
  styleUrls: ['./seaside-resort.component.css']
})
export class SeasideResortComponent implements OnInit {

  previousLookbookPage = '';
  previousLookbookUrl = '';
  nextLookbookPage = '';
  nextLookbookUrl = '';

  constructor(public navigationService: NavigationService, private router: Router) { }

  ngOnInit() {
    this.navigationService.currentLookbookPage = 'Seaside Resort';
    this.previousLookbookPage = this.navigationService.previousLookbookPage().text;
    this.previousLookbookUrl = this.navigationService.previousLookbookPage().url;
    this.nextLookbookPage = this.navigationService.nextLookbookPage().text;
    this.nextLookbookUrl = this.navigationService.nextLookbookPage().url;
  }

  navigate(goto) {
    this.router.navigateByUrl('/lookbook/' + goto);
  }

}
