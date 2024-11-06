import { Character, Characters } from '../types/character';
import { RequestOptions, apiRequest } from './ApiRequest';

export const getCharacterById = async (id: string): Promise<Character> => {
  return apiRequest(`characters/${encodeURIComponent(id)}`);
};

export const getFeaturedCharacter = async (id: string): Promise<Character> => {
  return apiRequest(`featured/${id}`);
};

export const getCharactersByProfession = async (
  profession: string,
  options?: RequestOptions
): Promise<Characters> => apiRequest(`characters`, { professions_like: profession }, options);

export const searchCharacters = async (
  name: string = '',
  profession: string = '',
  options: RequestOptions = {
    _limit: 100,
  }
): Promise<Characters> => {
  return apiRequest(
    `characters`,
    {
      name_like: name,
      professions_like: profession,
    },
    options
  );
}