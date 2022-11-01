import { APISingleCharacterInterface } from '../../data/API_Interface';
import React, { useState } from 'react';
import { Card } from '../Card/Card';
import { FileUpload } from '../File_Upload/File_Upload';
import './CardCreatorForm.scss';
import { ValidationMessage } from '../Validation_Message/Validation_Message';
import { useGlobalStateContext } from 'context/GlobalStateContext';

interface ErrorsInterface {
  name: boolean;
  status: boolean;
  species: boolean;
  type: boolean;
}

const defaultStringValue = '';
const defaultFormValues: APISingleCharacterInterface = {
  id: 0,
  name: defaultStringValue,
  status: defaultStringValue,
  species: defaultStringValue,
  type: defaultStringValue,
  gender: defaultStringValue,
  origin: {
    name: defaultStringValue,
    url: defaultStringValue,
  },
  location: {
    name: defaultStringValue,
    url: defaultStringValue,
  },
  image: defaultStringValue,
  episode: [defaultStringValue, defaultStringValue],
  url: defaultStringValue,
  created: defaultStringValue,
};

const defaultErrorStatus: ErrorsInterface = {
  name: false,
  status: false,
  species: false,
  type: false,
};

export function CardCreatorForm() {
  const [errors, setError] = useState<ErrorsInterface>(defaultErrorStatus);
  const [isSubmitActive, setIsSubmitActive] = useState(false);
  const [isSubmitDone, setIsSubmitDone] = useState(false);
  const [cardInformation, setCardInformation] =
    useState<APISingleCharacterInterface>(defaultFormValues);

  const { cards, setCards } = useGlobalStateContext();

  const handleChangeInput = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setCardInformation((prevState) => ({
      ...prevState,
      [name as keyof APISingleCharacterInterface]: value,
    }));

    setIsSubmitActive(true);
    setError(defaultErrorStatus);
  };

  const handleUpload = (event: React.FormEvent<HTMLInputElement>): void => {
    setCardInformation((prevState) => {
      if (event.currentTarget.files !== null) {
        return {
          ...prevState,
          image: URL.createObjectURL(event.currentTarget.files[0]),
        };
      }
      return prevState;
    });
  };

  const validation = (): boolean => {
    let isValid = true;

    for (const key in defaultErrorStatus) {
      if (!cardInformation[key as keyof APISingleCharacterInterface]) {
        isValid = false;
        setError((prevValue) => ({
          ...prevValue,
          [key as keyof ErrorsInterface]: true,
        }));
      } else {
        setError((prevValue) => ({
          ...prevValue,
          [key as keyof ErrorsInterface]: false,
        }));
      }
    }
    return isValid;
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validation()) {
      setCards([
        ...cards,
        {
          ...defaultFormValues,
          name: cardInformation.name,
          status: cardInformation.status,
          species: cardInformation.species,
          type: cardInformation.type,
          gender: cardInformation.gender,
          image: cardInformation.image,
          id: cards.length === 0 ? 0 : cards[cards.length - 1].id + 1,
        },
      ]);
      setCardInformation((prevState) => ({
        ...prevState,
        id: cardInformation.id + 1,
      }));
      setError(defaultErrorStatus);

      // Sets default value
      setCardInformation((prevState) => ({
        ...prevState,
        ...defaultFormValues,
        id: prevState.id,
      }));

      setIsSubmitDone(true);
      setTimeout(() => {
        setIsSubmitDone(false);
      }, 2000);
    } else {
      console.log('Form inputs incorrect!');
    }
    setIsSubmitActive(false);
  };

  console.log(cardInformation);

  return (
    <form className="card-creator-form" onSubmit={onSubmitHandler}>
      <label className="card-creator-form__name input-element">
        Name:
        <input
          type="text"
          name="name"
          className="input-element__input"
          value={cardInformation.name}
          placeholder={'Name...'}
          onChange={handleChangeInput}
        />
        {errors.name && <ValidationMessage className="input-element" message="Incorrect value" />}
      </label>
      <label className="card-creator-form__status input-element">
        Status:
        <input
          type="text"
          name="status"
          className="input-element__input"
          value={cardInformation.status}
          placeholder={'Status...'}
          onChange={handleChangeInput}
        />
        {errors.status && <ValidationMessage className="input-element" message="Incorrect value" />}
      </label>
      <label className="card-creator-form__species input-element">
        Species:
        <input
          type="text"
          name="species"
          className="input-element__input"
          value={cardInformation.species}
          placeholder={'Species...'}
          onChange={handleChangeInput}
        />
        {errors.species && (
          <ValidationMessage className="input-element" message="Incorrect value" />
        )}
      </label>
      <label className="card-creator-form__type input-element">
        Type:
        <input
          type="text"
          name="type"
          className="input-element__input"
          value={cardInformation.type}
          placeholder={'Type...'}
          onChange={handleChangeInput}
        />
        {errors.type && <ValidationMessage className="input-element" message="Incorrect value" />}
      </label>
      <label className="card-creator-form__gender input-element">
        Gender:
        <select
          name="gender"
          className="input-element__select"
          value={cardInformation.gender}
          placeholder="Gender..."
          onChange={handleChangeInput}
        >
          <option value="Unknown">Unknown</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <div className={'card-creator-form__file-upload file-upload'}>
        <FileUpload className={'file-upload'} handleUpload={handleUpload} />
        <img className={'file-upload__img'} src={cardInformation.image} alt={'character image'} />
      </div>
      {isSubmitDone && (
        <ValidationMessage
          className="input-element"
          message="Card has been created!"
          isPositive={true}
        />
      )}
      <button className="card-creator-form__submit-button" type="submit" disabled={!isSubmitActive}>
        Create character
      </button>
      <div className="cards-wrapper">
        {cards.length !== 0 && cards.map((element) => <Card key={element.id} info={element} />)}
      </div>
    </form>
  );
}
