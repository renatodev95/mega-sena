import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { GeradorModule } from './../gerador/gerador.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';



@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    GeradorModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule
  ],
  exports: [
    ErrorDialogComponent
  ]
})
export class SharedModule { }
