import { Injectable } from '@angular/core';
import { LanguagesService } from './languages.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  currentPage: string;

  currentLookbookPage = '';
  lookBookPages = [];

  currentUniquePage = '';
  uniquePages = [];

  currentWorksPage = '';
  worksPages = [];

  currentE30Page = '';
  e30Pages = [];

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
    this.uniquePages = [{text: this.languagesService.uniqueTitle1, url: 'beola-nera'},
                        {text: this.languagesService.uniqueTitle2, url: 'carbono'},
                        {text: this.languagesService.uniqueTitle3, url: 'arabescato'},
                        {text: this.languagesService.uniqueTitle4, url: 'pietra-viva'},
                        {text: this.languagesService.uniqueTitle5, url: 'grigio'},
                        {text: this.languagesService.uniqueTitle6, url: 'valcamonica'},
                        {text: this.languagesService.uniqueTitle7, url: 'nero'},
                        {text: this.languagesService.uniqueTitle8, url: 'graphite'},
                        {text: this.languagesService.uniqueTitle9, url: 'luna-grey'},
                        {text: this.languagesService.uniqueTitle10, url: 'elegantbrown'},
                        {text: this.languagesService.uniqueTitle11, url: 'taj-mahal'},
                        {text: this.languagesService.uniqueTitle12, url: 'silver-touch'},
                        {text: this.languagesService.uniqueTitle13, url: 'lacquemate'},
                        {text: this.languagesService.uniqueTitle14, url: 'volcano'},
                        {text: this.languagesService.uniqueTitle15, url: 'slate'},
                       ];
    this.worksPages = [{text: this.languagesService.worksTitle1, url: 'works-black-stripes'},
                       {text: this.languagesService.worksTitle2, url: 'works-mirror-type'},
                       {text: this.languagesService.worksTitle3, url: 'works-turn'},
                       {text: this.languagesService.worksTitle4, url: 'works-island'},
                       {text: this.languagesService.worksTitle5, url: 'works-bridge'},
                      ];
    this.e30Pages = [{text: this.languagesService.e30Title1, url: 'aluminum-quartzite'},
                     {text: this.languagesService.e30Title2, url: 'concrete-vintage-oak'},
                     {text: this.languagesService.e30Title3, url: 'laminate-pure-white'},
                     {text: this.languagesService.e30Title4, url: 'stainless-excentric'},
                     {text: this.languagesService.e30Title5, url: 'quartz-walnut'},
                     {text: this.languagesService.e30Title6, url: 'oak-laminate'},
                     {text: this.languagesService.e30AccessoriesTitle1, url: 'aluminum-niche-system'},
                     {text: this.languagesService.e30AccessoriesTitle2, url: 'boxtec'},
                     {text: this.languagesService.e30AccessoriesTitle3, url: 'aluminum-drawer-system'},
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

  previousUniquePage() {
    const indexCurrentPage = this.uniquePages.findIndex(element => element.text === this.currentUniquePage);
    return (indexCurrentPage !== 0) ? this.uniquePages[indexCurrentPage - 1] : {text: '', url: ''};
  }

  nextUniquePage() {
    const indexCurrentPage = this.uniquePages.findIndex(element => element.text === this.currentUniquePage);
    return (indexCurrentPage !== this.uniquePages.length - 1) ? this.uniquePages[indexCurrentPage + 1] : {text: '', url: ''};
  }

  previousWorksPage() {
    const indexCurrentPage = this.worksPages.findIndex(element => element.text === this.currentWorksPage);
    return (indexCurrentPage !== 0) ? this.worksPages[indexCurrentPage - 1] : {text: '', url: ''};
  }

  nextWorksPage() {
    const indexCurrentPage = this.worksPages.findIndex(element => element.text === this.currentWorksPage);
    return (indexCurrentPage !== this.worksPages.length - 1) ? this.worksPages[indexCurrentPage + 1] : {text: '', url: ''};
  }

  previousE30Page() {
    const indexCurrentPage = this.e30Pages.findIndex(element => element.text === this.currentE30Page);
    return (indexCurrentPage !== 0) ? this.e30Pages[indexCurrentPage - 1] : {text: '', url: ''};
  }

  nextE30Page() {
    const indexCurrentPage = this.e30Pages.findIndex(element => element.text === this.currentE30Page);
    return (indexCurrentPage !== this.e30Pages.length - 1) ? this.e30Pages[indexCurrentPage + 1] : {text: '', url: ''};
  }

  isIn(pagesTab: any) {
    let res = false;
    pagesTab.forEach(element => {
      res = res || element === this.currentPage;
    });
    return res;
  }

}
