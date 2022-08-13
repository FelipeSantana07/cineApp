import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  senha: string;

  constructor(
      public toastController: ToastController,
      private route: Router
    ) { }

  ngOnInit() {
  }

  login(){
    if(this.email === 'email@gmail.com' && this.senha === 'senha'){
      this.route.navigateByUrl('/tabs/tab1');
      this.apresentarToast('Seja Bem-vindo!','success');
    }else{
      this.apresentarToast('Usuário ou senha incorretos!','danger');
    }
  }

  async apresentarToast(texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2000,
      color: cor
    });
    toast.present();
  }

}
