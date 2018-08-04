import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-london',
  templateUrl: './london.component.html',
  styleUrls: ['./london.component.css']
})
export class LondonComponent implements OnInit {

  constructor(public navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.currentLookbookPage = 'Villa London';
  }

}
