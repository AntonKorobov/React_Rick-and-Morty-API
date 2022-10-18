import { CardInterface } from 'data/CardInterface';
import React, { Component } from 'react';
import Card from '../Card';
import Checkbox from '../Checkbox';
import FileUpload from '../FileUpload';
import CardData from '../../data/CardData.json';
import './CardCreatorForm.scss';
import ModalWindow from '../ModalWindow';

interface State extends CardInterface {
  cards: CardInterface[];
  file: string;
  errors: { title: boolean; author: boolean; publisher: boolean; publishDate: boolean };
}

const lastCardId = CardData[CardData.length - 1].id;

const defaultFormValues: CardInterface = {
  title: '',
  author: '',
  publisher: '',
  category: [],
  description: '',
  pages: 0,
  publishDate: '',
  price: 0,
  language: 'English',
  coverType: 'Paperback',
  img: '',
  id: lastCardId,
  written: false,
};

export default class Forms extends Component {
  state: State = {
    file: '',
    cards: [],
    ...defaultFormValues,
    errors: { title: false, author: false, publisher: false, publishDate: false },
  };

  handleChangeInput = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleChangeCheckbox = (event: { target: { name: string; checked: boolean } }) => {
    const { name, checked } = event.target;
    if (checked) {
      this.setState((prevState: State) => ({
        category: [name, ...prevState.category],
      }));
    } else {
      this.setState((prevState: State) => ({
        category: prevState.category
          .map((element) => {
            if (element === name) return '';
            return element;
          })
          .filter((element) => element),
      }));
    }
  };

  handleUpload = (event: React.FormEvent<HTMLInputElement>): void => {
    if (event.currentTarget.files !== null) {
      this.setState({ img: URL.createObjectURL(event.currentTarget.files[0]) });
    }
  };

