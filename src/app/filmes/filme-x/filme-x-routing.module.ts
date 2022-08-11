import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeXPage } from './filme-x.page';

const routes: Routes = [
  {
    path: '',
    component: FilmeXPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmeXPageRoutingModule {}
