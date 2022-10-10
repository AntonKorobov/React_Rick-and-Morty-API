import { CardInterface } from 'date/CardInterface';
import React, { Component } from 'react';
import Checkbox from './Checkbox';
import './Form.scss';

export default class Forms extends Component {
  state: CardInterface = {
    title: '', //text input
    author: '', //text input
    publisher: '', //text input
    category: [], //checkbox
    description: '', //text area
    pages: 0, //text input
    publishDate: 0, //date input
    price: 0, //text input
    language: '', //drop-down list
    coverType: '', //drop-down list
    img: '', //file upload
    id: '', //auto
    written: false, //toggle switch
  };

  handleChangeInput = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleChangeCheckbox = (event: { target: { name: string; checked: boolean } }) => {
    const { name, checked } = event.target;
    if (checked) {
      this.setState((prevState: CardInterface) => ({
        category: [name, ...prevState.category],
      }));
    } else {
      this.setState((prevState: CardInterface) => ({
        category: prevState.category
          .map((element) => {
            if (element === name) return ''; //interface has empty element
            return element;
          })
          .filter((element) => element),
      }));
    }
  };

  render() {
    console.log(this.state);

    return (
      <section className="forms">
        <h1>Forms</h1>
        <form className="card-creator-form">
          <input
            type="text"
            name="title"
            className="card-creator-form__title"
            value={this.state.title}
            placeholder="Title..."
            onChange={this.handleChangeInput}
          />
          <input
            type="text"
            name="author"
            className="card-creator-form__author"
            value={this.state.author}
            placeholder="Author..."
            onChange={this.handleChangeInput}
          />
          <input
            type="text"
            name="publisher"
            className="card-creator-form__publisher"
            value={this.state.publisher}
            placeholder="Publisher..."
            onChange={this.handleChangeInput}
          />
          <div className="card-creator-form__category">
            <Checkbox
              className={'card-creator-form__category-checkbox'}
              category={'Classics'}
              handleChangeCheckbox={this.handleChangeCheckbox}
              id={this.state.id}
              checked={this.state.category.includes('Classics')}
            />
            <Checkbox
              className={'card-creator-form__category-checkbox'}
              category={'Literary'}
              handleChangeCheckbox={this.handleChangeCheckbox}
              id={this.state.id}
              checked={this.state.category.includes('Literary')}
            />
            <Checkbox
              className={'card-creator-form__category-checkbox'}
              category={'Political'}
              handleChangeCheckbox={this.handleChangeCheckbox}
              id={this.state.id}
              checked={this.state.category.includes('Political')}
            />
            <Checkbox
              className={'card-creator-form__category-checkbox'}
              category={'Psychological'}
              handleChangeCheckbox={this.handleChangeCheckbox}
              id={this.state.id}
              checked={this.state.category.includes('Psychological')}
            />
          </div>
          <textarea
            name="description"
            className="card-creator-form__description"
            value={this.state.description}
            placeholder="Description..."
            onChange={this.handleChangeInput}
          />
          <input
            type="number"
            name="price"
            className="card-creator-form__price"
            value={this.state.price}
            onChange={this.handleChangeInput}
            min="1"
            max="10000"
          />
          <select
            name="language"
            className="card-creator-form__language"
            value={this.state.language}
            placeholder="Language..."
            onChange={this.handleChangeInput}
          >
            <option value="English">English</option>
            <option value="German">German</option>
            <option value="Russian">Russian</option>
            <option value="Spanish">Spanish</option>
          </select>
          <select
            name="coverType"
            className="card-creator-form__coverType"
            value={this.state.coverType}
            placeholder="CoverType..."
            onChange={this.handleChangeInput}
          >
            <option value="Paperback">Paperback</option>
            <option value="Hardcover">Hardcover</option>
            <option value="Prebound">Prebound</option>
          </select>
          <label className="card-creator-form__written-switch switch">
            <input
              className="switch__input"
              type="checkbox"
              name="written"
              defaultChecked={false} //uncontrolled
              onChange={this.handleChangeInput}
            />
            <span className="switch__slider"></span>
          </label>
        </form>
      </section>
    );
  }
}
