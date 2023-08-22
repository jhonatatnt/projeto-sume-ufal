import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { FrequencyData } from './component1';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private readonly API_BASE = 'https://servicodados.ibge.gov.br/api/v2/censos/nomes/';

  constructor(private http: HttpClient) { }

  List(nome: string) {
    const url = this.API_BASE + nome;

    return this.http.get<FrequencyData[]>(url)
      .pipe(
        tap(data => console.log('Dados do serviço:', data))
      );
  }
  
}
