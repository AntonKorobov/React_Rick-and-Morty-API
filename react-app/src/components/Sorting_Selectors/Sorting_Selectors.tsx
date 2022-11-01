import { useGlobalStateContext } from 'context/GlobalStateContext';
import React from 'react';
import './SortingSelectors.scss';

import {
  CharacterStatus,
  CharacterGender,
  CharacterStatusType,
  CharacterGenderType,
} from '../../data/API_Interface';

export default function SortingSelectors() {
  const { filters, setFilters } = useGlobalStateContext();

  return (
    <div className="sorting-selectors">
      <label className="sorting-selectors__status input-element">
        Status:
        <select
          name="character-status"
          className="input-element__select current-page-input__select"
          value={filters.status}
          onChange={(event: { target: { name: string; value: string } }) =>
            setFilters({ ...filters, status: event.target.value as CharacterStatusType })
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
            setFilters({ ...filters, gender: event.target.value as CharacterGenderType })
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
    </div>
  );
}
