import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeradorService {

  private readonly API = 'localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getRandomNumbers(countNumbers: string) {
    return of([1,2,3,4,5,6]);
    // return this.httpClient.get<Number[]>(`${this.API}/${countNumbers}`)
    //   .pipe(
    //     take(1),
    //     tap(numbers => console.log(numbers))
    //   )
  }
}
