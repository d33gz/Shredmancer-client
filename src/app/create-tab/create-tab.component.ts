import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-tab',
  templateUrl: './create-tab.component.html',
  styleUrls: ['./create-tab.component.css']
})
export class CreateTabComponent implements OnInit {
  workingTab: any = [];
  constructor() { }

  onSubmit(oneBeat: {value: any}) {
    console.log(oneBeat.value);
    alert(oneBeat.value);
  }

  addToWorkingTab() {

  }

  ngOnInit(): void {
  }

}
