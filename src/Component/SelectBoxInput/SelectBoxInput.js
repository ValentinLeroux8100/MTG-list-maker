import "./SelectBoxInput.scss"
import { forwardRef } from "react"

const SelectBoxInput = forwardRef(function SelectBoxInput({name, onChange, id, option, isMultiple, children}, ref){
  return(
    <select ref={ref} className="select-box-input" name={name} id={id} onChange={onChange} multiple={isMultiple}>
      {option.map((value) => {
        return <option key={value} value={value}>{value}</option>
      })}
    </select>
  )
})

export default SelectBoxInput