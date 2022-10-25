import React, { Component } from 'react';
import { CardCreatorForm } from '../../components/Card_Creator_Form/Card_Creator_Form';

export class Forms extends Component {
  render() {
    return (
      <section className="forms-page" data-testid="forms">
        <h1 className="forms-page__h1 h1">Forms page</h1>
        <CardCreatorForm />
      </section>
    );
  }
}
