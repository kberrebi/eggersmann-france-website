import { Component, OnInit, NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { LanguagesService } from '../languages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lookbook',
  templateUrl: './lookbook.component.html',
  styleUrls: ['./lookbook.component.css']
})

@NgModule({
  imports: [MatStepperModule],
})

export class LookbookComponent implements OnInit {

  constructor(private router: Router, public languagesService: LanguagesService) { }

  ngOnInit() {
  }

  navigate(lookbookPage) {
    this.router.navigateByUrl('/lookbook/' + lookbookPage);
  }

}
