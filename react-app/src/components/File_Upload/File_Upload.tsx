import React from 'react';

type FileUploadProps = {
  className: string;
  handleUpload: (event: React.FormEvent<HTMLInputElement>) => void;
};

export function FileUpload(props: FileUploadProps) {
  return (
    <input
      className={props.className + '__input'}
      type="file"
      onChange={props.handleUpload}
      accept="image/png, image/jpeg"
    />
  );
}
