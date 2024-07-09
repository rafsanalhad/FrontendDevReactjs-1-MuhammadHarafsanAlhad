import React, { useState, useEffect } from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import ButtonCardRestaurant from "./ButtonCardRestaurant";
const CardRestaurant = ({ id, img, name, rating, city, price, openNow }) => {
  const [star, setStar] = useState([]);
  const renderStar = (rating) => {
    const tempStar = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        tempStar.push(1);
      } else if (i === Math.ceil(rating)) {
        tempStar.push(0.5);
      } else {
        tempStar.push(0);
      }
    }
    setStar(tempStar);
  };
  useEffect(() => {
    renderStar(rating);
  }, [rating]);
  return (
    <div className="flex flex-col p-3">
      <img
        src={`https://restaurant-api.dicoding.dev/images/medium/${img}`}
        alt=""
        className="w-full h-[200px]"
      />
      <p>{name}</p>
      <div className="flex flex-row">
      {star.map((item, index) => (
        <div key={index} className="">
       
              {item === 1 ? (
                <FaStar key={index} className="text-[10px]" />
              ) : item === 0.5 ? (
                <FaStarHalf key={index} className="text-[10px]" />
              ) : (
                <FaRegStar key={index} className="text-[10px]" />
              )}
       
        </div>
      ))}
      </div>
      <div className="mt-2 flex flex-row justify-between text-[8px]">
        <div className="flex flex-row">
        <p>{city}</p>
        <div className="flex flex-row items-center" style={{marginLeft: '1px'}}>
        <div className="w-1 h-1 bg-[#bbb] rounded-full"></div>
        </div>
        <p className="ms-[2px]">Rp.{price}</p>
        
        </div>
        <div className="flex flex-row">
        <div className={openNow ? `w-[10px] h-[10px] rounded-full bg-[#01be11]` : 'w-[10px] h-[10px]] rounded-full bg-[#800b0b]'}></div>
        <p className="ms-[2px]">{openNow ? 'Open Now' : 'Closed'}</p>
        </div>
      </div>
        <ButtonCardRestaurant id={id} />
    </div>
  );
};

export default CardRestaurant;
