import React, { Component } from 'react';

type MyProps = {
  className: string;
};
type MyState = {
  files: File | null;
  file: string;
};

export default class FileUpload extends Component<MyProps, MyState> {
  state: MyState = {
    files: null,
    file: '',
  };

  handleUpload = (event: React.FormEvent<HTMLInputElement>): void => {
    if (event.currentTarget.files !== null) {
      this.setState({
        files: event.currentTarget.files[0],
        file: URL.createObjectURL(event.currentTarget.files[0]),
      });
    }
  };

  render() {
    return (
      <div className={this.props.className + ' file-upload'}>
        <input
          className={this.props.className + ' file-upload__input'}
          type="file"
          onChange={this.handleUpload}
          accept="image/png, image/jpeg"
        />
        <p>Filename: {this.state.files !== null ? this.state.files.name : 'none'}</p>
        <p>File type: {this.state.files !== null ? this.state.files.type : 'none'}</p>
        <p>File size: {this.state.files !== null ? this.state.files.size : 'none'} bytes</p>
        <img
          className={this.props.className + ' file-upload__file'}
          src={this.state.file !== null ? this.state.file.toString() : ''}
          alt={'just a picture'}
        />
      </div>
    );
  }
}
