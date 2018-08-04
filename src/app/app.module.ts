import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule,
         MatCheckboxModule,
         MatStepperModule,
         MatFormFieldModule,
         MatInputModule,
         MatRadioModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
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


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'distributors', component: ProductsComponent },
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
  { path: 'programme', component: E30Component },
  { path: 'unique', component: UniqueComponent },
  { path: 'works', component: WorksComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
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
    MaisonCopenhagueComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBX6cQ6943N2LLdlGP_0mHBRf_mWWy2GNo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
