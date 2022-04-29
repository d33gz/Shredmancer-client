import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TabMainComponent } from './tab-main/tab-main.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FAQComponent } from './faq/faq.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SubmitComponent } from './submit/submit.component';
import { TabSearchComponent } from './tab-search/tab-search.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: 'tabview', component: TabMainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create', component: CreateAccountComponent},
  {path: 'faq', component: FAQComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: 'submit', component: SubmitComponent},
  {path: 'search', component: TabSearchComponent},
  {path: 'homepage', component: HomepageComponent},
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
