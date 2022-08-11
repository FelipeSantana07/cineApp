import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmeXPageRoutingModule } from './filme-x-routing.module';

import { FilmeXPage } from './filme-x.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmeXPageRoutingModule
  ],
  declarations: [FilmeXPage]
})
export class FilmeXPageModule {}
