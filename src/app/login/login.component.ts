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
  }

  onSubmit(): void {
    const isAuthenticate = this.dataService.authenticateLogin(this.email, this.password).subscribe();
    if (isAuthenticate) {
      this.router.navigate(['content']);
    }
  }
}
