import { PkInfo } from "@/types";
import { sendRequest } from "./sendRequeset";
/**
 * Fetch info by providing pokemon id
 * @param pk_id Pokemon Id (ex: 1)
 * @returns {Promise<PkInfo | null>}
 */
export async function getPokemon(pk_id: number) {
  let res: Response | null = null;
  try {
    res = await sendRequest(`getItems {
      pokemon_v2_pokemon(where: {id: {_eq: ${pk_id}}}, limit: 1) {
        id
        name
        pokemon_v2_pokemontypes(where: {pokemon_id: {_eq: ${pk_id}}}) {
          type_id
          pokemon_v2_type {
            name
          }
        }
      }
      pokemon_v2_experience_by_pk(id: ${pk_id}) {
        level
      }
    }`);
  } catch (e) {
    console.error(e);
    res = null;
  }
  if (!res) return res;
  const {data} = await res.json();
  const {pokemon_v2_pokemon, pokemon_v2_experience_by_pk} = data;
  const [pokemon] = pokemon_v2_pokemon;
  const {pokemon_v2_pokemontypes, name} = pokemon;
  const {level} = pokemon_v2_experience_by_pk;

  return {
    id: pk_id,
    name,
    types: pokemon_v2_pokemontypes.map((pkType: { pokemon_v2_type: { name: any; }; }) => pkType.pokemon_v2_type.name),
    level
  } as PkInfo
}