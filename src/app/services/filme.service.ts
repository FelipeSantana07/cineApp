import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { IListaFilmes } from '../models/IFilmeAPI.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  lingua = 'pt - BR';
  regiao = 'BR';

  private urlAPI = 'https://api.themoviedb.org/3/';
  private key = '?api_key=f8ac4eda5cc20f96c6621e25371cda94';

  constructor(private http: HttpClient,
    public toastController: ToastController
  ) { }

  buscarFilmes(busca: string): Observable<IListaFilmes> {
    const url = `${this.urlAPI}search/movie${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;

    return this.http.get<IListaFilmes>(url).pipe(
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
