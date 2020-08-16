import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitorlogPageRoutingModule } from './visitorlog-routing.module';

import { VisitorlogPage } from './visitorlog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitorlogPageRoutingModule
  ],
  declarations: [VisitorlogPage]
})
export class VisitorlogPageModule {}
