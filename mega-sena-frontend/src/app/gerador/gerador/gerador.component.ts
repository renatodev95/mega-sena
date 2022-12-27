import { Component, OnInit } from '@angular/core';
import { GeradorService } from '../services/gerador.service';

@Component({
  selector: 'app-gerador',
  templateUrl: './gerador.component.html',
  styleUrls: ['./gerador.component.scss'],
})
export class GeradorComponent implements OnInit {

  value = '';
  lista: Number[] = [];

  constructor(private service: GeradorService) {}

  ngOnInit(): void {}

  sortear() {
    this.lista = this.service.getRandomNumbers(this.value);
  }
}
