import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  Songs : any = [];
  constructor(public songApi: RestApiService, private router: Router,public tabService: TabService) { }

  ngOnInit(): void {
    this.songApi.getAllSongs().subscribe((data: {}) =>{setTimeout(() => {this.Songs = data}, 500)});
  }
  tab : any = [];
  getTab(event : any) {
    let songId = Number(event.target.value);
    this.tabService.getTab(songId);
    setTimeout(() => this.router.navigate(["/", "tabview"]), 2000);
  } 

}