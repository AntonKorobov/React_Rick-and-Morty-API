import { APICharacterInterface } from 'data/API_Interface';

export class API {
  static async getCharacter(
    name: string,
    page: number,
    status = '',
    gender = '',
    species = ''
  ): Promise<APICharacterInterface | undefined> {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&gender=${gender}&species=${species}`
      );
      if (response.status === 200) {
        const data: APICharacterInterface = await response.json();
        return data;
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
