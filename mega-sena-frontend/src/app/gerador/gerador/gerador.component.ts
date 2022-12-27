import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GeradorService } from '../services/gerador.service';

@Component({
  selector: 'app-gerador',
  templateUrl: './gerador.component.html',
  styleUrls: ['./gerador.component.scss'],
})
export class GeradorComponent implements OnInit {

  countNumbers = '';
  lista$: Observable<Number[]> = of();

  constructor(private service: GeradorService) {}

  ngOnInit(): void {}

  sortear() {
    this.lista$ = this.service.getRandomNumbers(this.countNumbers);
  }
}
