import React, { Component } from 'react';
import CardCreationForm from './CardCreatorForm';

export default class Forms extends Component {
  render() {
    return (
      <section className="forms">
        <h1>Forms</h1>
        <CardCreationForm />
      </section>
    );
  }
}
