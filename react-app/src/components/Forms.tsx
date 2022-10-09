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

  render() {
    return (
      <section className="forms">
        <h1>Forms</h1>
      </section>
    );
  }
}
