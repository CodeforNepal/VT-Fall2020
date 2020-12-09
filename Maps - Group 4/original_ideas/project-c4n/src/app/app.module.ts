import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ContactComponent } from './contact/contact.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { MapComponent } from './map/map.component';
import { FormComponent } from './form/form.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SymptomsComponent,
    MapComponent,
    FormComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
