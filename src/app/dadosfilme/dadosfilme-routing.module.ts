import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DadosfilmePage } from './dadosfilme.page';

const routes: Routes = [
  {
    path: '',
    component: DadosfilmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosfilmePageRoutingModule {}
