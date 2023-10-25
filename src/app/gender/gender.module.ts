import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { GenderPageRoutingModule } from './gender-routing.module';

import { GenderPage } from './gender.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    GenderPageRoutingModule
  ],
  declarations: [GenderPage]
})
export class GenderPageModule {}
