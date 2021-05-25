import React from 'react';

import './form-styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      {label ? (
        <label className={`${otherProps.value.length ? 'shrink' : ''}`}>
          {' '}
          {label}
        </label>
      ) : null}
      <input
        className="form-input"
        type="text"
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
