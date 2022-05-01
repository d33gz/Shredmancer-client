import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() accountDetails = {userName: '', userPass: ''};
  constructor(public restApi: RestApiService, public router: Router) {};

  ngOnInit(): void {};

  login(accountData: any) {
    console.log("Sending Username: " + this.accountDetails.userName);
    console.log("Sending Password: " + this.accountDetails.userPass);
    this.restApi.loginAccount(this.accountDetails).subscribe((data: {}) => {
      this.router.navigate(['/homepage']);
    })
  };
}
