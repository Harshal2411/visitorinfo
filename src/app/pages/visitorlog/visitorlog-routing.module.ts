import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitorlogPage } from './visitorlog.page';

const routes: Routes = [
  {
    path: '',
    component: VisitorlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitorlogPageRoutingModule {}
