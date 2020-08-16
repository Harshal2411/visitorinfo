import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitorformPage } from './visitorform.page';

const routes: Routes = [
  {
    path: '',
    component: VisitorformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitorformPageRoutingModule {}
