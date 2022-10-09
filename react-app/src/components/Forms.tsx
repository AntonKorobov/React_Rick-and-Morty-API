import { CardInterface } from 'date/CardInterface';
import React, { Component } from 'react';

export default class Forms extends Component {
  state: CardInterface = {
    title: '', //text input
    author: '', //text input
    publisher: '', //text input
    category: [''], //checkbox
    description: '', //text area
    pages: 0, //text input
    publishDate: 0, //date input
    price: 0, //text input
    language: '', //drop-down list
    coverType: '', //slider
    img: '', //drop-down list
    id: '', //auto
    written: true, //toggle switch
  };

  handleChange = (event: { target: { name: string; value: string; checked?: boolean } }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { name, value, checked } = event.target;
    if (name === 'category') {
      this.setState({ category: checked });
    } else {
      this.setState({ [name]: value });
    }

    console.log(this.state);
  };

  render() {
    return (
      <section className="forms">
        <h1>Forms</h1>
        <form className="card-creator-form">
          <input
            type="text"
            name="Classics"
            className="card-creator-form__title"
            value={this.state.title}
            placeholder="Title..."
            onChange={this.handleChange}
          />
          <div className="ard-creator-form__category">
            <input
              type="checkbox"
              name="category-Literary"
              // category="Literary"
              className="card-creator-form__category-checkbox"
              onChange={this.handleChange}
            />
            <input
              type="checkbox"
              name="category-Classics"
              className="card-creator-form__category-checkbox"
              onChange={this.handleChange}
            />
          </div>
        </form>
      </section>
    );
  }
}
