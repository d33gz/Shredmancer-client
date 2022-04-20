import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-main',
  templateUrl: './tab-main.component.html',
  styleUrls: ['./tab-main.component.css']
})
export class TabMainComponent implements OnInit {
  testTab: String = `|--------------------------------------------------------------------|\n
  |--------------------------------------------------------------------|\n
  |--------------------------------------------------------------------|\n
  |----------9-10-9~---9-8~---8-7~-------------9-10-9~---9-8~---8-7~---|\n
  |--------8---------10-----9----------------8---------10-----9--------|\n
  |0-0-0------------------------------0-0-0----------------------------|`

  constructor() { }

  ngOnInit(): void {
    console.log(this.testTab);
  }

}
