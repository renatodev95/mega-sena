import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  countNumbers = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(2),
    Validators.min(6),
    Validators.max(15)]);
  lista$: Observable<String[]> = of();

  constructor(private service: GeradorService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  sortear() {
    this.lista$ = this.service.getRandomNumbers(this.countNumbers.value)
      .pipe(
        catchError(error => {
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

  getErrorMessage() {
    if (this.countNumbers.hasError('required')) {
      return 'Campo obrigatório.';
    }

    return this.countNumbers.hasError('min') || this.countNumbers.hasError('max') ? 'É necessário informar um número entre 6 e 15.' : '';
  }

  limpar() {
    this.countNumbers.setValue('');
  }

}
