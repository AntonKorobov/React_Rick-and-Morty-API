import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
// import { GlobalStateInterface } from 'data/GlobalStateInterface';

export const GlobalStateDefaultValues = {
  // cards: [],
  // setCards: () => {},
  // characters: [],
  // setCharacters: () => {},
  // currentCharacterIndex: 0,
  // setCurrentCharacterIndex: () => {},
  // currentPage: 1,
  // setCurrentPage: () => {},
  // cardsOnPage: 20,
  // setCardsOnPage: () => {},
  searchBarInput: '',
  // setSearchBarInput: () => {},
  // sortingType: '',
  // maxPageNumber: 20,
  // setMaxPageNumber: () => {},
  // filters: {
  //   status: '',
  //   gender: '',
  //   species: '',
  // },
  // setFilters: () => {},
  // currentPath: '',
  // setCurrentPath: () => {},
};

const globalStateSlice = createSlice({
  name: 'globalState',
  initialState: GlobalStateDefaultValues,
  reducers: {
    setSearchBarInput: (state, action: PayloadAction<string, string>) => {
      return {
        ...state,
        searchBarInput: action.payload,
      };
    },
  },
});

export const { setSearchBarInput } = globalStateSlice.actions;

export const store = configureStore({
  reducer: globalStateSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
