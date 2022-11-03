import React from 'react';
import './SortingSelectors.scss';
import { useSelector, useDispatch } from 'react-redux';

import {
  CharacterStatus,
  CharacterGender,
  CharacterStatusType,
  CharacterGenderType,
  CharacterSpeciesType,
  CharacterSpecies,
} from '../../data/API_Interface';
import { RootState, setFilters } from 'store';

export default function SortingSelectors() {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);

  return (
    <div className="sorting-selectors">
      <label className="sorting-selectors__status input-element">
        Status:
        <select
          name="character-status"
          className="input-element__select current-page-input__select"
          value={filters.status}
          onChange={(event: { target: { name: string; value: string } }) =>
            dispatch(setFilters({ ...filters, status: event.target.value as CharacterStatusType }))
          }
        >
          <option className="input-element__option" value={''}>
            {''}
          </option>
          <option className="input-element__option" value={CharacterStatus.alive}>
            {CharacterStatus.alive}
          </option>
          <option className="input-element__option" value={CharacterStatus.dead}>
            {CharacterStatus.dead}
          </option>
          <option className="input-element__option" value={CharacterStatus.unknown}>
            {CharacterStatus.unknown}
          </option>
        </select>
      </label>
      <label className="sorting-selectors__gender input-element">
        Gender:
        <select
          name="character-gender"
          className="input-element__select current-page-input__select"
          value={filters.gender}
          onChange={(event: { target: { name: string; value: string } }) =>
            dispatch(setFilters({ ...filters, gender: event.target.value as CharacterGenderType }))
          }
        >
          <option className="input-element__option" value={''}>
            {''}
          </option>
          <option className="input-element__option" value={CharacterGender.male}>
            {CharacterGender.male}
          </option>
          <option className="input-element__option" value={CharacterGender.female}>
            {CharacterGender.female}
          </option>
          <option className="input-element__option" value={CharacterGender.unknown}>
            {CharacterGender.unknown}
          </option>
        </select>
      </label>
      <label className="sorting-selectors__species input-element">
        Species:
        <select
          name="character-species"
          className="input-element__select current-page-input__select"
          value={filters.species}
          onChange={(event: { target: { name: string; value: string } }) =>
            dispatch(
              setFilters({ ...filters, species: event.target.value as CharacterSpeciesType })
            )
          }
        >
          <option className="input-element__option" value={''}>
            {''}
          </option>
          <option className="input-element__option" value={CharacterSpecies.human}>
            {CharacterSpecies.human}
          </option>
          <option className="input-element__option" value={CharacterSpecies.alien}>
            {CharacterSpecies.alien}
          </option>
        </select>
      </label>
    </div>
  );
}
