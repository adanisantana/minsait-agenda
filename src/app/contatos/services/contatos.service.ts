import { Contatos } from './../model/contatos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { first, tap , delay, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Pessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})

export class ContatosService {
  private readonly API = 'http://localhost:8080/pessoa'

  constructor(private httpCliente: HttpClient) { }
  findAll(){
    return this.httpCliente.get<Pessoa[]>(this.API).pipe(
      catchError(error => {
        console.log(error);
        return of([])
      }),
      first(),
      delay(5000),
      tap((contatos) => {
        console.log(contatos);
    })
    );
  }
}


