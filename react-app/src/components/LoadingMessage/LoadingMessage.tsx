import './LoadingMessage.scss';
import React from 'react';

export function LoadingMessage(props: { isLoadingOk: boolean }) {
  return (
    <div className="loading-message">
      {props.isLoadingOk ? 'Loading...' : "Sorry, we couldn't find any results :("}
    </div>
  );
}
