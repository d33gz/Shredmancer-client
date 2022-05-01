import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-tab',
  templateUrl: './create-tab.component.html',
  styleUrls: ['./create-tab.component.css']
})
export class CreateTabComponent implements OnInit {
  beatRhythm: any = [
    's','e','q','h','w'
  ];
  @Input() beatInfo = {
    rhythm: '',
    string1: '',
    string2: '',
    string3: '',
    string4: '',
    string5: '',
    string6: '',
    special: '',
  };
  workingTab: any = [];
  constructor() { }

  onSubmit(oneBeat: {value: any}) {
    //console.log(this.form.value)
    console.log("Your rhythm sir: " + this.workingTab.rhythm);
    console.log("Your first String sir: " + this.workingTab.string1);
    alert("Yo here's your beatinformation!\n" + this.workingTab);
  }

  addToWorkingTab() {

  }

  ngOnInit(): void {
  }

}
