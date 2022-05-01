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

  addToWorkingTab(rhythm: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, special: string) {
    let string1s = this.setTimeString(rhythm, string1);
    let string2s = this.setTimeString(rhythm, string2);
    let string3s = this.setTimeString(rhythm, string3);
    let string4s = this.setTimeString(rhythm, string4);
    let string5s = this.setTimeString(rhythm, string5);
    let string6s = this.setTimeString(rhythm, string6);
    let specials = this.setTimeSpecial(rhythm, special);
    this.WorkingTab[0].rhythm.push(rhythm);
    this.WorkingTab[0].string1.push(string1s);
    this.WorkingTab[0].string2.push(string2s);
    this.WorkingTab[0].string3.push(string3s);
    this.WorkingTab[0].string4.push(string4s);
    this.WorkingTab[0].string5.push(string5s);
    this.WorkingTab[0].string6.push(string6s);
    this.WorkingTab[0].special.push(specials);
    return this.WorkingTab;
  };

  setTimeString(t: string, s: string) {
    if (t == 'e   ') {
      return s + '- ';
    } else if (t == 'q       ') {
      return s + '- - - ';
    } else if (t == 'h               ') {
      return s + '- - - - - - - ';
    } else if (t == 'w                               ') {
      return s + '- - - - - - - - - - - - - - - ';
    } else {
      return s;
    }
  };
  setTimeSpecial(t: string, s: string) {
    if (t == 'e   ') {
      return s + '  ';
    } else if (t == 'q       ') {
      return s +  '       ';
    } else if (t == 'h               ') {
      return s + '              ';
    } else if (t == 'w                               ') {
      return s + '                              ';
    } else {
      return s;
    }
  };

  clearTab() {
    this.Tab = [];
  };
  clearWorkingTab() {
    this.WorkingTab = [];
  };
}
