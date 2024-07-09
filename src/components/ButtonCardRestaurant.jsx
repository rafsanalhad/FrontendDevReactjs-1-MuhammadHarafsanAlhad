import React from 'react'
import {Link} from 'react-router-dom'
const ButtonCardRestaurant = ({id}) => {
  return (
    <Link to={`detail/${id}`}  className="bg-[#002B56] text-white text-center text-[10px] px-1 py-2 mt-3">
      Learn More
    </Link>
  )
}

export default ButtonCardRestaurant
