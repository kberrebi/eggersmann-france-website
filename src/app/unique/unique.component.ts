import { Component, OnInit } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { LanguagesService } from '../languages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unique',
  templateUrl: './unique.component.html',
  styleUrls: ['./unique.component.css']
})


export class UniqueComponent implements OnInit {

  constructor(private router: Router, public languagesService: LanguagesService) { }

  ngOnInit() {
  }

  navigate(uniquePage) {
    this.router.navigateByUrl('/unique/' + uniquePage);
  }

}
