import React from 'react';

export const Input = (field) => {
  const { meta: { touched, error } } = field;
  const className = `form-group ${touched && error ? 'has-danger' : ''}`
  return (
    <div className={className}>
      <label htmlFor="">{field.label}</label>
      <input
        className="form-control"
        type="text"
        {...field.input}
      />
      <div className="text-help" style={{ fontSize : '.7em' }}>
        { touched ? error : '' }
      </div>
    </div>
  )
}
