import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { getCharacter } from 'api/API';
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
  isLoading: boolean;
  isLoadingError: boolean;
  lastCardId: number;
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
  isLoading: true,
  isLoadingError: false,
  lastCardId: 1,
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
    setIsLoading: (state, action: PayloadAction<boolean, string>) => {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
    setIsLoadingError: (state, action: PayloadAction<boolean, string>) => {
      return {
        ...state,
        isLoadingError: action.payload,
      };
    },
    setLastCardId: (state, action: PayloadAction<number, string>) => {
      return {
        ...state,
        lastCardId: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacter.pending, (state) => {
        return {
          ...state,
          isLoading: true,
          isLoadingError: false,
          characters: [],
        };
      })
      .addCase(getCharacter.fulfilled, (state, action) => {
        if (action.payload) {
          return {
            ...state,
            characters: action.payload.results,
            isLoading: false,
            isLoadingError: false,
            maxPageNumber: action.payload.info.pages,
          };
        }
      })
      .addCase(getCharacter.rejected, (state, action) => {
        if (action.payload) {
          return {
            ...state,
            isLoading: false,
            isLoadingError: true,
          };
        }
      });
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
  setIsLoading,
  setIsLoadingError,
  setLastCardId,
} = globalStateSlice.actions;

export const store = configureStore({
  reducer: globalStateSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
