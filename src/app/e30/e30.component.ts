import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-e30',
  templateUrl: './e30.component.html',
  styleUrls: ['./e30.component.css']
})
export class E30Component implements OnInit {

  constructor(public navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.currentPage = 'e30';
  }

}
