import React from "react";

const InputType = ({
  labelText,
  labelFor,
  inputType,
  value,
  onChange,
  name,
  handleValidate,
  error
  
}) => {
  return (
    <>
      <div className="mb-1">
        <label htmlFor={labelFor} className="form-label">
          {labelText}
        </label>
        <input
          type={inputType}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
          
          onBlur={handleValidate}
        />
      </div>
   {error &&  <span style={{ color: 'red', fontSize: '14px' }}>
    {error}
  </span>}
    </>
  );
};

export default InputType;
