import { Injectable } from '@angular/core';
import { RestApiService } from './shared/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  Tab: any = [];
  WorkingTab: any = [{
    rhythm: ["|  "],
    string1: ["|  "],
    string2: ["|  "],
    string3: ["|  "],
    string4: ["|  "],
    string5: ["|  "],
    string6: ["|  "],
    special: ["|  "],
  }];
  constructor(public restApi: RestApiService) {}

  getTab(id: number): any {
    this.restApi.getOneTab(id).subscribe((data: {}) => {this.Tab = data});
    setTimeout(() => { this.formatTab() }, 2000); 
  };
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
  };

  addToWorkingTab(rhythm: string, string1: number, string2: number, string3: number, string4: number, string5: number, string6: number, special: string) {
    console.log('whats coming in rhy\n' + rhythm);
    console.log('whats coming in s1\n' + string1);
    console.log('whats coming in s2\n' + string2);
    console.log('whats coming in s3\n' + string3);
    console.log('whats coming in s4\n' + string4);
    console.log('whats coming in s5\n' + string5);
    console.log('whats coming in s6\n' + string6);
    console.log('whats coming in sp\n' + special);
    console.log("whats the problem?\n" + this.WorkingTab[0]);
    console.dir(this.WorkingTab[0])
    this.WorkingTab[0].rhythm.push(rhythm);
    this.WorkingTab[0].string1.push(string1);
    this.WorkingTab[0].string2.push(string2);
    this.WorkingTab[0].string3.push(string3);
    this.WorkingTab[0].string4.push(string4);
    this.WorkingTab[0].string5.push(string5);
    this.WorkingTab[0].string6.push(string6);
    this.WorkingTab[0].special.push(special);
    return this.WorkingTab;
  };

  clearTab() {
    this.Tab = [];
  };
  clearWorkingTab() {
    this.WorkingTab = [];
  };
}
