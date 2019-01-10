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
    this.navigationService.currentPage = 'distributors';
  }

  sortDistributors() {
    this.regions.forEach(localRegion => {
      distributors.regions.forEach(externalRegion => {
        if (externalRegion.formattedName == localRegion.formattedName) {
          localRegion.content.push(externalRegion.showrooms);
        }
      })
    });
  }

  goToExpansionPanel(region, strRegion = '') {
    this.regions.forEach(regionIndexed => {
      if (regionIndexed.formattedName == strRegion) {
        if (regionIndexed.content[0].length == 1) {
          this.focus = regionIndexed.content[0][0].formattedTitle;
        }
      }
    });
    region.scrollIntoView({behavior: 'smooth'});
  }

}
