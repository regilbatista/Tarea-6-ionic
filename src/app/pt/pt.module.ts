import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { PtPageRoutingModule } from './pt-routing.module';

import { PtPage } from './pt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    PtPageRoutingModule
  ],
  declarations: [PtPage]
})
export class PtPageModule {}
