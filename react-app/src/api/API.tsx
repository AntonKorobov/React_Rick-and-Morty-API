import { APICharacterInterface } from 'data/API_Interface';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface GetCharacterInterface {
  name: string;
  page: number;
  status: string;
  gender: string;
  species: string;
}

export const getCharacter = createAsyncThunk<
  APICharacterInterface | undefined,
  GetCharacterInterface
>(
  'globalState/getCharacter',
  async (
    { name, page, status = '', gender = '', species = '' },
    { rejectWithValue }
  ): Promise<APICharacterInterface | undefined> => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&gender=${gender}&species=${species}`
      );
      if (response.status === 200) {
        const data: APICharacterInterface = await response.json();
        console.log(data.results);
        return data;
      }
      return rejectWithValue('Error');
    } catch (error) {
      throw error;
    }
  }
);
