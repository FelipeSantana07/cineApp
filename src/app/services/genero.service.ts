import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IListaGenero } from '../models/IGenero.model';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  lingua = 'pt-BR';

  private urlAPI = 'https://api.themoviedb.org/3/';
  private key = '?api_key=5cbcce7817f843dbfc6bf3131554a262';

  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarGenero(): Observable<IListaGenero>{
    const url = `${this.urlAPI}genre/movie/list${this.key}&language=${this.lingua}`;

    return this.http.get<IListaGenero>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar',
      duration: 1500,
      color: 'danger',
      position: 'bottom'
    });
    toast.present();
    return null;
  }

}
