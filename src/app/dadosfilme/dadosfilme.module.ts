import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosfilmePageRoutingModule } from './dadosfilme-routing.module';

import { DadosfilmePage } from './dadosfilme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosfilmePageRoutingModule
  ],
  declarations: [DadosfilmePage]
})
export class DadosfilmePageModule {}
