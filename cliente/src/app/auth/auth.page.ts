import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  signin(username: string, password: string) {
    const user = { username: username, password: password };
    this.auth.signin(user).subscribe(res => {
      localStorage.setItem("jwt", res.token)
      localStorage.setItem("userId", res.userId)
      localStorage.setItem("username", res.username)
      this.router.navigate(["tasks"])
    });
  }
}
