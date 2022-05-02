import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  //searchInput: string = '';

  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit(): void {};

  search(searchInput:string){
    console.log("Grabbing Data: ",searchInput);
  }

}
