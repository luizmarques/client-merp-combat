import { Character, Characters } from "../types/character";
import { apiRequest, RequestOptions } from "./ApiRequest";


export const getCharacterById = async (id: string): Promise<Character> => {
  console.log('id', id);
  return apiRequest(`characters/${encodeURIComponent(id)}`);
};

export const getFeaturedCharacter = async (id: string): Promise<Character> => {
  return apiRequest(`characters/${id}`);
};

export const getCharactersByClass = async (
  _class: string,
  options?: RequestOptions
): Promise<Characters> => {
  return apiRequest(`characters`, { class_like: _class });
}

export const searchCharacters = async (
  name: string = '',
  _class: string = '',
  options: RequestOptions = {
    _limit: 20,
  }
): Promise<Characters> => {
  return apiRequest(
    `characters`,
    {
      name_like: name,
      class_like: _class,
    },
  );
}