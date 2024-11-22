import { Character, Characters, type ResponseCharacters } from "../types/character";
import { apiRequest, RequestOptions } from "./ApiRequest";


export const getCharacterById = async (id: string): Promise<Character> => {
  return apiRequest(`characters/${encodeURIComponent(id)}`);
};

export const getCharactersByClass = async (
  _class: string,
  options?: RequestOptions
): Promise<ResponseCharacters> => {
  return apiRequest(`characters`, { class_like: _class }, options);
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
      class_like: _class,
      name_like: name,
    },
    options
  );
}