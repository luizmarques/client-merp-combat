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
  _class: string = '',
  
): Promise<ResponseCharacters> => {
  return apiRequest(
    `characters`,
    {
      class_like: _class,
    },
  );
}