import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GeradorService {

  private readonly API = 'localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getRandomNumbers(countNumbers: string) {
    return this.httpClient.get<Number[]>(`${this.API}/${countNumbers}`)
      .pipe(
        take(1),
        tap(numbers => console.log(numbers))
      )
  }
}
