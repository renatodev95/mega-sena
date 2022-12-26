import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerador',
  templateUrl: './gerador.component.html',
  styleUrls: ['./gerador.component.scss']
})
export class GeradorComponent implements OnInit {

  value = 'Clear me';
  lista: Number[] = []

  constructor() { }

  ngOnInit(): void {
  }

  sortear() {
    this.lista = []
    for (let i=0; i<6;i++) {
      this.lista.push(Math.floor(Math.random() * 60) + 1);
    }
  }
}
