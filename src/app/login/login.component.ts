import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.router.navigate(['content']);
  }
}
