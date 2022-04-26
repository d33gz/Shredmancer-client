import { Component, OnInit } from '@angular/core';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-tab-main',
  templateUrl: './tab-main.component.html',
  styleUrls: ['./tab-main.component.css']
})
export class TabMainComponent implements OnInit {
  activeTab: number | any;
  fullTab: any = [];
  constructor(private tabService: TabService) {
    //this.fullTab = tabService.getTab();
    this.activeTab = 0;
  }

  findTab(event: any) {
    this.activeTab = Number(event.target.value)-1;
    this.fullTab = this.tabService.getServerTab(this.activeTab);
    console.log("what do we got here? " + this.fullTab);
    console.log("what do we got here? " + this.fullTab.string6);
  }

  ngOnInit(): void {
    console.log("Active Tab is " + this.activeTab)
    console.log("The Full Tab " + this.fullTab);
    console.log("The Tab itself\n" + this.fullTab[this.activeTab].tab[0].special);
  }
}
