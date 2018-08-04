import { Injectable } from '@angular/core';
import { LanguagesService } from './languages.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  currentLookbookPage = '';
  lookBookPages = [];

  constructor(public languagesService: LanguagesService) {
    this.lookBookPages = [{text: this.languagesService.lookbookTitle1, url: 'seaside'},
                          {text: this.languagesService.lookbookTitle2, url: 'london'},
                          {text: this.languagesService.lookbookTitle3, url: 'villa-salzburg'},
                          {text: this.languagesService.lookbookTitle4, url: 'villa-innsbruck'},
                          {text: this.languagesService.lookbookTitle5, url: 'maison-heidenheim'},
                          {text: this.languagesService.lookbookTitle6, url: 'maison-schweinfurt'},
                          {text: this.languagesService.lookbookTitle7, url: 'maison-hambourg2'},
                          {text: this.languagesService.lookbookTitle8, url: 'auvent-berlin'},
                          {text: this.languagesService.lookbookTitle9, url: 'villa-hambourg'},
                          {text: this.languagesService.lookbookTitle10, url: 'villa-vienne'},
                          {text: this.languagesService.lookbookTitle11, url: 'auvent-hambourg'},
                          {text: this.languagesService.lookbookTitle12, url: 'maison-hambourg'},
                          {text: this.languagesService.lookbookTitle13, url: 'maison-miami'},
                          {text: this.languagesService.lookbookTitle14, url: 'maison-duesseldorf'},
                          {text: this.languagesService.lookbookTitle15, url: 'villa-wiesbaden'},
                          {text: this.languagesService.lookbookTitle16, url: 'maison-helsinki'},
                          {text: this.languagesService.lookbookTitle17, url: 'villa-hambourg2'},
                          {text: this.languagesService.lookbookTitle18, url: 'villa-regensburg'},
                          {text: this.languagesService.lookbookTitle19, url: 'maison-bielefeld'},
                          {text: this.languagesService.lookbookTitle20, url: 'villa-cologne'},
                          {text: this.languagesService.lookbookTitle21, url: 'loft-hambourg'},
                          {text: this.languagesService.lookbookTitle22, url: 'villa liechtenstein'},
                          {text: this.languagesService.lookbookTitle23, url: 'appartement-hambourg'},
                          {text: this.languagesService.lookbookTitle24, url: 'maisonette-bonn'},
                          {text: this.languagesService.lookbookTitle25, url: 'villa-kopenhagen'},
                          {text: this.languagesService.lookbookTitle26, url: 'maison-copenhague'},
                         ];
  }

  previousLookbookPage() {
    const indexCurrentPage = this.lookBookPages.findIndex(element => element.text === this.currentLookbookPage);
    return (indexCurrentPage !== 0) ? this.lookBookPages[indexCurrentPage - 1] : {text: '', url: ''};
  }

  nextLookbookPage() {
    const indexCurrentPage = this.lookBookPages.findIndex(element => element.text === this.currentLookbookPage);
    return (indexCurrentPage !== this.lookBookPages.length - 1) ? this.lookBookPages[indexCurrentPage + 1] : {text: '', url: ''};
  }

}
