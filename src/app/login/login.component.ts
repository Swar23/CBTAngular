import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../_services/get-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  data;
  public error: string;

  constructor(private router: Router, private dataService: GetDataService) { }

  ngOnInit(): void {
    //change once logout functionality is added
    localStorage.removeItem('access_token');

  }

  onSubmit(): void {
    this.dataService.authenticateLogin(this.email, this.password).subscribe((v) => {

      this.router.navigate(['content']);
    });



  }
}
