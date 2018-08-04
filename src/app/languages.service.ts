import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  // Global language
  language: string;

  // Contents to traduce
  navItem1: string;
  navItem2: string;
  navItem3: string;
  navItem4: string;
  navItem5: string;
  navItem6: string;
  navItem7: string;

  homeTitle1: string;
  homeTitle2: string ;
  homeContent1: string;
  homeContent2: string;
  homeContent3: string;
  homeContent4: string;
  homeContent5: string;

  lookbookTitle1: string;
  lookbookTitle2: string;
  lookbookTitle3: string;
  lookbookTitle4: string;
  lookbookTitle5: string;
  lookbookTitle6: string;
  lookbookTitle7: string;
  lookbookTitle8: string;
  lookbookTitle9: string;
  lookbookTitle10: string;
  lookbookTitle11: string;
  lookbookTitle12: string;
  lookbookTitle13: string;
  lookbookTitle14: string;
  lookbookTitle15: string;
  lookbookTitle16: string;
  lookbookTitle17: string;
  lookbookTitle18: string;
  lookbookTitle19: string;
  lookbookTitle20: string;
  lookbookTitle21: string;
  lookbookTitle22: string;
  lookbookTitle23: string;
  lookbookTitle24: string;
  lookbookTitle25: string;
  lookbookTitle26: string;

  lookbookDes1: string;
  lookbookDes2: string;
  lookbookDes3: string;
  lookbookDes4: string;
  lookbookDes5: string;
  lookbookDes6: string;
  lookbookDes7: string;
  lookbookDes8: string;
  lookbookDes9: string;
  lookbookDes10: string;
  lookbookDes11: string;
  lookbookDes12: string;
  lookbookDes13: string;
  lookbookDes14: string;
  lookbookDes15: string;
  lookbookDes16: string;
  lookbookDes17: string;
  lookbookDes18: string;
  lookbookDes19: string;
  lookbookDes20: string;
  lookbookDes21: string;
  lookbookDes22: string;
  lookbookDes23: string;
  lookbookDes24: string;
  lookbookDes25: string;
  lookbookDes26: string;


  // French version of contents
  navItemFr1 = 'Accueil';
  navItemFr2 = 'Distributeurs';
  navItemFr3 = 'Contacter';
  navItemFr4 = 'Lookbook';
  navItemFr5 = 'E3.0';
  navItemFr6 = 'Unique';
  navItemFr7 = 'work\'s';
  homeTitleFr1 = 'eggersmann';
  homeTitleFr2 = 'Titre ici';
  homeContentFr1 =  'Notre choix, tout miser sur une personnalisation maximale plutôt que' +
  'sur la production en série. Les gestes et techniques ancestrales des Maîtres ébénistes et' +
  'des meilleurs professionnels qui ont fait eggersmann depuis plus de 110 années nous inspirent.' +
  'Nous avons choisi d’en améliorer les possibilités au moyen de machines ultra-modernes. ';
  homeContentFr2 =  'C’est au travers de la symbiose entre volonté et possibilités que naissent nos' +
  'ensembles de cuisines sur mesure, esthétiques et luxueux. Nos clients, sont ceux qui en affectionnent' +
  'le résultat. Respectés et accompagnés par nos partenaires, ils bénéficient de ce qui peut être réalisé' +
  'de mieux aujourd’hui dans l’univers de la cuisine individuelle.';
  homeContentFr3 =  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, amet.' +
  'Nostrum rem cum laudantium voluptatem. Dignissimos, eveniet quasi hic totam corporis' +
  'dolore nesciunt, asperiores perspiciatis similique a fugit, aspernatur ducimus.';
  homeContentFr4 =  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, amet.' +
  'Nostrum rem cum laudantium voluptatem. Dignissimos, eveniet quasi hic totam corporis' +
  'dolore nesciunt, asperiores perspiciatis similique a fugit, aspernatur ducimus.';
  homeContentFr5 =  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, amet.' +
  'Nostrum rem cum laudantium voluptatem. Dignissimos, eveniet quasi hic totam corporis' +
  'dolore nesciunt, asperiores perspiciatis similique a fugit, aspernatur ducimus.';
  lookbookTitle1_Fr = 'Seaside Resort';
  lookbookTitle2_Fr = 'Villa London';
  lookbookTitle3_Fr = 'Villa Salzburg';
  lookbookTitle4_Fr = 'Villa Innsbruck';
  lookbookTitle5_Fr = 'Maison Heidenheim';
  lookbookTitle6_Fr = 'Maison Schweinfurt';
  lookbookTitle7_Fr = 'Maison Hambourg II';
  lookbookTitle8_Fr = 'Auvent Berlin';
  lookbookTitle9_Fr = 'Villa Hambourg';
  lookbookTitle10_Fr = 'Villa Vienne';
  lookbookTitle11_Fr = 'Auvent Hambourg';
  lookbookTitle12_Fr = 'Maison Hambourg';
  lookbookTitle13_Fr = 'Maison Miami';
  lookbookTitle14_Fr = 'Maison Duesseldorf';
  lookbookTitle15_Fr = 'Villa Wiesbaden ';
  lookbookTitle16_Fr = 'Maison Helsinki';
  lookbookTitle17_Fr = 'Villa Hambourg II';
  lookbookTitle18_Fr = 'Villa Regensburg';
  lookbookTitle19_Fr = 'Maison Bielefeld';
  lookbookTitle20_Fr = 'Villa Cologne';
  lookbookTitle21_Fr = 'Loft Hambourg';
  lookbookTitle22_Fr = 'Villa Liechtenstein';
  lookbookTitle23_Fr = 'Appartement Hambourg';
  lookbookTitle24_Fr = 'Maisonette Bonn';
  lookbookTitle25_Fr = 'Villa Kopenhagen';
  lookbookTitle26_Fr = 'Maison Copenhague';
  lookbookDes1_Fr = 'Inox laminé à chaud SilverTouch';
  lookbookDes2_Fr = 'laque mate, quarzite';
  lookbookDes3_Fr = 'lacque mate gris brun';
  lookbookDes4_Fr = 'stratifié blanc/gris foncé';
  lookbookDes5_Fr = 'stratifié nano noir, inox silvertouch';
  lookbookDes6_Fr = 'vernis mat blanc';
  lookbookDes7_Fr = 'stratifié gris brun';
  lookbookDes8_Fr = 'UNIQUE, Placage bois noble';
  lookbookDes9_Fr = 'Corian® Glacier White';
  lookbookDes10_Fr = 'inox silvertouch, stratifié blanc pur';
  lookbookDes11_Fr = 'Phyllit, placage chêne';
  lookbookDes12_Fr = 'inox silvertouch, stratifié polymatt';
  lookbookDes13_Fr = 'Macassar, corian';
  lookbookDes14_Fr = 'quartz-silice/verre, vernis mat';
  lookbookDes15_Fr = 'porphyre, vernis mat';
  lookbookDes16_Fr = 'matériau minéral, Vernis brillant';
  lookbookDes17_Fr = 'pierre basaltique, aluminium';
  lookbookDes18_Fr = 'granit, verre';
  lookbookDes19_Fr = 'laque brillante, inox silvertouch';
  lookbookDes20_Fr = 'quartzite, laque brillante';
  lookbookDes21_Fr = 'merisier, stratifié';
  lookbookDes22_Fr = 'pierre composite, placage';
  lookbookDes23_Fr = 'granit, laque brillante';
  lookbookDes24_Fr = 'granit, laque mate';
  lookbookDes25_Fr = 'corian, placage';
  lookbookDes26_Fr = 'matériau minéral, acrylux camé';

  // English version of contents
  navItemEn1 = 'Home';
  navItemEn2 = 'Distributors';
  navItemEn3 = 'Contact';
  navItemEn4 = 'Lookbook';
  navItemEn5 = 'E3.0';
  navItemEn6 = 'Unique';
  navItemEn7 = 'work\'s';
  homeTitleEn1 = 'Title here';
  homeTitleEn2 = 'Title here';
  homeContentEn1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptas' +
  'tempore error accusamus dolorem aperiam suscipit ipsam. Praesentium distinctio dolore eos eius quos' +
  'perspiciatis ipsam repellat? Nulla impedit sit necessitatibus!';
  homeContentEn2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptas' +
  'tempore error accusamus dolorem aperiam suscipit ipsam. Praesentium distinctio dolore eos eius quos' +
  'perspiciatis ipsam repellat? Nulla impedit sit necessitatibus!';
  homeContentEn3 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptas' +
  'tempore error accusamus dolorem aperiam suscipit ipsam. Praesentium distinctio dolore eos eius quos' +
  'perspiciatis ipsam repellat? Nulla impedit sit necessitatibus!';
  homeContentEn4 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptas' +
  'tempore error accusamus dolorem aperiam suscipit ipsam. Praesentium distinctio dolore eos eius quos' +
  'perspiciatis ipsam repellat? Nulla impedit sit necessitatibus!';
  homeContentEn5 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptas' +
  'tempore error accusamus dolorem aperiam suscipit ipsam. Praesentium distinctio dolore eos eius quos' +
  'perspiciatis ipsam repellat? Nulla impedit sit necessitatibus!';
  lookbookTitle1_En = 'Seaside Resort';
  lookbookTitle2_En = 'Villa London';
  lookbookTitle3_En = 'Villa Salzburg';
  lookbookTitle4_En = 'Villa Innsbruck';
  lookbookTitle5_En = 'House Heidenheim';
  lookbookTitle6_En = 'House Schweinfurt';
  lookbookTitle7_En = 'House Hambourg II';
  lookbookTitle8_En = 'Penthouse Berlin';
  lookbookTitle9_En = 'Villa Hambourg';
  lookbookTitle10_En = 'Villa Vienne';
  lookbookTitle11_En = 'Penthouse Hambourg';
  lookbookTitle12_En = 'House Hambourg';
  lookbookTitle13_En = 'House Miami';
  lookbookTitle14_En = 'House Duesseldorf';
  lookbookTitle15_En = 'Villa Wiesbaden ';
  lookbookTitle16_En = 'House Helsinki';
  lookbookTitle17_En = 'Villa Hambourg II';
  lookbookTitle18_En = 'Villa Regensburg';
  lookbookTitle19_En = 'House Bielefeld';
  lookbookTitle20_En = 'Villa Köln';
  lookbookTitle21_En = 'Loft Hambourg';
  lookbookTitle22_En = 'Villa Liechtenstein';
  lookbookTitle23_En = 'Appartment Hambourg';
  lookbookTitle24_En = 'Maisonette Bonn';
  lookbookTitle25_En = 'Villa Kopenhagen';
  lookbookTitle26_En = 'House Copenhague';
  lookbookDes1_En = 'Hot-rolled Stainless Steel SilverTouch';
  lookbookDes2_En = 'matt lacquer, veneer, quartzite';
  lookbookDes3_En = 'matt lacquer grey brown';
  lookbookDes4_En = 'laminate white/darkgrey';
  lookbookDes5_En = 'Laminate nano black, stainless steel silvertouch';
  lookbookDes6_En = 'Matt lacquer white';
  lookbookDes7_En = 'laminate grey brown';
  lookbookDes8_En = 'UNIQUE, Noble Veneer Collection';
  lookbookDes9_En = 'Corian® Glacier White';
  lookbookDes10_En = 'stainless steel silvertouch, laminate pure white';
  lookbookDes11_En = 'Phyllit, veneer with sandblast surface';
  lookbookDes12_En = 'stainless steel silvertouch, laminate polymatt';
  lookbookDes13_En = 'Macassar veneer high gloss, Corian';
  lookbookDes14_En = 'quartz-glass, matt lacquer';
  lookbookDes15_En = 'porphyry lava, matt lacquer';
  lookbookDes16_En = 'Mineral, high-gloss finish';
  lookbookDes17_En = 'basalt stone, aluminium';
  lookbookDes18_En = 'granite, glass';
  lookbookDes19_En = 'high-gloss lacquer, stainless steel silvertouch';
  lookbookDes20_En = 'quartzite, high-gloss finish';
  lookbookDes21_En = 'wood, laminate';
  lookbookDes22_En = 'mineral material, veneer';
  lookbookDes23_En = 'granite, high-gloss lacquer';
  lookbookDes24_En = 'granite, matt lacquer';
  lookbookDes25_En = 'corian, block veneer';
  lookbookDes26_En = 'mineral, acrylux camé';

  constructor() {
    this.setLanguage('fr');
  }


  setLanguage(specifiedLanguage: string) {
    if (specifiedLanguage !== this.language) {
      this.language = specifiedLanguage;
      if (this.language === 'fr') {
        this.navItem1 = this.navItemFr1;
        this.navItem2 = this.navItemFr2;
        this.navItem3 = this.navItemFr3;
        this.navItem4 = this.navItemFr4;
        this.navItem5 = this.navItemFr5;
        this.navItem6 = this.navItemFr6;
        this.navItem7 = this.navItemFr7;
        this.homeTitle1 = this.homeTitleFr1;
        this.homeTitle2 = this.homeTitleFr2;
        this.homeContent1 =  this.homeContentFr1;
        this.homeContent2 =  this.homeContentFr2;
        this.homeContent3 =  this.homeContentFr3;
        this.homeContent4 =  this.homeContentFr4;
        this.homeContent5 =  this.homeContentFr5;
        this.lookbookTitle1 = this.lookbookTitle1_Fr;
        this.lookbookTitle2 = this.lookbookTitle2_Fr;
        this.lookbookTitle3 = this.lookbookTitle3_Fr;
        this.lookbookTitle4 = this.lookbookTitle4_Fr;
        this.lookbookTitle5 = this.lookbookTitle5_Fr;
        this.lookbookTitle6 = this.lookbookTitle6_Fr;
        this.lookbookTitle7 = this.lookbookTitle7_Fr;
        this.lookbookTitle8 = this.lookbookTitle8_Fr;
        this.lookbookTitle9 = this.lookbookTitle9_Fr;
        this.lookbookTitle10 = this.lookbookTitle10_Fr;
        this.lookbookTitle11 = this.lookbookTitle11_Fr;
        this.lookbookTitle12 = this.lookbookTitle12_Fr;
        this.lookbookTitle13 = this.lookbookTitle13_Fr;
        this.lookbookTitle14 = this.lookbookTitle14_Fr;
        this.lookbookTitle15 = this.lookbookTitle15_Fr;
        this.lookbookTitle16 = this.lookbookTitle16_Fr;
        this.lookbookTitle17 = this.lookbookTitle17_Fr;
        this.lookbookTitle18 = this.lookbookTitle18_Fr;
        this.lookbookTitle19 = this.lookbookTitle19_Fr;
        this.lookbookTitle20 = this.lookbookTitle20_Fr;
        this.lookbookTitle21 = this.lookbookTitle21_Fr;
        this.lookbookTitle22 = this.lookbookTitle22_Fr;
        this.lookbookTitle23 = this.lookbookTitle23_Fr;
        this.lookbookTitle24 = this.lookbookTitle24_Fr;
        this.lookbookTitle25 = this.lookbookTitle25_Fr;
        this.lookbookTitle26 = this.lookbookTitle26_Fr;

        this.lookbookDes1 = this.lookbookDes1_Fr;
        this.lookbookDes2 = this.lookbookDes2_Fr;
        this.lookbookDes3 = this.lookbookDes3_Fr;
        this.lookbookDes4 = this.lookbookDes4_Fr;
        this.lookbookDes5 = this.lookbookDes5_Fr;
        this.lookbookDes6 = this.lookbookDes6_Fr;
        this.lookbookDes7 = this.lookbookDes7_Fr;
        this.lookbookDes8 = this.lookbookDes8_Fr;
        this.lookbookDes9 = this.lookbookDes9_Fr;
        this.lookbookDes10 = this.lookbookDes10_Fr;
        this.lookbookDes11 = this.lookbookDes11_Fr;
        this.lookbookDes12 = this.lookbookDes12_Fr;
        this.lookbookDes13 = this.lookbookDes13_Fr;
        this.lookbookDes14 = this.lookbookDes14_Fr;
        this.lookbookDes15 = this.lookbookDes15_Fr;
        this.lookbookDes16 = this.lookbookDes16_Fr;
        this.lookbookDes17 = this.lookbookDes17_Fr;
        this.lookbookDes18 = this.lookbookDes18_Fr;
        this.lookbookDes19 = this.lookbookDes19_Fr;
        this.lookbookDes20 = this.lookbookDes20_Fr;
        this.lookbookDes21 = this.lookbookDes21_Fr;
        this.lookbookDes22 = this.lookbookDes22_Fr;
        this.lookbookDes23 = this.lookbookDes23_Fr;
        this.lookbookDes24 = this.lookbookDes24_Fr;
        this.lookbookDes25 = this.lookbookDes25_Fr;
        this.lookbookDes26 = this.lookbookDes26_Fr;
      } else if (this.language === 'en') {
        this.navItem1 = this.navItemEn1;
        this.navItem2 = this.navItemEn2;
        this.navItem3 = this.navItemEn3;
        this.navItem4 = this.navItemEn4;
        this.navItem5 = this.navItemEn5;
        this.navItem6 = this.navItemEn6;
        this.navItem7 = this.navItemEn7;
        this.homeTitle1 = this.homeTitleEn1;
        this.homeTitle2 = this.homeTitleEn2;
        this.homeContent1 = this.homeContentEn1;
        this.homeContent2 = this.homeContentEn2;
        this.homeContent3 = this.homeContentEn3;
        this.homeContent4 = this.homeContentEn4;
        this.homeContent5 = this.homeContentEn5;
        this.lookbookTitle1 = this.lookbookTitle1_En;
        this.lookbookTitle2 = this.lookbookTitle2_En;
        this.lookbookTitle3 = this.lookbookTitle3_En;
        this.lookbookTitle4 = this.lookbookTitle4_En;
        this.lookbookTitle5 = this.lookbookTitle5_En;
        this.lookbookTitle6 = this.lookbookTitle6_En;
        this.lookbookTitle7 = this.lookbookTitle7_En;
        this.lookbookTitle8 = this.lookbookTitle8_En;
        this.lookbookTitle9 = this.lookbookTitle9_En;
        this.lookbookTitle10 = this.lookbookTitle10_En;
        this.lookbookTitle11 = this.lookbookTitle11_En;
        this.lookbookTitle12 = this.lookbookTitle12_En;
        this.lookbookTitle13 = this.lookbookTitle13_En;
        this.lookbookTitle14 = this.lookbookTitle14_En;
        this.lookbookTitle15 = this.lookbookTitle15_En;
        this.lookbookTitle16 = this.lookbookTitle16_En;
        this.lookbookTitle17 = this.lookbookTitle17_En;
        this.lookbookTitle18 = this.lookbookTitle18_En;
        this.lookbookTitle19 = this.lookbookTitle19_En;
        this.lookbookTitle20 = this.lookbookTitle20_En;
        this.lookbookTitle21 = this.lookbookTitle21_En;
        this.lookbookTitle22 = this.lookbookTitle22_En;
        this.lookbookTitle23 = this.lookbookTitle23_En;
        this.lookbookTitle24 = this.lookbookTitle24_En;
        this.lookbookTitle25 = this.lookbookTitle25_En;
        this.lookbookTitle26 = this.lookbookTitle26_En;

        this.lookbookDes1 = this.lookbookDes1_En;
        this.lookbookDes2 = this.lookbookDes2_En;
        this.lookbookDes3 = this.lookbookDes3_En;
        this.lookbookDes4 = this.lookbookDes4_En;
        this.lookbookDes5 = this.lookbookDes5_En;
        this.lookbookDes6 = this.lookbookDes6_En;
        this.lookbookDes7 = this.lookbookDes7_En;
        this.lookbookDes8 = this.lookbookDes8_En;
        this.lookbookDes9 = this.lookbookDes9_En;
        this.lookbookDes10 = this.lookbookDes10_En;
        this.lookbookDes11 = this.lookbookDes11_En;
        this.lookbookDes12 = this.lookbookDes12_En;
        this.lookbookDes13 = this.lookbookDes13_En;
        this.lookbookDes14 = this.lookbookDes14_En;
        this.lookbookDes15 = this.lookbookDes15_En;
        this.lookbookDes16 = this.lookbookDes16_En;
        this.lookbookDes17 = this.lookbookDes17_En;
        this.lookbookDes18 = this.lookbookDes18_En;
        this.lookbookDes19 = this.lookbookDes19_En;
        this.lookbookDes20 = this.lookbookDes20_En;
        this.lookbookDes21 = this.lookbookDes21_En;
        this.lookbookDes22 = this.lookbookDes22_En;
        this.lookbookDes23 = this.lookbookDes23_En;
        this.lookbookDes24 = this.lookbookDes24_En;
        this.lookbookDes25 = this.lookbookDes25_En;
        this.lookbookDes26 = this.lookbookDes26_En;
      }
    }
  }

}
