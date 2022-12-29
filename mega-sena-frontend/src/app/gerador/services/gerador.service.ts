import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GeradorService {

  private readonly API = 'api/gerador';

  constructor(private httpClient: HttpClient) { }

  getRandomNumbers(countNumbers: string) {
    console.log(`${this.API}/${countNumbers}`)
    return this.httpClient.get<String[]>(`${this.API}/${countNumbers}`)
      .pipe(
        take(1)
      )
  }
}
