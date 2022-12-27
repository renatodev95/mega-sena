import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GeradorService } from '../services/gerador.service';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-gerador',
  templateUrl: './gerador.component.html',
  styleUrls: ['./gerador.component.scss'],
})
export class GeradorComponent implements OnInit {

  countNumbers = '';
  lista$: Observable<Number[]> = of();

  constructor(private service: GeradorService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  sortear() {
    this.lista$ = this.service.getRandomNumbers(this.countNumbers)
      .pipe(
        catchError(error => {
          // console.log(error);
          this.onError('Ocorreu um erro ao carregar os números.');
          return of([]);
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
