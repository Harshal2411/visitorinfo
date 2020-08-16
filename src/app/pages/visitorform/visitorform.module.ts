import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitorformPageRoutingModule } from './visitorform-routing.module';

import { VisitorformPage } from './visitorform.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    VisitorformPageRoutingModule
  ],
  providers:[],
  declarations: [VisitorformPage]
})
export class VisitorformPageModule {}
