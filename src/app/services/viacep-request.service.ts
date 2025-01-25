import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cep } from '../interfaces/cep.interface';

@Injectable({
  providedIn: 'root',
})
export class ViacepRequestService {
  constructor(private http: HttpClient) {}

  dados: Cep | null = null;

  findByCep(cep: string): Observable<Cep> {
    const viaCepUrl = `https://viacep.com.br/ws/${cep}/json`;
    return this.http.get<Cep>(viaCepUrl).pipe(
      map((dado) => {
        this.dados = dado;
        return dado;
      })
    );
  }
}
