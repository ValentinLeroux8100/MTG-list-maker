import React, { forwardRef } from "react"
import PropTypes from 'prop-types'
import "./SelectBoxInput.scss"

const SelectBoxInput = forwardRef(function SelectBoxInput({name, id, option, isMultiple, onChange}, ref){
  return(
    <select ref={ref} className="select-box-input" name={name} id={id} onChange={onChange} multiple={isMultiple}>
      {option.map((value) => {
        return <option key={value} value={value}>{value}</option>
      })}
    </select>
  )
})

SelectBoxInput.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  option: PropTypes.array,
  isMultiple: PropTypes.bool,
  onChange: PropTypes.func,
}

export default SelectBoxInput