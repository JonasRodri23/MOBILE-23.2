import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonApiResponse } from './poke-api.model';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  constructor(private httpClient: HttpClient) { }

  getPokeAPIService(id: number = Math.floor(Math.random() * 100)): Observable<PokemonApiResponse> {
    return this.httpClient.get<PokemonApiResponse>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
