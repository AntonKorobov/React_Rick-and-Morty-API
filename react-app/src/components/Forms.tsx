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
    coverType: '', //slider
    img: '', //drop-down list
    id: '', //auto
    written: false, //toggle switch
  };

  handleChangeInput = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
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
        </form>
      </section>
    );
  }
}
