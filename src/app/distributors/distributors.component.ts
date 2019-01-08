import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { LanguagesService } from '../languages.service';
import distributors from '../../assets/JSON/distributors.json';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css']
})
export class DistributorsComponent implements OnInit {

  focus = '';
  regions = [{formattedName: "IledeFrance", content: []}, {formattedName: "AuvergneRhoneAlpes", content: []}, {formattedName: "BourgogneFrancheComte", content: []},
             {formattedName: "Bretagne", content: []}, {formattedName: "Corse", content: []}, {formattedName: "Occitanie", content: []}, {formattedName: "HautsdeFrance", content: []},
             {formattedName: "ProvenceAlpesCoteAzur", content: []}, {formattedName: "NouvelleAquitaine", content: []}, {formattedName: "Switzerland", content: []},
             {formattedName: "Luxembourg", content: []}, {formattedName: "Maroc", content: []}, {formattedName: "NouvelleCaledonie", content: []}, {formattedName: "Barthelemy", content: []},
             {formattedName: "GrandEst", content: []}, {formattedName: "CentreValdeLoire", content: []}, {formattedName: "Normandie", content: []}, {formattedName: "PaysdelaLoire", content: []}
  ]

  constructor(public languagesService: LanguagesService, public navigationService: NavigationService) {
    this.sortDistributors();
  }

  ngOnInit() {
    this.regions.forEach(region => {
      console.log(region);
    });
    this.navigationService.currentPage = 'distributors';
  }

  sortDistributors() {
    console.log('sorting');
    this.regions.forEach(localRegion => {
      distributors.regions.forEach(externalRegion => {
        if (externalRegion.formattedName == localRegion.formattedName) {
          localRegion.content.push(externalRegion.showrooms);
        }
      })
    });
  }

  goToExpansionPanel(region, focused = '') {
    this.focus = focused;
    region.scrollIntoView({behavior: 'smooth'});
  }

}
