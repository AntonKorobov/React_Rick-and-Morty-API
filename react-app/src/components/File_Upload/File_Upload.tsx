import React, { Component } from 'react';

type MyProps = {
  className: string;
  handleUpload: (event: React.FormEvent<HTMLInputElement>) => void;
};

export default class FileUpload extends Component<MyProps> {
  render() {
    return (
      <input
        className={this.props.className + '__input'}
        type="file"
        onChange={this.props.handleUpload}
        accept="image/png, image/jpeg"
      />
    );
  }
}
