import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TabMainComponent } from './tab-main/tab-main.component';
import { TabSearchComponent } from './tab-search/tab-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TabMainComponent,
    TabSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
