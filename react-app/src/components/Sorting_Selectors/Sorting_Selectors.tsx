import React from 'react';
import './SortingSelectors.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import {
  CharacterStatus,
  CharacterGender,
  CharacterStatusType,
  CharacterGenderType,
  CharacterSpeciesType,
  CharacterSpecies,
} from '../../data/API_Interface';
import { RootState, setFilters } from 'store';

export function SortingSelectors() {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <ul className="filters-wrapper filters-list">
      <li className="filters-list__item">
        <label className="filters-list__selector input-element">
          Status:
          <select
            name="character-status"
            className="input-element__select"
            value={filters.status}
            onChange={(event: { target: { name: string; value: string } }) => {
              searchParams.set('status', event.target.value);
              setSearchParams(searchParams);
              dispatch(
                setFilters({ ...filters, status: event.target.value as CharacterStatusType })
              );
            }}
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
      </li>
      <li className="filters-list__item">
        <label className="filters-list__selector input-element">
          Gender:
          <select
            name="character-gender"
            className="input-element__select"
            value={filters.gender}
            onChange={(event: { target: { name: string; value: string } }) => {
              searchParams.set('gender', event.target.value);
              setSearchParams(searchParams);
              dispatch(
                setFilters({ ...filters, gender: event.target.value as CharacterGenderType })
              );
            }}
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
      </li>
      <li className="filters-list__item">
        <label className="filters-list__selector input-element">
          Species:
          <select
            name="character-species"
            className="input-element__select"
            value={filters.species}
            onChange={(event: { target: { name: string; value: string } }) => {
              searchParams.set('species', event.target.value);
              setSearchParams(searchParams);
              dispatch(
                setFilters({ ...filters, species: event.target.value as CharacterSpeciesType })
              );
            }}
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
      </li>
    </ul>
  );
}
