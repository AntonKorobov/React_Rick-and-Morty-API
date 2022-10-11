import { CardInterface } from 'date/CardInterface';
import React, { Component } from 'react';
import Card from './Card';
import CardCreationForm from './CardCreationForm';

type MyProps = { ''?: '' };
type MyState = { info: CardInterface };

export default class Forms extends Component<Readonly<MyProps>, MyState> {
  onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // this.setState({ info: event.currentTarget.elements[0] });
    console.log(event.currentTarget.elements);
  };

  render() {
    return (
      <div className="forms">
        <CardCreationForm onSubmitHandler={this.onSubmitHandler} />
        <Card info={this.state.info} />
      </div>
    );
  }
}
