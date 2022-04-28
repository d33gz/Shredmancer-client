import { Injectable } from '@angular/core';
import { RestApiService } from './shared/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  Tab: any = [];
  constructor(public restApi: RestApiService) { }

  getTab(id: number): any {
    this.restApi.getOneTab(id).subscribe((data: {}) => {this.Tab = data});
    return this.formatTab();
  }

  formatTab() {
    for (let i = 0; i < this.Tab.length; i++) {
      this.Tab[i].rhythm = this.Tab[i].rhythm.split(",");
      this.Tab[i].string1 = this.Tab[i].string1.split(",");
      this.Tab[i].string2 = this.Tab[i].string2.split(",");
      this.Tab[i].string3 = this.Tab[i].string3.split(",");
      this.Tab[i].string4 = this.Tab[i].string4.split(",");
      this.Tab[i].string5 = this.Tab[i].string5.split(",");
      this.Tab[i].string6 = this.Tab[i].string6.split(",");
      this.Tab[i].special = this.Tab[i].special.split(",");
    }
    return this.Tab;
  }
}
