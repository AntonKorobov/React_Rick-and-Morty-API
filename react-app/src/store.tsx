import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { APISingleCharacterInterface, FiltersInterface } from 'data/API_Interface';

export interface GlobalStateInterface {
  cards: APISingleCharacterInterface[];
  characters: APISingleCharacterInterface[];
  currentCharacterIndex: number;
  currentPage: number;
  searchBarInput: string;
  maxPageNumber: number;
  filters: FiltersInterface;
  currentPath: string;
}

export const initialGlobalState: GlobalStateInterface = {
  cards: [],
  characters: [],
  currentCharacterIndex: 0,
  currentPage: 1,
  searchBarInput: '',
  maxPageNumber: 20,
  filters: {
    status: '',
    gender: '',
    species: '',
  },
  currentPath: '',
};

const globalStateSlice = createSlice({
  name: 'globalState',
  initialState: initialGlobalState,
  reducers: {
    setSearchBarInput: (state, action: PayloadAction<string, string>) => {
      return {
        ...state,
        searchBarInput: action.payload,
      };
    },
    setCards: (state, action: PayloadAction<APISingleCharacterInterface[], string>) => {
      return {
        ...state,
        cards: action.payload,
      };
    },
    setCharacters: (state, action: PayloadAction<APISingleCharacterInterface[], string>) => {
      return {
        ...state,
        characters: action.payload,
      };
    },
    setCurrentPage: (state, action: PayloadAction<number, string>) => {
      return {
        ...state,
        currentPage: action.payload,
      };
    },
    setMaxPageNumber: (state, action: PayloadAction<number, string>) => {
      return {
        ...state,
        maxPageNumber: action.payload,
      };
    },
    setCurrentCharacterIndex: (state, action: PayloadAction<number, string>) => {
      let cardIndex = 0;
      for (let i = 0; i < state.characters.length; i++) {
        if (state.characters[i].id === action.payload) {
          cardIndex = i;
          break;
        }
      }
      return {
        ...state,
        currentCharacterIndex: cardIndex,
      };
    },
    setCurrentPath: (state, action: PayloadAction<string, string>) => {
      return {
        ...state,
        currentPath: action.payload,
      };
    },
    setFilters: (state, action: PayloadAction<FiltersInterface, string>) => {
      return {
        ...state,
        filters: action.payload,
      };
    },
  },
});

export const {
  setSearchBarInput,
  setCards,
  setCurrentPage,
  setMaxPageNumber,
  setCurrentCharacterIndex,
  setCharacters,
  setCurrentPath,
  setFilters,
} = globalStateSlice.actions;

export const store = configureStore({
  reducer: globalStateSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
