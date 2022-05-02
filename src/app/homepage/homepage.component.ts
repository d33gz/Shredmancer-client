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
    this.songApi.getAllSongs().subscribe((data: {}) =>{setTimeout(() => {this.Songs = data}, 1000)});
    
    setTimeout(() => console.log(this.Songs), 3000);
  }
  tab : any = [];
  getTab(event : any) {
    console.log(this.Songs[0]+ "this is songs")
    console.dir(this.Songs[0])
    let songId = Number(event.target.value)
    console.log(songId + "this is song id")
    // this.songApi.getOneTab(songId).subscribe((data: {}) =>{this.tab = data});
    this.tabService.getTab(songId)
    setTimeout(() => console.log(this.tab), 3000);
    setTimeout(() => this.router.navigate(["/", "tabview"]),4000)
    
  }
  

}