import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeradorRoutingModule } from './gerador-routing.module';
import { GeradorComponent } from './gerador/gerador.component';


@NgModule({
  declarations: [
    GeradorComponent
  ],
  imports: [
    CommonModule,
    GeradorRoutingModule
  ]
})
export class GeradorModule { }
