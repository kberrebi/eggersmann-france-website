import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor(public navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.currentPage = 'works';
  }

}
