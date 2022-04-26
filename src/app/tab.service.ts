import { Injectable } from '@angular/core';
import { RestApiService } from './shared/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  Tab: any = [];
  constructor(public restApi: RestApiService) { }

  getServerTab(id: number): any {
    this.restApi.getOneTab(id).subscribe((data: {}) => {this.Tab = data});
    return this.formatTab();
  }

  formatTab() {
    this.Tab.rhythm = this.Tab.rhythm.split(",");
    this.Tab.string1 = this.Tab.string1.split(",");
    this.Tab.string2 = this.Tab.string2.split(",");
    this.Tab.string3 = this.Tab.string3.split(",");
    this.Tab.string4 = this.Tab.string4.split(",");
    this.Tab.string5 = this.Tab.string5.split(",");
    this.Tab.string6 = this.Tab.string6.split(",");
    this.Tab.special = this.Tab.special.split(",");
    return this.Tab;
  }

  getTab(): any {
    return [
      {'id': 1, 'songName':'Raining Blood Intro Riff', 'bandName':'Slayer', 'measures': 2, 'tab': [
        {
          "id": 1,
          "measure": 1,
          "repeats": 0,
          "rhythm": ["|  ", "e   ", "e   ", "e   ", "e   ", "e   ", "e   ", "q       ", " |"],
          "string1": ["|  ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - - - ", " |"],
          "string2": ["|• ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - - - ", " |"],
          "string3": ["|  ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - - - ", " |"],
          "string4": ["|  ", "- - ", "- - ", "- - ", "- - ", "8 - ", "9 - ", "8 - - - ", " |"],
          "string5": ["|• ", "- - ", "- - ", "- - ", "7 - ", "- - ", "- - ", "- - - - ", " |"],
          "string6": ["|  ", "0 - ", "0 - ", "0 - ", "- - ", "- - ", "- - ", "- - - - ", " |"],
          "special": ["|  ", "p   ", "p   ", "p   ", "    ", "    ", "    ", "        ", " |"]
        },
        {
          "id": 1,
          "measure": 2,
          "repeats": 4,
          "rhythm": ["|  ", "e   ", "e   ", "q       ", "e   ", "e   ", "q       ", " |"],
          "string1": ["|  ", "- - ", "- - ", "- - - - ", "- - ", "- - ", "- - - - ", " |"],
          "string2": ["|  ", "- - ", "- - ", "- - - - ", "- - ", "- - ", "- - - - ", "•|"],
          "string3": ["|  ", "- - ", "- - ", "- - - - ", "- - ", "- - ", "- - - - ", " |"],
          "string4": ["|  ", "- - ", "8 - ", "7 - - - ", "- - ", "7 - ", "6 - - - ", " |"],
          "string5": ["|  ", "9 - ", "- - ", "- - - - ", "8 - ", "- - ", "- - - - ", "•|"],
          "string6": ["|  ", "- - ", "- - ", "- - - - ", "- - ", "- - ", "- - - - ", " |"],
          "special": ["|  ", "    ", "    ", "        ", "    ", "    ", "        ", " |"]
        }
      ]},
      {'id': 2, 'songName':'Stairway to Heaven', 'bandName':'Led Zeppelin', 'tab': [
        {
          "id": 2,
          "measure": 1,
          "repeats": 0,
          "rhythm": ["|  ", "e   ", "e   ", "e   ", "e   ", "e   ", "e   ", "e   ", "e   ", "|"],
          "string1": ["|  ", "- - ", "- - ", "- - ", "5 - ", "7 - ", "- - ", "- - ", "7 - ", "|"],
          "string2": ["|  ", "- - ", "- - ", "5 - ", "- - ", "- - ", "5 - ", "- - ", "- - ", "|"],
          "string3": ["|  ", "- - ", "5 - ", "- - ", "- - ", "- - ", "- - ", "5 - ", "- - ", "|"],
          "string4": ["|  ", "7 - ", "- - ", "- - ", "- - ", "6 - ", "- - ", "- - ", "- - ", "|"],
          "string5": ["|  ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - ", "|"],
          "string6": ["|  ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - ", "|"],
          "special": ["|  ", "let ", "ring", "----", "----", "----", "----", "----", "----", "|"]
        },
        {
          "id": 2,
          "measure": 2,
          "repeats": 0,
          "rhythm": ["|  ", "e   ", "e   ", "e   ", "e   ", "e   ", "e   ", "e   ", "e   ", "|"],
          "string1": ["|  ", "8 - ", "- - ", "- - ", "8 - ", "2 - ", "- - ", "- - ", "2 - ", "|"],
          "string2": ["|  ", "- - ", "5 - ", "- - ", "- - ", "- - ", "3 - ", "- - ", "- - ", "|"],
          "string3": ["|  ", "- - ", "- - ", "5 - ", "- - ", "- - ", "- - ", "2 - ", "- - ", "|"],
          "string4": ["|  ", "5 - ", "- - ", "- - ", "- - ", "4 - ", "- - ", "- - ", "- - ", "|"],
          "string5": ["|  ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - ", "|"],
          "string6": ["|  ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - ", "|"],
          "special": ["|  ", "let ", "ring", "----", "----", "----", "----", "----", "---/", "|"]
        }
      ]}
    ]
  }
}
