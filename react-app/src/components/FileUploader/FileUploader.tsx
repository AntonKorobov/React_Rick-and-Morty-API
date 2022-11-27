import React, { useRef } from 'react';

import './FileUploader.scss';

interface PropsFileUploader {
  handleUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  file: string;
}

export function FileUploader({ handleUpload, file }: PropsFileUploader) {
  const inputRef = useRef(document.createElement('input'));

  const fileUpload = () => {
    if (inputRef) {
      inputRef.current.click();
    }
  };

  return (
    <div className={'card-creator-form__file-upload file-upload'}>
      <button className="file-upload__upload-button button" onClick={fileUpload}>
        Upload file
      </button>
      <input
        className={'file-upload__input'}
        type="file"
        accept="image/png, image/jpeg"
        ref={inputRef}
        onChange={handleUpload}
      />
      {file ? <img className={'file-upload__img'} src={file} alt={'character image'} /> : null}
    </div>
  );
}
