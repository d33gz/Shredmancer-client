import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() searchDetails = {searchInput: ''};

  //searchInput: string = '';
  Songs : any = [];

  constructor(public restApi: RestApiService, public router: Router, public tabService: TabService) {};


  ngOnInit(): void {};

  search(searchInput:string){
    console.log("Grabbing Data: ",searchInput);
    this.restApi.getSongByName(searchInput).subscribe((data: {}) =>{setTimeout(() => {this.Songs = data}, 1000)});
    setTimeout(() => console.log(this.Songs), 2000);
  };

  tab : any = [];
  getTab(event : any) {
    console.log(this.Songs[0]+ "this is songs")
    console.dir(this.Songs[0])
    let songId = Number(event.target.value)
    console.log(songId + "this is song id")
    // this.songApi.getOneTab(songId).subscribe((data: {}) =>{this.tab = data});
    this.tabService.getTab(songId)
    setTimeout(() => console.log(this.tab), 3000);
    setTimeout(() => this.router.navigate(["/", "tabview"]), 2000)  
  };

}
