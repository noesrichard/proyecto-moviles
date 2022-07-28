import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  private user: User = { 
    username: "",
    password: "",
  }

  constructor(
    private auth: AuthService,
    private router: Router,
    private toast: ToastController
  ) {}

  ngOnInit() {
    localStorage.clear();
  }

  signin() {
    console.log(this.user)
    this.auth.signin(this.user).subscribe(
      (res) => {
        localStorage.setItem('jwt', res.token);
        localStorage.setItem('userId', res.userId);
        localStorage.setItem('username', res.username);
        this.router.navigate(['tasks']);
      },
      (error) => {
        this.presentToast('Usuario o contraseña incorrectos');
      }
    );
  }

  async presentToast(msg: string) {
    const toast = await this.toast.create({
      message: msg,
      position: 'bottom',
      duration: 2000,
    });
    await toast.present();
  }

  ionViewDidEnter() {
    this.user.username = ""
    this.user.password = ""
    localStorage.clear();
  }
}
