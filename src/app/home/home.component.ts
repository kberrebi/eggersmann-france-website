import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../languages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title1: string;
  title2: string;
  content1: string;
  content2: string;
  content3: string;
  content4: string;
  content5: string;

  constructor(public languagesService: LanguagesService) { }

  ngOnInit() {
    this.title1 = this.languagesService.homeTitle1;
    this.title2 = this.languagesService.homeTitle2;
    this.content1 = this.languagesService.homeContent1;
    this.content2 = this.languagesService.homeContent2;
    this.content3 = this.languagesService.homeContent3;
    this.content4 = this.languagesService.homeContent4;
    this.content5 = this.languagesService.homeContent5;
  }

   detectmob() {
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ) {
       return true;
    } else {
       return false;
     }
   }

}
