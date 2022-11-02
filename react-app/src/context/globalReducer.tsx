import { APISingleCharacterInterface, FiltersInterface } from 'data/API_Interface';
import { GlobalStateInterface } from 'data/GlobalStateInterface';

export enum ActionCommandType { //!!! upper case?
  setSearchBarInput = 'setSearchBarInput',
  setCards = 'setCards',
  setCharacters = 'setCharacters',
  setCurrentPage = 'setCurrentPage',
  setCardsOnPage = 'setCardsOnPage',
  setMaxPageNumber = 'setMaxPageNumber',
  setFilters = 'setFilters',
  setCurrentCharacterIndex = 'setCurrentCharacterIndex',
}

export type ActionType =
  | {
      type: ActionCommandType.setSearchBarInput;
      payload: string;
    }
  | {
      type: ActionCommandType.setCards;
      payload: APISingleCharacterInterface[];
    }
  | {
      type: ActionCommandType.setCharacters;
      payload: APISingleCharacterInterface[];
    }
  | {
      type: ActionCommandType.setCurrentCharacterIndex;
      payload: number;
    }
  | {
      type: ActionCommandType.setCurrentPage;
      payload: number;
    }
  | {
      type: ActionCommandType.setCardsOnPage;
      payload: number;
    }
  | {
      type: ActionCommandType.setMaxPageNumber;
      payload: number;
    }
  | {
      type: ActionCommandType.setFilters;
      payload: FiltersInterface;
    };

export function globalReducer(
  state: GlobalStateInterface,
  action: ActionType
): GlobalStateInterface {
  switch (action.type) {
    case ActionCommandType.setSearchBarInput:
      return {
        ...state,
        searchBarInput: action.payload,
      };
    case ActionCommandType.setCards:
      return {
        ...state,
        cards: action.payload,
      };
    case ActionCommandType.setCharacters:
      return {
        ...state,
        characters: action.payload,
      };
    case ActionCommandType.setCurrentCharacterIndex:
      let cardIndex = 0;
      for (let i = 0; i < state.characters.length; i++) {
        console.log('tick');
        if (state.characters[i].id === action.payload) {
          cardIndex = i;
          break;
        }
      }
      return {
        ...state,
        currentCharacterIndex: cardIndex,
      };
    case ActionCommandType.setCurrentPage:
      return {
        ...state,
        currentPage: action.payload,
      };
    case ActionCommandType.setCardsOnPage:
      return {
        ...state,
        cardsOnPage: action.payload,
      };
    case ActionCommandType.setMaxPageNumber:
      return {
        ...state,
        maxPageNumber: action.payload,
      };
    case ActionCommandType.setFilters:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
}
