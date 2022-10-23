import { APISingleCharacterInterface } from '../../data/API_Interface';
import React, { Component } from 'react';
import { Card } from '../Card/Card';
import { FileUpload } from '../File_Upload/File_Upload';
import './CardCreatorForm.scss';
import { ValidationMessage } from '../Validation_Message/Validation_Message';

interface ErrorsInterface {
  name: boolean;
  status: boolean;
  species: boolean;
  type: boolean;
}

interface State extends APISingleCharacterInterface {
  cards: APISingleCharacterInterface[];
  file: string;
  errors: ErrorsInterface;
  isSubmitActive: boolean;
  isSubmitDone: boolean;
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

export class CardCreatorForm extends Component {
  state: State = {
    file: '',
    cards: [],
    ...defaultFormValues,
    errors: defaultErrorStatus,
    isSubmitActive: false,
    isSubmitDone: false,
  };

  handleChangeInput = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({ isSubmitActive: true });
    this.setState({ errors: defaultErrorStatus });
  };

  handleUpload = (event: React.FormEvent<HTMLInputElement>): void => {
    if (event.currentTarget.files !== null) {
      this.setState({ image: URL.createObjectURL(event.currentTarget.files[0]) });
    }
  };

  validation = (): boolean => {
    let isValid = true;

    for (const key in defaultErrorStatus) {
      if (!this.state[key as keyof State]) {
        isValid = false;
        this.setState((prevState: State) => {
          const errors = Object.assign({}, prevState.errors);
          errors[key as keyof ErrorsInterface] = true;
          return { errors };
        });
      } else {
        this.setState((prevState: State) => {
          const errors = Object.assign({}, prevState.errors);
          errors[key as keyof ErrorsInterface] = false;
          return { errors };
        });
      }
    }
    return isValid;
  };

  onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.validation()) {
      this.setState({
        cards: [
          ...this.state.cards,
          {
            name: this.state.name,
            status: this.state.status,
            species: this.state.species,
            type: this.state.type,
            gender: this.state.gender,
            image: this.state.image,
            id: (Number(this.state.id) + 1).toString(),
          },
        ],
        id: (Number(this.state.id) + 1).toString(),
        errors: defaultErrorStatus,
      });
      Object.assign(this.state, defaultFormValues);
      this.setState({ isSubmitDone: true });
      setTimeout(() => {
        this.setState({ isSubmitDone: false });
      }, 2000);
    } else {
      console.log('Form inputs incorrect!');
    }
    this.setState({ isSubmitActive: false });
  };

  render() {
    console.log(this.state);

    return (
      <form className="card-creator-form" onSubmit={this.onSubmitHandler}>
        <label className="card-creator-form__name input-element">
          Name:
          <input
            type="text"
            name="name"
            className="input-element__input"
            value={this.state.name}
            placeholder={'Name...'}
            onChange={this.handleChangeInput}
          />
          {this.state.errors.name && (
            <ValidationMessage className="input-element" message="Incorrect value" />
          )}
        </label>
        <label className="card-creator-form__status input-element">
          Status:
          <input
            type="text"
            name="status"
            className="input-element__input"
            value={this.state.status}
            placeholder={'Status...'}
            onChange={this.handleChangeInput}
          />
          {this.state.errors.status && (
            <ValidationMessage className="input-element" message="Incorrect value" />
          )}
        </label>
        <label className="card-creator-form__species input-element">
          Species:
          <input
            type="text"
            name="species"
            className="input-element__input"
            value={this.state.species}
            placeholder={'Species...'}
            onChange={this.handleChangeInput}
          />
          {this.state.errors.species && (
            <ValidationMessage className="input-element" message="Incorrect value" />
          )}
        </label>
        <label className="card-creator-form__type input-element">
          Type:
          <input
            type="text"
            name="type"
            className="input-element__input"
            value={this.state.type}
            placeholder={'Type...'}
            onChange={this.handleChangeInput}
          />
          {this.state.errors.type && (
            <ValidationMessage className="input-element" message="Incorrect value" />
          )}
        </label>
        <label className="card-creator-form__gender input-element">
          Gender:
          <select
            name="gender"
            className="input-element__select"
            value={this.state.gender}
            placeholder="Gender..."
            onChange={this.handleChangeInput}
          >
            <option value="Unknown">Unknown</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <div className={'card-creator-form__file-upload file-upload'}>
          <FileUpload className={'file-upload'} handleUpload={this.handleUpload} />
          <img className={'file-upload__img'} src={this.state.image} alt={'character image'} />
        </div>
        {this.state.isSubmitDone && (
          <ValidationMessage
            className="input-element"
            message="Card has been created!"
            isPositive={true}
          />
        )}
        <button
          className="card-creator-form__submit-button"
          type="submit"
          disabled={!this.state.isSubmitActive}
        >
          Create character
        </button>
        <div className="cards-wrapper">
          {this.state.cards.length !== 0 &&
            this.state.cards.map((element) => <Card key={element.id} info={element} />)}
        </div>
      </form>
    );
  }
}
