// poke-api.model.ts (crie um arquivo separado para a interface)
export interface PokemonApiResponse {
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: {
    ability: {
      name: string;
    };
  }[];
  height: number;
  weight: number;
}
