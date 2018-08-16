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

  lookbookIntro: string;

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

  uniqueIntro: string;
  uniqueTitle1: string;
  uniqueTitle2: string;
  uniqueTitle3: string;
  uniqueTitle4: string;
  uniqueTitle5: string;
  uniqueTitle6: string;
  uniqueTitle7: string;
  uniqueTitle8: string;
  uniqueTitle9: string;
  uniqueTitle10: string;
  uniqueTitle11: string;
  uniqueTitle12: string;
  uniqueTitle13: string;
  uniqueTitle14: string;
  uniqueTitle15: string;
  uniqueDes1: string;
  uniqueDes2: string;
  uniqueDes3: string;
  uniqueDes4: string;
  uniqueDes5: string;
  uniqueDes6: string;
  uniqueDes7: string;
  uniqueDes8: string;
  uniqueDes9: string;
  uniqueDes10: string;
  uniqueDes11: string;
  uniqueDes12: string;
  uniqueDes13: string;
  uniqueDes14: string;
  uniqueDes15: string;

  worksIntro: string;
  worksTitle1: string;
  worksTitle2: string;
  worksTitle3: string;
  worksTitle4: string;
  worksTitle5: string;
  worksDes1: string;
  worksDes2: string;
  worksDes3: string;
  worksDes4: string;
  worksDes5: string;

  e30Intro: string;
  e30Title1: string;
  e30Title2: string;
  e30Title3: string;
  e30Title4: string;
  e30Title5: string;
  e30Title6: string;
  e30Des1: string;
  e30Des2: string;
  e30Des3: string;
  e30Des4: string;
  e30Des5: string;
  e30Des6: string;
  e30Accessories: string;
  e30AccessoriesTitle1: string;
  e30AccessoriesTitle2: string;
  e30AccessoriesTitle3: string;
  e30AccessoriesDes1: string;
  e30AccessoriesDes2: string;
  e30AccessoriesDes3: string;



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
  lookbookIntro_Fr = 'Rien ne vaut des photos de projets achevés pour présenter de manière aussi réaliste et authentique que possible' +
  'l’espace de vie qu’est la cuisine. Photographiées aux domiciles de nos clients, ces cuisines illustrent de manière exemplaire ' +
  'l’abondance de matériaux,' +
  'de couleurs et de possibilités d’agencement qui permettent de créer des solutions sur mesure et personnalisées pour chacun.' +
  'Et ces images éliminent la' +
  'possibilité, comme en studio photographique, de manipuler les choses pour les embellir ou bien de travailler dans des situations' +
  'spatiales peu réalistes.' +
  'Les installations présentées ici sont photographiées « live on stage » au sens strict du terme et elles offrent une grande' +
  'authenticité. Nous adressons' +
  'nos remerciements à tous les maîtres d’ouvrage qui nous ont permis ces reportages photos. Ainsi, évidemment, qu’aux partenaires' +
  'eggersmann qui ont conçu' +
  'ces cuisines avec enthousiasme, savoir-faire et beaucoup de finesse.';
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

  uniqueIntro_Fr = 'Depuis 2006, eggersmann a fait de l’idée une réalité : fabriquer et toujours renouveler' +
  'une collection de cuisines et d’équipements dont l’intemporalité et le minimalisme soient difficilement' +
  'égalables. Et le nom UNIQUE parle de lui-même. L’accent est mis sur l’individualité ainsi que sur des' +
  'matériaux exceptionnels et prestigieux. L’homogénéité de toutes les surfaces concernées est un principe' +
  'fondamental de ce système. Ainsi, les surfaces frontales et latérales, de même que les éléments de préhension' +
  'et les surfaces de travail sont tous en un seul et même matériau. En plus du CORIAN®, diverses variétés de' +
  'pierre et de granit peuvent être utilisées, de même que des pierres composites. En outre, des détails complexes' +
  'tels que des joints d’onglet sont utilisés sur les façades et les parties latérales.';
  uniqueTitle1_Fr = 'Beola Nera';
  uniqueTitle2_Fr = 'Carbono';
  uniqueTitle3_Fr = 'Arabescato';
  uniqueTitle4_Fr = 'Pietra Viva';
  uniqueTitle5_Fr = 'Grigio Carnico';
  uniqueTitle6_Fr = 'Valcamonica';
  uniqueTitle7_Fr = 'Nero Assoluto';
  uniqueTitle8_Fr = 'Graphite Brown';
  uniqueTitle9_Fr = 'Luna Grey';
  uniqueTitle10_Fr = 'Elegant brown';
  uniqueTitle11_Fr = 'Taj Mahal';
  uniqueTitle12_Fr = 'Silver Touch';
  uniqueTitle13_Fr = 'Lacque mate';
  uniqueTitle14_Fr = 'Volcano';
  uniqueTitle15_Fr = 'Slate';
  uniqueDes1_Fr = 'Quartzite';
  uniqueDes2_Fr = 'Quartzite';
  uniqueDes3_Fr = 'Marble';
  uniqueDes4_Fr = 'Marble';
  uniqueDes5_Fr = 'Limestone';
  uniqueDes6_Fr = 'Porphyry';
  uniqueDes7_Fr = 'Granite';
  uniqueDes8_Fr = 'Limestone';
  uniqueDes9_Fr = 'Granite';
  uniqueDes10_Fr = 'Granite';
  uniqueDes11_Fr = 'Quartzite';
  uniqueDes12_Fr = 'Stainless Steel';
  uniqueDes13_Fr = 'Quartzite, Lacquer';
  uniqueDes14_Fr = 'Granite';
  uniqueDes15_Fr = 'Montank Black Slate';

  worksIntro_Fr = 'Le concept de work’s repose sur la vision d’une cuisine "atelier" qui met l’accent' +
  'sur la fonctionnalité, en plus de l’esthétique et du design. Petites distances, organisation parfaite,' +
  'accès, structure, vision d’ensemble - semblable à une cuisine professionelle "artisanale", cuisiner' +
  'devient sophistiqué avec work’s.';
  worksTitle1_Fr = 'work’s black stripes';
  worksTitle2_Fr = 'work’s miroir';
  worksTitle3_Fr = 'work’s turn';
  worksTitle4_Fr = 'work’s islands';
  worksTitle5_Fr = 'work’s bridge';
  e30Intro_Fr = 'Grâce à la fabrication uniquement sur commande, nous pouvons également réaliser des commandes' +
  'personnalisées en parallèle à notre gamme très large de séries. Le point fort de notre développement produit' +
  'réside sur le design contemporain et moderne. En termes de qualité, nous utilisons exclusivement des composants' +
  'de première qualité, en cherchant la meilleure solution technique pour tout profil d’exigences.';
  e30Title1_Fr = 'Aluminium Quartzite';
  e30Title2_Fr = 'Béton Chêne Bois Ancien';
  e30Title3_Fr = 'Stratifié blanc pur';
  e30Title4_Fr = 'Inox tourbilloné';
  e30Title5_Fr = 'Quartz Noyer';
  e30Title6_Fr = 'Chêne Stratifié';
  e30Des1_Fr = 'Aluminium Quartzite';
  e30Des2_Fr = 'Inox, Bois authentique';
  e30Des3_Fr = 'Inox, Stratifié';
  e30Des4_Fr = 'Inox, Laque Mate';
  e30Des5_Fr = 'Quartz, Noyer';
  e30Des6_Fr = 'Stratifié, Inox';
  e30Accessories_Fr = 'Accessoires';
  e30AccessoriesTitle1_Fr = 'Aluminium système pour niche';
  e30AccessoriesTitle2_Fr = 'Boxtec';
  e30AccessoriesTitle3_Fr = 'Tiroirs Aluminium';
  e30AccessoriesDes1_Fr = 'Aluminium';
  e30AccessoriesDes2_Fr = 'Aluminium, Bois';
  e30AccessoriesDes3_Fr = 'Aluminium';

  // ENGLISH ----------------------------------------------------------------------------------------------------
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
  lookbookIntro_En = 'Kitchen space is best presented most realistically and authentically with pictures of finished jobs.' +
  'These kitchens,' +
  'which were photographed in our customers’ homes, represent examples of the abundance of materials, colours and planning' +
  'possibilities for' +
  'creating custom solutions for individual people. And they prohibit us from manipulating things to make them look better or' +
  'working with unrealistic' +
  'space situations, as in a photo studio. The equipment shown is literally portrayed “live on stage” and offers the highest' +
  'authenticity. We thank all those' +
  'clients who made these pictorial reports possible. And, of course, also all eggersmann partners who planned these kitchens' +
  'with enthusiasm, expertise and a' +
  'great deal of sensitivity.';
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
  lookbookDes17_En = 'basalt stone, aluminum';
  lookbookDes18_En = 'granite, glass';
  lookbookDes19_En = 'high-gloss lacquer, stainless steel silvertouch';
  lookbookDes20_En = 'quartzite, high-gloss finish';
  lookbookDes21_En = 'wood, laminate';
  lookbookDes22_En = 'mineral material, veneer';
  lookbookDes23_En = 'granite, high-gloss lacquer';
  lookbookDes24_En = 'granite, matt lacquer';
  lookbookDes25_En = 'corian, block veneer';
  lookbookDes26_En = 'mineral, acrylux camé';

  uniqueIntro_En = 'Since 2006, eggersmann has been busy realising the idea of manufacturing and further developing a collection' +
  'of kitchens and equipment which can hardly be matched for its timelessness and minimalism. The name UNIQUE really says it all.' +
  'The focus is on individuality and also exceptional and exquisite materials. A decisive and fundamental idea for this system is the' +
  'homogeneity of all relevant surfaces. Front and side surfaces and also handles and working surfaces are made of just one identical' +
  'material. In addition to CORIAN®, various types of stone and granite as well as mineral materials can be used. Intricate details' +
  'such as mitre joints are applied on fronts and side panels.';
  uniqueTitle1_En = 'Beola Nera';
  uniqueTitle2_En = 'Carbono';
  uniqueTitle3_En = 'Arabescato';
  uniqueTitle4_En = 'Pietra Viva';
  uniqueTitle5_En = 'Grigio Carnico';
  uniqueTitle6_En = 'Valcamonica';
  uniqueTitle7_En = 'Nero Assoluto';
  uniqueTitle8_En = 'Grafite Brown';
  uniqueTitle9_En = 'Luna Grey';
  uniqueTitle10_En = 'Elegant brown';
  uniqueTitle11_En = 'Taj Mahal';
  uniqueTitle12_En = 'Silver Touch';
  uniqueTitle13_En = 'Matt Lacquer';
  uniqueTitle14_En = 'Volcano';
  uniqueTitle15_En = 'Slate';
  uniqueDes1_En = 'Quartzite';
  uniqueDes2_En = 'Quartzite';
  uniqueDes3_En = 'Marbre';
  uniqueDes4_En = 'Marbre';
  uniqueDes5_En = 'Pierre Calcaire';
  uniqueDes6_En = 'Porphyre';
  uniqueDes7_En = 'Granite';
  uniqueDes8_En = 'Limestone';
  uniqueDes9_En = 'Granite';
  uniqueDes10_En = 'Granite';
  uniqueDes11_En = 'Quartzite';
  uniqueDes12_En = 'Inox';
  uniqueDes13_En = 'Quartzite, Laque Mate';
  uniqueDes14_En = 'Granite';
  uniqueDes15_En = 'Ardoise Montank Black';

  worksIntro_En = 'The concept of the work’s is based on the vision of a kitchen "workshop" that places emphasis on the functionality' +
  'in addition' +
  'to aesthetics and design. Short distances, perfect arrangement, access, structure, overview - similar to a professional kitchen' +
  '"skilled" cooking' +
  'becomes sophisticated with the work’s.';
  worksTitle1_En = 'work’s black stripes';
  worksTitle2_En = 'work’s mirror type';
  worksTitle3_En = 'work’s turn';
  worksTitle4_En = 'work’s islands';
  worksTitle5_En = 'work’s bridge';
  e30Intro_En = 'By the exclusively order-based production, we can cater for any special requirements in addition to the extensive' +
  'standard range. The focus of our product development is on contemporary and modern design. Only top quality components are used,' +
  'whereby we look for the best possible technical solution for each requirement profile. ';
  e30Title1_En = 'Aluminum Quartzite';
  e30Title2_En = 'Concrete Vintage Oak';
  e30Title3_En = 'Laminate pure white';
  e30Title4_En = 'Stainless eccentric';
  e30Title5_En = 'Quartz, Walnut';
  e30Title6_En = 'Oak, Laminate';
  e30Des1_En = 'Aluminum Quartzite';
  e30Des2_En = 'Stainless Steel, Ebony';
  e30Des3_En = 'Stainless steel, Elm';
  e30Des4_En = 'Stainless, Matt Lacquer';
  e30Des5_En = 'Quartz, Walnut';
  e30Des6_En = 'Oak, Laminate';
  e30Accessories_En = 'Accessories';
  e30AccessoriesTitle1_En = 'Aluminum Niche System';
  e30AccessoriesTitle2_En = 'Boxtec';
  e30AccessoriesTitle3_En = 'Aluminum Drawer System';
  e30AccessoriesDes1_En = 'Aluminum';
  e30AccessoriesDes2_En = 'Aluminum, Wood';
  e30AccessoriesDes3_En = 'Aluminum';


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
        this.lookbookIntro = this.lookbookIntro_Fr;
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

        this.uniqueIntro = this.uniqueIntro_Fr;
        this.uniqueTitle1 = this.uniqueTitle1_Fr;
        this.uniqueTitle2 = this.uniqueTitle2_Fr;
        this.uniqueTitle3 = this.uniqueTitle3_Fr;
        this.uniqueTitle4 = this.uniqueTitle4_Fr;
        this.uniqueTitle5 = this.uniqueTitle5_Fr;
        this.uniqueTitle6 = this.uniqueTitle6_Fr;
        this.uniqueTitle7 = this.uniqueTitle7_Fr;
        this.uniqueTitle8 = this.uniqueTitle8_Fr;
        this.uniqueTitle9 = this.uniqueTitle9_Fr;
        this.uniqueTitle10 = this.uniqueTitle10_Fr;
        this.uniqueTitle11 = this.uniqueTitle11_Fr;
        this.uniqueTitle12 = this.uniqueTitle12_Fr;
        this.uniqueTitle13 = this.uniqueTitle13_Fr;
        this.uniqueTitle14 = this.uniqueTitle14_Fr;
        this.uniqueTitle15 = this.uniqueTitle15_Fr;
        this.uniqueDes1 = this.uniqueDes1_Fr;
        this.uniqueDes2 = this.uniqueDes2_Fr;
        this.uniqueDes3 = this.uniqueDes3_Fr;
        this.uniqueDes4 = this.uniqueDes4_Fr;
        this.uniqueDes5 = this.uniqueDes5_Fr;
        this.uniqueDes6 = this.uniqueDes6_Fr;
        this.uniqueDes7 = this.uniqueDes7_Fr;
        this.uniqueDes8 = this.uniqueDes8_Fr;
        this.uniqueDes9 = this.uniqueDes9_Fr;
        this.uniqueDes10 = this.uniqueDes10_Fr;
        this.uniqueDes11 = this.uniqueDes11_Fr;
        this.uniqueDes12 = this.uniqueDes12_Fr;
        this.uniqueDes13 = this.uniqueDes13_Fr;
        this.uniqueDes14 = this.uniqueDes14_Fr;
        this.uniqueDes15 = this.uniqueDes15_Fr;
        this.worksIntro = this.worksIntro_Fr;
        this.worksTitle1 = this.worksTitle1_Fr;
        this.worksTitle2 = this.worksTitle2_Fr;
        this.worksTitle3 = this.worksTitle3_Fr;
        this.worksTitle4 = this.worksTitle4_Fr;
        this.worksTitle5 = this.worksTitle5_Fr;

        this.e30Intro = this.e30Intro_Fr;
        this.e30Title1 = this.e30Title1_Fr;
        this.e30Title2 = this.e30Title2_Fr;
        this.e30Title3 = this.e30Title3_Fr;
        this.e30Title4 = this.e30Title4_Fr;
        this.e30Title5 = this.e30Title5_Fr;
        this.e30Title6 = this.e30Title6_Fr;
        this.e30Des1 = this.e30Des1_Fr;
        this.e30Des2 = this.e30Des2_Fr;
        this.e30Des3 = this.e30Des3_Fr;
        this.e30Des4 = this.e30Des4_Fr;
        this.e30Des5 = this.e30Des5_Fr;
        this.e30Des6 = this.e30Des6_Fr;
        this.e30Accessories = this.e30Accessories_Fr;
        this.e30AccessoriesTitle1 = this.e30AccessoriesTitle1_Fr;
        this.e30AccessoriesTitle2 = this.e30AccessoriesTitle2_Fr;
        this.e30AccessoriesTitle3 = this.e30AccessoriesTitle3_Fr;
        this.e30AccessoriesDes1 = this.e30AccessoriesDes1_Fr;
        this.e30AccessoriesDes2 = this.e30AccessoriesDes2_Fr;
        this.e30AccessoriesDes3 = this.e30AccessoriesDes3_Fr;
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
        this.lookbookIntro = this.lookbookIntro_En;
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
        this.uniqueIntro = this.uniqueIntro_En;
        this.uniqueIntro = this.uniqueIntro_En;
        this.uniqueTitle1 = this.uniqueTitle1_En;
        this.uniqueTitle2 = this.uniqueTitle2_En;
        this.uniqueTitle3 = this.uniqueTitle3_En;
        this.uniqueTitle4 = this.uniqueTitle4_En;
        this.uniqueTitle5 = this.uniqueTitle5_En;
        this.uniqueTitle6 = this.uniqueTitle6_En;
        this.uniqueTitle7 = this.uniqueTitle7_En;
        this.uniqueTitle8 = this.uniqueTitle8_En;
        this.uniqueTitle9 = this.uniqueTitle9_En;
        this.uniqueTitle10 = this.uniqueTitle10_En;
        this.uniqueTitle11 = this.uniqueTitle11_En;
        this.uniqueTitle12 = this.uniqueTitle12_En;
        this.uniqueTitle13 = this.uniqueTitle13_En;
        this.uniqueTitle14 = this.uniqueTitle14_En;
        this.uniqueTitle15 = this.uniqueTitle15_En;
        this.uniqueDes1 = this.uniqueDes1_En;
        this.uniqueDes2 = this.uniqueDes2_En;
        this.uniqueDes3 = this.uniqueDes3_En;
        this.uniqueDes4 = this.uniqueDes4_En;
        this.uniqueDes5 = this.uniqueDes5_En;
        this.uniqueDes6 = this.uniqueDes6_En;
        this.uniqueDes7 = this.uniqueDes7_En;
        this.uniqueDes8 = this.uniqueDes8_En;
        this.uniqueDes9 = this.uniqueDes9_En;
        this.uniqueDes10 = this.uniqueDes10_En;
        this.uniqueDes11 = this.uniqueDes11_En;
        this.uniqueDes12 = this.uniqueDes12_En;
        this.uniqueDes13 = this.uniqueDes13_En;
        this.uniqueDes14 = this.uniqueDes14_En;
        this.uniqueDes15 = this.uniqueDes15_En;
        this.worksIntro = this.worksIntro_En;
        this.worksTitle1 = this.worksTitle1_En;
        this.worksTitle2 = this.worksTitle2_En;
        this.worksTitle3 = this.worksTitle3_En;
        this.worksTitle4 = this.worksTitle4_En;
        this.worksTitle5 = this.worksTitle5_En;

        this.e30Intro = this.e30Intro_En;
        this.e30Title1 = this.e30Title1_En;
        this.e30Title2 = this.e30Title2_En;
        this.e30Title3 = this.e30Title3_En;
        this.e30Title4 = this.e30Title4_En;
        this.e30Title5 = this.e30Title5_En;
        this.e30Title6 = this.e30Title6_En;
        this.e30Des1 = this.e30Des1_En;
        this.e30Des2 = this.e30Des2_En;
        this.e30Des3 = this.e30Des3_En;
        this.e30Des4 = this.e30Des4_En;
        this.e30Des5 = this.e30Des5_En;
        this.e30Des6 = this.e30Des6_En;
        this.e30Accessories = this.e30Accessories_En;
        this.e30AccessoriesTitle1 = this.e30AccessoriesTitle1_En;
        this.e30AccessoriesTitle2 = this.e30AccessoriesTitle2_En;
        this.e30AccessoriesTitle3 = this.e30AccessoriesTitle3_En;
        this.e30AccessoriesDes1 = this.e30AccessoriesDes1_En;
        this.e30AccessoriesDes2 = this.e30AccessoriesDes2_En;
        this.e30AccessoriesDes3 = this.e30AccessoriesDes3_En;
      }
    }
  }

}
