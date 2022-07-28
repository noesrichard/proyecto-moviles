import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private service: AuthService,
    private router: Router,
    private toast: ToastController
  ) {}

  ngOnInit() {}

  register(username, password) {
    const user = { username, password };
    this.service.register(user).subscribe(
      (res) => {
        if (res) {
          this.router.navigate(['/']);
        }
      },
      (error) => {
        this.presentToast('Nombre de usuario ya registrado, intente con otro');
      }
    );
  }

  redirect() {
    this.router.navigate(['/']);
  }

  async presentToast(msg: string) {
    const t = await this.toast.create({
      message: msg,
      duration: 2000,
    });
    t.present();
  }
}
