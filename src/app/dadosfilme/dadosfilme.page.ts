import { DadosService } from './../services/dados.service';
import { IFilmes } from '../models/IFilmes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dadosfilme',
  templateUrl: './dadosfilme.page.html',
  styleUrls: ['./dadosfilme.page.scss'],
})
export class DadosfilmePage implements OnInit {

  filme: IFilmes;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.pegarDados('filme');
    console.log('Filme enviado', this.filme);
  }

}
