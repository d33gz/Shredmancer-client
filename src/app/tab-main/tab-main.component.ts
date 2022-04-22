import { Component, OnInit } from '@angular/core';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-tab-main',
  templateUrl: './tab-main.component.html',
  styleUrls: ['./tab-main.component.css']
})
export class TabMainComponent implements OnInit {
  fullTab: any = [];
  constructor(private tabService: TabService) {
    this.fullTab = tabService.getTab();
  }

  ngOnInit(): void {
    console.log("The Full Tab " + this.fullTab);
    console.log("The Tab itself\n" + this.fullTab[0].tab[0].special);
  }

}
