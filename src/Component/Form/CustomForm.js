import React, { useRef, useState, createRef } from "react";
import PropTypes from "prop-types";
import InputType from "./Input";
import "./CustomForm.scss";

function CustomForm({ form, onChange, ...props }) {
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

  let index = 0;

  return (
    <form className="form" {...props}>
      {Object.keys(form).map((panel, panelIndex) => {
        return (
          <>
            {form[panel].name && <fieldset>{form[panel].name}</fieldset>}
            <section key={"panel" + panelIndex}>
              {form[panel].input.map((input) => {
                const Type = InputType[input.type] || "input";

                const props = {
                  key: input.name,
                  ref: inputRef.current[index],
                  onChange: updateValue,
                  ...input,
                };

                index++;

                return <Type {...props} />;
              })}
            </section>
          </>
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
