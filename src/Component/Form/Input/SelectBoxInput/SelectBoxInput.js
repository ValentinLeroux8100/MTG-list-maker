import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import "./SelectBoxInput.scss";

const SelectBoxInput = forwardRef(function SelectBoxInput(
  { option, ...props },
  ref
) {
  return (
    <select ref={ref} className="select-box-input" {...props}>
      {option.map((value) => {
        return (
          <option key={value} value={value}>
            {value}
          </option>
        );
      })}
    </select>
  );
});

SelectBoxInput.propTypes = {
  option: PropTypes.array,
  props: PropTypes.object,
  sort: PropTypes.object,
};

export { SelectBoxInput };
