import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PtPage } from './pt.page';

const routes: Routes = [
  {
    path: '',
    component: PtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PtPageRoutingModule {}
