import React, { useRef, useState, createRef } from "react";
import PropTypes from "prop-types";
import InputType from "./Input";
import "./CustomForm.scss";

function CustomForm({ form, onChange }) {
  const inputRef = useRef([]);

  const updateValue = (e) => {
    if (onChange) {
      const res = inputRef.current.reduce((res, input) => {
        const post = { [input.current.id]: input.current.value };
        return { ...res, ...post };
      }, {});
      onChange(res);
    }
  };

  const numberOfField = Object.values(form).reduce(
    (sum, e) => (sum += e.input.length),
    0
  );

  inputRef.current = Array(numberOfField)
    .fill()
    .map((_, i) => inputRef[i] || createRef());

  let index = -1;

  return (
    <form className="custom-form">
      {Object.keys(form).map((panel, panelIndex) => {
        {
          form[panel]?.name ? <div>{form[panel].name}</div> : "";
        }
        return (
          <div key={"panel" + panelIndex} className="custom-form-container">
            {form[panel].input.map((input) => {
              const Type = InputType[input.type] || "input";
              index++;
              return (
                <Type
                  key={input.name}
                  ref={inputRef.current[index]}
                  onChange={updateValue}
                  {...input}
                />
              );
            })}
          </div>
        );
      })}
    </form>
  );
}

CustomForm.propTypes = {
  form: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

export default CustomForm;
