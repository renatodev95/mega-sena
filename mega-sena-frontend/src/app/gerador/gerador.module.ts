import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { GeradorRoutingModule } from './gerador-routing.module';
import { GeradorComponent } from './gerador/gerador.component';


@NgModule({
  declarations: [
    GeradorComponent
  ],
  imports: [
    CommonModule,
    GeradorRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ]
})
export class GeradorModule { }
