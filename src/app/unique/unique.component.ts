import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { LanguagesService } from '../languages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unique',
  templateUrl: './unique.component.html',
  styleUrls: ['./unique.component.css']
})


export class UniqueComponent implements OnInit {

  constructor(private router: Router, public languagesService: LanguagesService, public navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.currentPage = 'unique';
  }

  navigate(uniquePage) {
    this.router.navigateByUrl('/unique/' + uniquePage);
  }

}
