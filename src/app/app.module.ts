import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule,
         MatCheckboxModule,
         MatStepperModule,
         MatFormFieldModule,
         MatInputModule,
         MatRadioModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

import { AgmCoreModule } from '@agm/core';
import { LookbookComponent } from './lookbook/lookbook.component';
import { E30Component } from './e30/e30.component';
import { UniqueComponent } from './unique/unique.component';
import { WorksComponent } from './works/works.component';
import { SeasideResortComponent } from './lookbook/seaside-resort/seaside-resort.component';
import { LondonComponent } from './lookbook/london/london.component';
import { MaisonHambourgComponent } from './lookbook/maison-hambourg/maison-hambourg.component';
import { VillaSalzburgComponent } from './lookbook/villa-salzburg/villa-salzburg.component';
import { VillaInnsbruckComponent } from './lookbook/villa-innsbruck/villa-innsbruck.component';
import { MaisonSchweinfurtComponent } from './lookbook/maison-schweinfurt/maison-schweinfurt.component';
import { MaisonHambourg2Component } from './lookbook/maison-hambourg2/maison-hambourg2.component';
import { AuventBerlinComponent } from './lookbook/auvent-berlin/auvent-berlin.component';
import { VillaHambourgComponent } from './lookbook/villa-hambourg/villa-hambourg.component';
import { VillaVienneComponent } from './lookbook/villa-vienne/villa-vienne.component';
import { AuventHambourgComponent } from './lookbook/auvent-hambourg/auvent-hambourg.component';
import { MaisonHeidenheimComponent } from './lookbook/maison-heidenheim/maison-heidenheim.component';
import { MaisonMiamiComponent } from './lookbook/maison-miami/maison-miami.component';
import { MaisonDuesseldorfComponent } from './lookbook/maison-duesseldorf/maison-duesseldorf.component';
import { VillaWiesbadenComponent } from './lookbook/villa-wiesbaden/villa-wiesbaden.component';
import { MaisonHelsinkiComponent } from './lookbook/maison-helsinki/maison-helsinki.component';
import { VillaHambourg2Component } from './lookbook/villa-hambourg2/villa-hambourg2.component';
import { VillaRegensburgComponent } from './lookbook/villa-regensburg/villa-regensburg.component';
import { MaisonBielefeldComponent } from './lookbook/maison-bielefeld/maison-bielefeld.component';
import { VillaCologneComponent } from './lookbook/villa-cologne/villa-cologne.component';
import { LoftHambourgComponent } from './lookbook/loft-hambourg/loft-hambourg.component';
import { VillaLiechtensteinComponent } from './lookbook/villa-liechtenstein/villa-liechtenstein.component';
import { AppartementHambourgComponent } from './lookbook/appartement-hambourg/appartement-hambourg.component';
import { MaisonetteBonnComponent } from './lookbook/maisonette-bonn/maisonette-bonn.component';
import { VillaKopenhagenComponent } from './lookbook/villa-kopenhagen/villa-kopenhagen.component';
import { MaisonCopenhagueComponent } from './lookbook/maison-copenhague/maison-copenhague.component';
import { BeolaNeraComponent } from './unique/beola-nera/beola-nera.component';
import { CarbonoComponent } from './unique/carbono/carbono.component';
import { ArabescatoComponent } from './unique/arabescato/arabescato.component';
import { PietraVivaComponent } from './unique/pietra-viva/pietra-viva.component';
import { GrigioComponent } from './unique/grigio/grigio.component';
import { ValcamonicaComponent } from './unique/valcamonica/valcamonica.component';
import { NeroComponent } from './unique/nero/nero.component';
import { GraphiteComponent } from './unique/graphite/graphite.component';
import { LunaGreyComponent } from './unique/luna-grey/luna-grey.component';
import { ElegantbrownComponent } from './unique/elegantbrown/elegantbrown.component';
import { TajMahalComponent } from './unique/taj-mahal/taj-mahal.component';
import { SilverTouchComponent } from './unique/silver-touch/silver-touch.component';
import { LacquemateComponent } from './unique/lacquemate/lacquemate.component';
import { VolcanoComponent } from './unique/volcano/volcano.component';
import { SlateComponent } from './unique/slate/slate.component';
import { loadQueryList } from '../../node_modules/@angular/core/src/render3/instructions';
import { DistributorsComponent } from './distributors/distributors.component';
import { WorksBlackStripesComponent } from './works/works-black-stripes/works-black-stripes.component';
import { WorksMirrorTypeComponent } from './works/works-mirror-type/works-mirror-type.component';
import { WorksTurnComponent } from './works/works-turn/works-turn.component';
import { WorksIslandComponent } from './works/works-island/works-island.component';
import { WorksBridgeComponent } from './works/works-bridge/works-bridge.component';
import { AluminumQuartziteComponent } from './e30/aluminum-quartzite/aluminum-quartzite.component';
import { ConcreteVintageOakComponent } from './e30/concrete-vintage-oak/concrete-vintage-oak.component';
import { LaminatePureWhiteComponent } from './e30/laminate-pure-white/laminate-pure-white.component';
import { StainlessExcentricComponent } from './e30/stainless-excentric/stainless-excentric.component';
import { QuartzWalnutComponent } from './e30/quartz-walnut/quartz-walnut.component';
import { OakLaminateComponent } from './e30/oak-laminate/oak-laminate.component';
import { AluminumNicheSystemComponent } from './e30/aluminum-niche-system/aluminum-niche-system.component';
import { BoxtecComponent } from './e30/boxtec/boxtec.component';
import { AluminumDrawerSystemComponent } from './e30/aluminum-drawer-system/aluminum-drawer-system.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'distributors', component: DistributorsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'lookbook', component: LookbookComponent },
  { path: 'lookbook/seaside', component: SeasideResortComponent },
  { path: 'lookbook/london', component: LondonComponent },
  { path: 'lookbook/maison-heidenheim', component: MaisonHeidenheimComponent },
  { path: 'lookbook/villa-salzburg', component: VillaSalzburgComponent },
  { path: 'lookbook/villa-innsbruck', component: VillaInnsbruckComponent },
  { path: 'lookbook/maison-schweinfurt', component: MaisonSchweinfurtComponent },
  { path: 'lookbook/maison-hambourg2', component: MaisonHambourg2Component },
  { path: 'lookbook/auvent-berlin', component: AuventBerlinComponent },
  { path: 'lookbook/villa-hambourg', component: VillaHambourgComponent },
  { path: 'lookbook/villa-vienne', component: VillaVienneComponent },
  { path: 'lookbook/auvent-hambourg', component: AuventHambourgComponent },
  { path: 'lookbook/maison-hambourg', component: MaisonHambourgComponent },
  { path: 'lookbook/maison-miami', component: MaisonMiamiComponent },
  { path: 'lookbook/maison-duesseldorf', component: MaisonDuesseldorfComponent },
  { path: 'lookbook/villa-wiesbaden', component: VillaWiesbadenComponent },
  { path: 'lookbook/maison-helsinki', component: MaisonHelsinkiComponent },
  { path: 'lookbook/villa-hambourg2', component: VillaHambourg2Component },
  { path: 'lookbook/villa-regensburg', component: VillaRegensburgComponent },
  { path: 'lookbook/maison-bielefeld', component: MaisonBielefeldComponent },
  { path: 'lookbook/villa-cologne', component: VillaCologneComponent },
  { path: 'lookbook/loft-hambourg', component: LoftHambourgComponent },
  { path: 'lookbook/villa liechtenstein', component: VillaLiechtensteinComponent },
  { path: 'lookbook/appartement-hambourg', component: AppartementHambourgComponent },
  { path: 'lookbook/maisonette-bonn', component: MaisonetteBonnComponent },
  { path: 'lookbook/villa-kopenhagen', component: VillaKopenhagenComponent },
  { path: 'lookbook/maison-copenhague', component: MaisonCopenhagueComponent },
  { path: 'unique/arabescato', component: ArabescatoComponent },
  { path: 'unique/beola-nera', component: BeolaNeraComponent },
  { path: 'unique/carbono', component: CarbonoComponent },
  { path: 'unique/elegantbrown', component: ElegantbrownComponent },
  { path: 'unique/graphite', component: GraphiteComponent },
  { path: 'unique/grigio', component: GrigioComponent },
  { path: 'unique/lacquemate', component: LacquemateComponent },
  { path: 'unique/luna-grey', component: LunaGreyComponent },
  { path: 'unique/nero', component: NeroComponent },
  { path: 'unique/pietra-viva', component: PietraVivaComponent },
  { path: 'unique/silver-touch', component: SilverTouchComponent },
  { path: 'unique/slate', component: SlateComponent },
  { path: 'unique/taj-mahal', component: TajMahalComponent },
  { path: 'unique/valcamonica', component: ValcamonicaComponent },
  { path: 'unique/volcano', component: VolcanoComponent },
  { path: 'e30', component: E30Component },
  { path: 'unique', component: UniqueComponent },
  { path: 'works', component: WorksComponent },
  { path: 'works/works-black-stripes', component: WorksBlackStripesComponent },
  { path: 'works/works-bridge', component: WorksBridgeComponent },
  { path: 'works/works-island', component: WorksIslandComponent },
  { path: 'works/works-black-stripes', component: WorksBlackStripesComponent },
  { path: 'works/works-mirror-type', component: WorksMirrorTypeComponent },
  { path: 'works/works-turn', component: WorksTurnComponent },
  { path: 'e30/aluminum-quartzite', component: AluminumQuartziteComponent },
  { path: 'e30/concrete-vintage-oak', component: ConcreteVintageOakComponent },
  { path: 'e30/laminate-pure-white', component: LaminatePureWhiteComponent },
  { path: 'e30/stainless-excentric', component: StainlessExcentricComponent },
  { path: 'e30/quartz-walnut', component: QuartzWalnutComponent },
  { path: 'e30/oak-laminate', component: OakLaminateComponent },
  { path: 'e30/aluminum-niche-system', component: AluminumNicheSystemComponent },
  { path: 'e30/boxtec', component: BoxtecComponent },
  { path: 'e30/aluminum-drawer-system', component: AluminumDrawerSystemComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    LookbookComponent,
    E30Component,
    UniqueComponent,
    WorksComponent,
    SeasideResortComponent,
    LondonComponent,
    MaisonHambourgComponent,
    VillaSalzburgComponent,
    VillaInnsbruckComponent,
    MaisonSchweinfurtComponent,
    MaisonHambourg2Component,
    AuventBerlinComponent,
    VillaHambourgComponent,
    VillaVienneComponent,
    AuventHambourgComponent,
    MaisonHeidenheimComponent,
    MaisonMiamiComponent,
    MaisonDuesseldorfComponent,
    VillaWiesbadenComponent,
    MaisonHelsinkiComponent,
    VillaHambourg2Component,
    VillaRegensburgComponent,
    MaisonBielefeldComponent,
    VillaCologneComponent,
    LoftHambourgComponent,
    VillaLiechtensteinComponent,
    AppartementHambourgComponent,
    MaisonetteBonnComponent,
    VillaKopenhagenComponent,
    MaisonCopenhagueComponent,
    BeolaNeraComponent,
    CarbonoComponent,
    ArabescatoComponent,
    PietraVivaComponent,
    GrigioComponent,
    ValcamonicaComponent,
    NeroComponent,
    GraphiteComponent,
    LunaGreyComponent,
    ElegantbrownComponent,
    TajMahalComponent,
    SilverTouchComponent,
    LacquemateComponent,
    VolcanoComponent,
    SlateComponent,
    DistributorsComponent,
    WorksBlackStripesComponent,
    WorksMirrorTypeComponent,
    WorksTurnComponent,
    WorksIslandComponent,
    WorksBridgeComponent,
    AluminumQuartziteComponent,
    ConcreteVintageOakComponent,
    LaminatePureWhiteComponent,
    StainlessExcentricComponent,
    QuartzWalnutComponent,
    OakLaminateComponent,
    AluminumNicheSystemComponent,
    BoxtecComponent,
    AluminumDrawerSystemComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatGridListModule,
    MatCheckboxModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatExpansionModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBX6cQ6943N2LLdlGP_0mHBRf_mWWy2GNo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
