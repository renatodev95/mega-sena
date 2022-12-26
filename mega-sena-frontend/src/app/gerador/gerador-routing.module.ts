import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeradorComponent } from './gerador/gerador.component';

const routes: Routes = [
  { path: '', component: GeradorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeradorRoutingModule { }
