import React from 'react';
import './spinner.scss';

export const Spinner = () => {
  return (
    <div className="w-full flex justify-center p-4">
      <div className="loader" />
    </div>
  );
};