import React from 'react'

const FilterDropdown = ({type, value, onChange}) => {
    const handlePrice = () => {
        console.log("price");
    }
  return (
    <div className="bg-white">
        <select onChange={onChange} name="" id="" className="border-none bg-white text-header text-[10px]">
            <option value="underline-offset-1">{type}</option>
            {value.map((val, index) => (
                <option key={index} className="bg-white text-c-text" value={val}>{val}</option>
            ))}
        </select>
    </div>
  )
}

export default FilterDropdown
