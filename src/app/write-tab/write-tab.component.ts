import { Component, OnInit } from '@angular/core';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-write-tab',
  templateUrl: './write-tab.component.html',
  styleUrls: ['./write-tab.component.css']
})
export class WriteTabComponent implements OnInit {
  currentMeasure: number = 1;
  barFill: number = 0;
  workingMeasure: any = [];
  restOfTab: any = [];
  beatRhythm: rhythm[] = [
    new rhythm('s '),
    new rhythm('e   '),
    new rhythm('q       '),
    new rhythm('h               '),
    new rhythm('w                               ')
  ];
  beatString1: string1[] = [
    new string1('- '),
    new string1('0 '),
    new string1('1 '),
    new string1('2 '),
    new string1('3 '),
    new string1('4 '),
    new string1('5 '),
    new string1('6 '),
    new string1('7 '),
    new string1('8 '),
    new string1('9 '),
    new string1('10'),
    new string1('11'),
    new string1('12'),
    new string1('13'),
    new string1('14'),
    new string1('15'),
    new string1('16'),
    new string1('17'),
    new string1('18'),
    new string1('19'),
    new string1('20'),
    new string1('21'),
    new string1('22'),
    new string1('23'),
    new string1('24'),
  ];
  beatString2: string2[] = [
    new string2('- '),
    new string2('0 '),
    new string2('1 '),
    new string2('2 '),
    new string2('3 '),
    new string2('4 '),
    new string2('5 '),
    new string2('6 '),
    new string2('7 '),
    new string2('8 '),
    new string2('9 '),
    new string2('10'),
    new string2('11'),
    new string2('12'),
    new string2('13'),
    new string2('14'),
    new string2('15'),
    new string2('16'),
    new string2('17'),
    new string2('18'),
    new string2('19'),
    new string2('20'),
    new string2('21'),
    new string2('22'),
    new string2('23'),
    new string2('24'),
  ];
  beatString3: string3[] = [
    new string3('- '),
    new string3('0 '),
    new string3('1 '),
    new string3('2 '),
    new string3('3 '),
    new string3('4 '),
    new string3('5 '),
    new string3('6 '),
    new string3('7 '),
    new string3('8 '),
    new string3('9 '),
    new string3('10'),
    new string3('11'),
    new string3('12'),
    new string3('13'),
    new string3('14'),
    new string3('15'),
    new string3('16'),
    new string3('17'),
    new string3('18'),
    new string3('19'),
    new string3('20'),
    new string3('21'),
    new string3('22'),
    new string3('23'),
    new string3('24'),
  ];
  beatString4: string4[] = [
    new string4('- '),
    new string4('0 '),
    new string4('1 '),
    new string4('2 '),
    new string4('3 '),
    new string4('4 '),
    new string4('5 '),
    new string4('6 '),
    new string4('7 '),
    new string4('8 '),
    new string4('9 '),
    new string4('10'),
    new string4('11'),
    new string4('12'),
    new string4('13'),
    new string4('14'),
    new string4('15'),
    new string4('16'),
    new string4('17'),
    new string4('18'),
    new string4('19'),
    new string4('20'),
    new string4('21'),
    new string4('22'),
    new string4('23'),
    new string4('24'),
  ];
  beatString5: string5[] = [
    new string5('- '),
    new string5('0 '),
    new string5('1 '),
    new string5('2 '),
    new string5('3 '),
    new string5('4 '),
    new string5('5 '),
    new string5('6 '),
    new string5('7 '),
    new string5('8 '),
    new string5('9 '),
    new string5('10'),
    new string5('11'),
    new string5('12'),
    new string5('13'),
    new string5('14'),
    new string5('15'),
    new string5('16'),
    new string5('17'),
    new string5('18'),
    new string5('19'),
    new string5('20'),
    new string5('21'),
    new string5('22'),
    new string5('23'),
    new string5('24'),
  ];
  beatString6: string6[] = [
    new string6('- '),
    new string6('0 '),
    new string6('1 '),
    new string6('2 '),
    new string6('3 '),
    new string6('4 '),
    new string6('5'),
    new string6('6 '),
    new string6('7 '),
    new string6('8 '),
    new string6('9 '),
    new string6('10'),
    new string6('11'),
    new string6('12'),
    new string6('13'),
    new string6('14'),
    new string6('15'),
    new string6('16'),
    new string6('17'),
    new string6('18'),
    new string6('19'),
    new string6('20'),
    new string6('21'),
    new string6('22'),
    new string6('23'),
    new string6('24'),
  ];
  beatSpecial: special[] = [
    new special ('  '),
    new special ('b '),
    new special ('h '),
    new special ('v '),
    new special ('p '),
    new special ('t '),
    new special ('i '),
    new special ('lr'),
  ];
  constructor(public tabService: TabService) {};

