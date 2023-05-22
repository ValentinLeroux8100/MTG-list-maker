import "./SelectBoxInput.scss"

function SelectBoxInput({name, id, option, isMultiple, children}){
  return(
    <select className="select-box-input" name={name} id={id} multiple={isMultiple}>
      {option.map((value) => {
        return <option key={value} value={value}>{value}</option>
      })}
    </select>
  )
}

export default SelectBoxInput