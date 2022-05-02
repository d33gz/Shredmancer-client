import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TabMainComponent } from './tab-main/tab-main.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FAQComponent } from './faq/faq.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SubmitComponent } from './submit/submit.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WriteTabComponent } from './write-tab/write-tab.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: 'tabview', component: TabMainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create', component: CreateAccountComponent},
  {path: 'faq', component: FAQComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: 'submit', component: SubmitComponent},
  {path: 'search', component: SearchComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'write', component: WriteTabComponent}
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