  ngOnInit(): void {};

  onSubmit(measureForm: {value: any}) {
    if (this.checkBar(measureForm.value.rhythm)) {
      if (!measureForm.value.rhythm) {
        alert("You need to specify a Rhythm.");
      } else {
        if (!measureForm.value.string1) {
          measureForm.value.string1 = '- ';
        }
        if (!measureForm.value.string2) {
          measureForm.value.string2 = '- ';
        }
        if (!measureForm.value.string3) {
          measureForm.value.string3 = '- ';
        }
        if (!measureForm.value.string4) {
          measureForm.value.string4 = '- ';
        }
        if (!measureForm.value.string5) {
          measureForm.value.string5 = '- ';
        }
        if (!measureForm.value.string6) {
          measureForm.value.string6 = '- ';
        }
        if (!measureForm.value.special) {
          measureForm.value.special = '  ';
        }
        this.workingMeasure = this.tabService.addToWorkingTab(measureForm.value.rhythm, measureForm.value.string1, measureForm.value.string2, measureForm.value.string3, measureForm.value.string4, measureForm.value.string5, measureForm.value.string6, measureForm.value.special);
      };
    };
  };

  checkBar(t: string) {
    if (t == 'e   ') {
      if ((this.barFill + 4) > 32) {
        alert('You can only have 4 Beats in a Measure right now.');
        return false;
      } else {
        this.barFill += 4;
      }
    } else if (t == 'q       ') {
      if ((this.barFill + 8) > 32) {
        alert('You can only have 4 Beats in a Measure right now.');
        return false;
      } else {
        this.barFill += 8;
      }
    } else if (t == 'h               ') {
      if ((this.barFill + 16) > 32) {
        alert('You can only have 4 Beats in a Measure right now.');
        return false;
      } else {
        this.barFill += 16
      }
    } else if (t == 'w                               ') {
      if ((this.barFill + 32) > 32) {
        alert('You can only have 4 Beats in a Measure right now.');
        return false;
      } else {
        this.barFill += 32;
      }
    } else {
      if ((this.barFill + 2) > 32) {
        alert('You can only have 4 Beats in a Measure right now.');
        return false;
      } else {
        this.barFill += 2;
      };
    };
    return true;
  };

  commitMeasure() {
    if (this.barFill != 32) {
      alert("You need to have 4 Full Beats to Commit a Measure.");
    } else {
      this.currentMeasure++;
      this.barFill = 0;
      this.restOfTab.push(this.workingMeasure[0]);
      console.log("rest of Tab is + " + this.restOfTab)
      this.workingMeasure = [];
      this.tabService.clearWorkingTab();
    };
  };

}

export class rhythm {
  rhythm: string;
  constructor(beat: string) {
    this.rhythm = beat;
  };
};
export class string1 {
  string1: string;
  constructor(beat: string) {
    this.string1 = beat;
  };
};
export class string2 {
  string2: string;
  constructor(beat: string) {
    this.string2 = beat;
  };
};
export class string3 {
  string3: string;
  constructor(beat: string) {
    this.string3 = beat;
  };
};
export class string4 {
  string4: string;
  constructor(beat: string) {
    this.string4 = beat;
  };
};
export class string5 {
  string5: string;
  constructor(beat: string) {
    this.string5 = beat;
  };
};
export class string6 {
  string6: string;
  constructor(beat: string) {
    this.string6 = beat;
  };
};
export class special {
  special: string;
  constructor(beat: string) {
    this.special = beat;
  };
};