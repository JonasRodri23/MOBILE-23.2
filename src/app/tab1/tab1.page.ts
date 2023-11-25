import { PokeAPIService } from './../services/poke-api.service';
import { ViaCEPService } from '../services/via-cep.service';
import { Component } from '@angular/core';
import { PokemonApiResponse } from '../services/poke-api.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  areaBuscarPokemon: string = '52011210';
  areaBusca: any = {
    bairro: '',
    localidade: '',
    logradouro: '',
    uf: ''
  };

  pokemonData: PokemonApiResponse | null = null;

  constructor(
    private pokeAPIService: PokeAPIService,
    private viaCEPService: ViaCEPService
  ) {}

  gerarIdPokemon(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  buscarPokemon() {
    this.viaCEPService.getViaCEPService(this.areaBuscarPokemon)
      .subscribe((value) => {
        this.areaBusca.logradouro = JSON.parse(JSON.stringify(value))['logradouro'];
        this.areaBusca.bairro = ', ' + JSON.parse(JSON.stringify(value))['bairro'];
        this.areaBusca.localidade = ' - ' + JSON.parse(JSON.stringify(value))['localidade'];
        this.areaBusca.uf = '-' + JSON.parse(JSON.stringify(value))['uf'];

        const pokemonId = this.gerarIdPokemon();
        this.pokeAPIService.getPokeAPIService(pokemonId)
          .subscribe(
            (pokemonData: PokemonApiResponse) => {
              this.pokemonData = pokemonData;

              console.log('Dados do Pokémon:', this.pokemonData);
            },
            (error) => {
              console.error('Erro ao buscar dados do Pokémon:', error);
            }
          );
      });
  }
}
