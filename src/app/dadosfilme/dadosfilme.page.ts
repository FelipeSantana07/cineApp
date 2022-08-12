import { IFilmeApi } from './../models/IFilmeAPI.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dadosfilme',
  templateUrl: './dadosfilme.page.html',
  styleUrls: ['./dadosfilme.page.scss'],
})
export class DadosfilmePage implements OnInit {

  filme: IFilmeApi;
  generos: string[] = [];

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.pegarDados('filme');
    this.generos = this.dadosService.pegarDados('generos');
    console.log('Filme Enviado', this.filme);
  }

}
