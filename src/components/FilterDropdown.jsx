import React from 'react'

const FilterDropdown = ({type, value}) => {
  return (
    <div className="bg-white">
        <select name="" id="" className="border-none bg-white text-header text-[10px]">
            <option value="underline-offset-1">{type}</option>
            {value.map((val, index) => (
                <option key={index} className="bg-white text-c-text" value={val}>{val}</option>
            ))}
        
        </select>
    </div>
  )
}

export default FilterDropdown
