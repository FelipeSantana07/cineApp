import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'filme-x',
    loadChildren: () => import('./filmes/filme-x/filme-x.module').then( m => m.FilmeXPageModule)
  },
  {
    path: 'dadosfilme',
    loadChildren: () => import('./dadosfilme/dadosfilme.module').then( m => m.DadosfilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
