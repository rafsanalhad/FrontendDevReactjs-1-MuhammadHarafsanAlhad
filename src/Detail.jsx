import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [review, setReview] = useState([]);

  const getDetail = async () => {
    try {
      const response = await fetch(
        `https://restaurant-api.dicoding.dev/detail/${id}`
      );
      const data = await response.json();
      setDetail(data.restaurant);
      setReview(data.restaurant.customerReviews);
    } catch (error) {
      console.log(error);
    }
  };
  const [star, setStar] = useState([]);
  const rating = detail.rating;
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
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div className="">
      <nav className="navbar flex items-center bg-white shadow-sm h-[70px] px-8">
        <div className="container flex flex-row justify-between">
          <div className="navbar-brand text-xl font-bold">Restaurant Rafsan</div>
          <div className="navbar-nav">
            <ul className="flex flex-row">
              
            </ul>
          </div>
        </div>
      </nav>
      <section className="main lg:px-16 md:px-12 sm:px-5 px-5 py-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-3">
        <div className="mainBody col-span-3">
      <h3 className="text-3xl font-bold mb-3">Nama Restaurant: {detail.name}</h3>
      <img
        src={`https://restaurant-api.dicoding.dev/images/large/${detail.pictureId}`}
        className="w-[450px] h-[300px]"
        alt=""
      />
      <p className="text-[12px] text-[#808080] mt-5">{detail.description}</p>
      <p className="text-[12px] text-[#808080] mt-5">Lokasi: {detail.city}</p>
      <p className="text-[12px] text-[#808080]">Alamat: {detail.address}</p>
        </div>
        <div className="sidebar col-span-1">
        <h3 className="">Rating: </h3>
        <div className="flex flex-row">
        {star.map((item, index) => (
        <div key={index} className="">
       
              {item === 1 ? (
                <FaStar key={index} className="text-[20px]" />
              ) : item === 0.5 ? (
                <FaStarHalf key={index} className="text-[20px]" />
              ) : (
                <FaRegStar key={index} className="text-[20px]" />
              )}
       
        </div>
      ))}
        </div>
        <div className="flex flex-col">
            {review.map((item, index) => {
                return (
                    <div key={index} className="bg-[#f5f5f5] p-2 mt-3">
                        <p className="text-[12px]">{item.name}</p>
                        <p className="text-[12px]">{item.review}</p>
                        <p className="text-[12px]">{item.date}</p>
                    </div>
                )
            })}
        </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
