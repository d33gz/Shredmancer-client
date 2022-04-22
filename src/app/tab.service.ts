import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  constructor() { }

  getTab(): any {
    return [
      {'id': 1, 'songName':'Raining Blood Intro Riff', 'tab': [
        {
          "rhythm": ["e   ", "e   ", "e   ", "e   ", "e   ", "e   ", "q       ", "e   ", "e   ", "q       ", "e   ", "e   ", "q       "],
          "string1": ["- - ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - - - ", "- - ", "- - ", "- - - - ", "- - ", "- - ", "- - - - "],
          "string2": ["- - ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - - - ", "- - ", "- - ", "- - - - ", "- - ", "- - ", "- - - - "],
          "string3": ["- - ", "- - ", "- - ", "- - ", "- - ", "- - ", "- - - - ", "- - ", "- - ", "- - - - ", "- - ", "- - ", "- - - - "],
          "string4": ["- - ", "- - ", "- - ", "- - ", "8   ", "9   ", "8       ", "- - ", "8   ", "7       ", "- - ", "7   ", "6       "],
          "string5": ["- - ", "- - ", "- - ", "7   ", "- - ", "- - ", "- - - - ", "9   ", "- - ", "- - - - ", "8   ", "- - ", "- - - - "],
          "string6": ["0   ", "0   ", "0   ", "- - ", "- - ", "- - ", "- - - - ", "- - ", "- - ", "- - - - ", "- - ", "- - ", "- - - - "],
          "special": ["p   ", "p   ", "p   ", "    ", "    ", "    ", "        ", "    ", "    ", "        ", "    ", "    ", "        "]
        }
      ]}
    ]
  }
}