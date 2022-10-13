import { CardInterface } from 'date/CardInterface';
import React, { Component } from 'react';
import Card from './Card';
import Checkbox from './Checkbox';
import FileUpload from './FileUpload';
import './Form.scss';

interface State extends CardInterface {
  cards: CardInterface[];
}

export default class Forms extends Component {
  state: State = {
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
    id: '', //auto
    written: false,
    cards: [],
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
            if (element === name) return ''; //interface has empty element
            return element;
          })
          .filter((element) => element),
      }));
    }
  };

  onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // this.setState((prevState) => {
    //   cards: [...prevState, this.state];
    // });
    this.state.cards.push({
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
      id: this.state.id,
      written: this.state.written,
    });
    console.log(event.currentTarget.elements);
  };

  render() {
    console.log(this.state);

    return (
      <section className="forms">
        <h1>Forms</h1>
        <form className="card-creator-form" onSubmit={this.onSubmitHandler}>
          <label className="card-creator-form__title input-element">
            Title:
            <input
              type="text"
              name="title"
              className="input-element__input"
              value={this.state.title}
              placeholder="Title..."
              onChange={this.handleChangeInput}
            />
          </label>
          <label className="card-creator-form__author input-element">
            Author:
            <input
              type="text"
              name="author"
              className="input-element__input"
              value={this.state.author}
              placeholder="Author..."
              onChange={this.handleChangeInput}
            />
          </label>
          <label className="card-creator-form__publisher input-element">
            Publisher:
            <input
              type="text"
              name="publisher"
              className="input-element__input"
              value={this.state.publisher}
              placeholder="Publisher..."
              onChange={this.handleChangeInput}
            />
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
          </label>

          <label className="card-creator-form__pages input-element">
            Pages:
            <input
              type="number"
              name="pages"
              className="input-element__input"
              value={this.state.pages}
              onChange={this.handleChangeInput}
              min="1"
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
              min="1"
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
          <FileUpload className={'card-creator-form__img'} />
          <button className="card-creator-form__submit-button" type="submit">
            Submit
          </button>
          {this.state.cards.length !== 0 ? (
            <Card info={this.state.cards[0]} />
          ) : (
            <h2>Pleas submit form!</h2>
          )}
        </form>
      </section>
    );
  }
}
