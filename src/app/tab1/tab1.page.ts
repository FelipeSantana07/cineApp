import { DadosService } from './../services/dados.service';
import { IFilmes } from './../models/IFilmes.models';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'CineApp';

  listaVideos: IFilmes[] = [
    {
      nome: 'XXX',
      lancamento: 'xx/xx/xxxx',
      duracao: 'xh xxm',
      classificacao: 76,
      // eslint-disable-next-line max-len
      cartaz: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAADdCAMAAACc/C7aAAAAA1BMVEX/PYsJYBshAAAASElEQVR4nO3BgQAAAADDoPlTX+EAVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACcBsWxAAHcrYvnAAAAAElFTkSuQmCC',
      generos: ['xy', 'xz', 'xx'],
      pagina: '/filmeX'
    },
    {
      nome: 'XXZ',
      lancamento: 'xx/xx/xxxx',
      duracao: 'xh xxm',
      classificacao: 76,
      // eslint-disable-next-line max-len
      cartaz: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAADdCAMAAACc/C7aAAAAA1BMVEX/PYsJYBshAAAASElEQVR4nO3BgQAAAADDoPlTX+EAVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACcBsWxAAHcrYvnAAAAAElFTkSuQmCC',
      generos: ['xy', 'xz', 'xx'],
      pagina: '/filmeX'
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

      exibirFilme(filme: IFilmes) {
        this.dadosService.guardarDados('filme', filme);
        this.route.navigateByUrl('/dadosfilme');
       }


  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'Favorito',
      message: 'Deseja favoritar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          },
        },
        {
          text: 'Sim',
          handler: () => {
            this.apresentarToast();
          },
        },
      ],
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filmes adicionado aos favoritos',
      duration: 1500,
      color: 'primary'
    });
    toast.present();
  }
}
