import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { TabMainComponent } from './tab-main/tab-main.component';
import { CreateTabComponent } from './create-tab/create-tab.component';
import { FormsModule } from '@angular/forms';
import { TabSearchComponent } from './tab-search/tab-search.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FAQComponent } from './faq/faq.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SubmitComponent } from './submit/submit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TabMainComponent,
    CreateTabComponent
    TabSearchComponent,
    LoginComponent,
    CreateAccountComponent,
    FAQComponent,
    FavoriteComponent,
    SubmitComponent
  ],
  
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
