import React, { Component } from 'react';

export default class FileUpload extends Component {
  state: { files: File | null; file: Blob | null } = {
    files: null,
    file: null,
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
      <div id="upload-box">
        <input type="file" onChange={this.handleUpload} accept="image/png, image/jpeg" />
        <p>Filename: {this.state.files !== null ? this.state.files.name : 'none'}</p>
        <p>File type: {this.state.files !== null ? this.state.files.type : 'none'}</p>
        <p>File size: {this.state.files !== null ? this.state.files.size : 'none'} bytes</p>
        <img
          src={this.state.file !== null ? this.state.file.toString() : ''}
          alt={'just a picture'}
        />
      </div>
    );
  }
}
