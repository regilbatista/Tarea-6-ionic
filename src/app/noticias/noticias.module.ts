import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { NoticiasPageRoutingModule } from './noticias-routing.module';

import { NoticiasPage } from './noticias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    NoticiasPageRoutingModule
  ],
  declarations: [NoticiasPage]
})
export class NoticiasPageModule {}