  validation = (): boolean => {
    let isValid = true;

    if (!this.state.title) {
      isValid = false;
      this.setState((prevState: State) => {
        const errors = Object.assign({}, prevState.errors);
        errors.title = true;
        return { errors };
      });
    } else {
      this.setState((prevState: State) => {
        const errors = Object.assign({}, prevState.errors);
        errors.title = false;
        return { errors };
      });
    }
    if (!this.state.author) {
      isValid = false;
      this.setState((prevState: State) => {
        const errors = Object.assign({}, prevState.errors);
        errors.author = true;
        return { errors };
      });
    } else {
      this.setState((prevState: State) => {
        const errors = Object.assign({}, prevState.errors);
        errors.author = false;
        return { errors };
      });
    }
    if (!this.state.publisher) {
      isValid = false;
      this.setState((prevState: State) => {
        const errors = Object.assign({}, prevState.errors);
        errors.publisher = true;
        return { errors };
      });
    } else {
      this.setState((prevState: State) => {
        const errors = Object.assign({}, prevState.errors);
        errors.publisher = false;
        return { errors };
      });
    }
    if (!this.state.publishDate) {
      isValid = false;
      this.setState((prevState: State) => {
        const errors = Object.assign({}, prevState.errors);
        errors.publishDate = true;
        return { errors };
      });
    } else {
      this.setState((prevState: State) => {
        const errors = Object.assign({}, prevState.errors);
        errors.publishDate = false;
        return { errors };
      });
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
            title: this.state.title,
            author: this.state.author,
            publisher: this.state.publisher,
            category: this.state.category,
            description: this.state.description,
            pages: this.state.pages,
            publishDate: this.state.publisher,
            price: this.state.price,
            language: this.state.language,
            coverType: this.state.coverType,
            img: this.state.img,
            id: (Number(this.state.id) + 1).toString(),
            written: this.state.written,
          },
        ],
        id: (Number(this.state.id) + 1).toString(),
        errors: { title: false, author: false, publisher: false }, //default values
      });
      Object.assign(this.state, defaultFormValues); //!!!
    } else {
      console.log('Form inputs incorrect');
    }
    // console.log(event.currentTarget.elements);
  };

  render() {
    console.log(this.state);

    return (
      <form className="card-creator-form" onSubmit={this.onSubmitHandler}>
        <label className="card-creator-form__title input-element">
          Title:
          <input
            type="text"
            name="title"
            className="input-element__input"
            value={this.state.title}
            placeholder={'Title...'}
            onChange={this.handleChangeInput}
          />
          {this.state.errors.title && (
            <ModalWindow className="input-element__modal-window" message="Incorrect value" />
          )}
        </label>
        <label className="card-creator-form__author input-element">
          Author:
          <input
            type="text"
            name="author"
            className="input-element__input"
            value={this.state.author}
            placeholder={'Author...'}
            onChange={this.handleChangeInput}
          />
          {this.state.errors.author && (
            <ModalWindow className="input-element__modal-window" message="Incorrect value" />
          )}
        </label>
        <label className="card-creator-form__publisher input-element">
          Publisher:
          <input
            type="text"
            name="publisher"
            className="input-element__input"
            value={this.state.publisher}
            placeholder={'Publisher...'}
            onChange={this.handleChangeInput}
          />
          {this.state.errors.publisher && (
            <ModalWindow className="input-element__modal-window" message="Incorrect value" />
          )}
        </label>
        <label className="card-creator-form__publishDate input-element">
          Publish date:
          <input
            type="date"
            name="publishDate"
            className="input-element__input"
            value={this.state.publishDate}
            placeholder="Publish date..."
            onChange={this.handleChangeInput}
            min="1900-01-01"
            max="2022-12-31"
          />
          {this.state.errors.publishDate && (
            <ModalWindow className="input-element__modal-window" message="Incorrect value" />
          )}
        </label>

        <label className="card-creator-form__pages input-element">
          Pages:
          <input
            type="number"
            name="pages"
            className="input-element__input"
            value={this.state.pages}
            onChange={this.handleChangeInput}
            min="0"
            max="10000"
          />
        </label>
        <label className="card-creator-form__price input-element">
          Price:
          <input
            type="number"
            name="price"
            className="input-element__input"
            value={this.state.price}
            onChange={this.handleChangeInput}
            min="0"
            max="1000"
          />
        </label>
        <label className="card-creator-form__language input-element">
          Language:
          <select
            name="language"
            className="input-element__select"
            value={this.state.language}
            placeholder="Language..."
            onChange={this.handleChangeInput}
          >
            <option value="English">English</option>
            <option value="German">German</option>
            <option value="Russian">Russian</option>
            <option value="Spanish">Spanish</option>
          </select>
        </label>
        <label className="card-creator-form__coverType input-element">
          Cover type:
          <select
            name="coverType"
            className="input-element__select"
            value={this.state.coverType}
            placeholder="CoverType..."
            onChange={this.handleChangeInput}
          >
            <option value="Paperback">Paperback</option>
            <option value="Hardcover">Hardcover</option>
            <option value="Prebound">Prebound</option>
          </select>
        </label>
        <div className="card-creator-form__written-switch">
          <p className="switch__label">Written: </p>
          <label className="switch">
            <input
              className="switch__input"
              type="checkbox"
              name="written"
              defaultChecked={false} //uncontrolled
              onChange={this.handleChangeInput}
            />
            <span className="switch__slider"></span>
          </label>
        </div>
        <div className="card-creator-form__category">
          {[
            'Classics',
            'Literary',
            'Political',
            'Psychological',
            'Science Fiction',
            'Action & Adventure',
            'Space Science',
            'Social History',
          ].map((element) => (
            <Checkbox
              className={'card-creator-form__category-checkbox'}
              category={element}
              handleChangeCheckbox={this.handleChangeCheckbox}
              id={this.state.id}
              checked={this.state.category.includes(element)}
              key={element}
            />
          ))}
        </div>
        <textarea
          name="description"
          className="card-creator-form__description"
          value={this.state.description}
          placeholder="Description..."
          onChange={this.handleChangeInput}
        />
        <div className={'card-creator-form__file-upload file-upload'}>
          <FileUpload className={'file-upload'} handleUpload={this.handleUpload} />
          <img className={'file-upload__img'} src={this.state.img} alt={'just a picture'} />
        </div>
        <button className="card-creator-form__submit-button" type="submit">
          Submit
        </button>
        {/* <div className="cards-wrapper">
          {this.state.cards.length !== 0 ? (
            this.state.cards.map((element) => <Card key={element.id} info={element} />)
          ) : (
            <h2>Please submit form!</h2>
          )}
        </div> */}
      </form>
    );
  }
}
