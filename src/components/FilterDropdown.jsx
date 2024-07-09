import React from 'react'

const FilterDropdown = ({type, value, onChange}) => {
    
  return (
    <div className="bg-white">
        <select onChange={onChange} name="" id="" className="border px-3 py-2 rounded-[4px] me-1 bg-white text-header text-[10px]">
            <option value={type}>{type}</option>
            {value.map((val, index) => (
                <option key={index} className="bg-white text-c-text" value={val}>{val}</option>
            ))}
        </select>
    </div>
  )
}

export default FilterDropdown
