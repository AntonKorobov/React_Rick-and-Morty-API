import { APICharacterInterface } from 'data/API_Interface';

export class API {
  static async getCharacter(
    name: string,
    page: number
  ): Promise<APICharacterInterface | undefined> {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`
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
