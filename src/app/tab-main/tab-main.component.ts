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
    this.activeTab = 0;
  }

  findTab(event: any) {
    this.activeTab = Number(event.target.value);
    this.fullTab = this.tabService.getTab(this.activeTab);
  }

  ngOnInit(): void {
    this.fullTab=this.tabService.Tab
    console.log("In tab View " + this.fullTab[0])
    console.dir(this.fullTab)
    console.dir(this.fullTab[0])
    console.dir(this.tabService.Tab)
  }
}
