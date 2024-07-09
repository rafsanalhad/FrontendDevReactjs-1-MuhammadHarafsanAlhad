import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FilterDropdown from "./components/FilterDropdown";
import CardRestaurant from "./components/CardRestaurant";
function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const filterPrice = [20000, 30000, 40000, 50000];
  const [filteredData, setFilteredData] = useState([]);
  const categories = ["Fast Food", "Cafe", "Coffee Shop", "Restaurant", "Street Food"];
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState("Price");
  const [category, setCategory] = useState("Categories");
  const additionalData = [
    {
      id: "rqdv5juczeskfw1e867",
      openNow: true,
      price: 50000,
      category: "Fast Food",
    },
    {
      id: "s1knt6za9kkfw1e867",
      openNow: false,
      price: 30000,
      category: "Cafe",
    },
    {
      id: "w9pga3s2tubkfw1e867",
      openNow: true,
      price: 45000,
      category: "Cafe",
    },
    {
      id: "uewq1zg2zlskfw1e867",
      openNow: true,
      price: 35000,
      category: "Coffee Shop",
    },
    {
      id: "ygewwl55ktckfw1e867",
      openNow: false,
      price: 60000,
      category: "Restaurant",
    },
    {
      id: "fnfn8mytkpmkfw1e867",
      openNow: true,
      price: 25000,
      category: "Street Food",
    },
    {
      id: "dwg2wt3is19kfw1e867",
      openNow: true,
      price: 20000,
      category: "Cafe",
    },
    {
      id: "6u9lf7okjh9kfw1e867",
      openNow: false,
      price: 50000,
      category: "Fast Food",
    },
    {
      id: "zvf11c0sukfw1e867",
      openNow: true,
      price: 45000,
      category: "Fast Food",
    },
    {
      id: "ughslf146iqkfw1e867",
      openNow: false,
      price: 30000,
      category: "Cafe",
    },
    { id: "w7jca3irwykfw1e867", openNow: true, price: 55000, category: "Cafe" },
    {
      id: "8maika7giinkfw1e867",
      openNow: false,
      price: 35000,
      category: "Restaurant",
    },
    {
      id: "e1elb86snf8kfw1e867",
      openNow: true,
      price: 40000,
      category: "Cafe",
    },
    {
      id: "69ahsy71a5gkfw1e867",
      openNow: true,
      price: 25000,
      category: "Fast Food",
    },
    {
      id: "ateyf7m737ekfw1e867",
      openNow: false,
      price: 30000,
      category: "Cafe",
    },
    {
      id: "02hfwn4bh8uzkfw1e867",
      openNow: true,
      price: 50000,
      category: "Restaurant",
    },
    {
      id: "p06p0wr8eedkfw1e867",
      openNow: false,
      price: 20000,
      category: "Cafe",
    },
    {
      id: "uqzwm2m981kfw1e867",
      openNow: true,
      price: 45000,
      category: "Fast Food",
    },
    {
      id: "dy62fuwe6w8kfw1e867",
      openNow: true,
      price: 30000,
      category: "Street Food",
    },
    {
      id: "vfsqv0t48jkfw1e867",
      openNow: false,
      price: 55000,
      category: "Restaurant",
    },
  ];

  const setAdditional = (data, additionalData) => {
    return data.map((item) => {
      const additionalInfo = additionalData.find(
        (additional) => additional.id === item.id
      );
      if (additionalInfo) {
        return {
          ...item,
          openNow: additionalInfo.openNow,
          price: additionalInfo.price,
          category: additionalInfo.category,
        };
      }
      return item;
    });
  };

  const getApi = async () => {
    try {
      const response = await fetch("https://restaurant-api.dicoding.dev/list");
      const { restaurants } = await response.json();
      const updatedData = setAdditional(restaurants, additionalData);
      setData(updatedData);
      setFilteredData(updatedData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  const handlePrice = (e) => {
    const selectedPrice = e.target.value;
    setPrice(selectedPrice);
  };
  const handleCategory = (e) =>{
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
  }
  useEffect(() => {
    getApi();
  }, []);
  useEffect(() => {
    let filteredOpenNow = [];
    if (open) {
      filteredOpenNow = data.filter((item) => item.openNow == true);
    } else {
      filteredOpenNow = data;
    }
    let filteredPrice = [];
    if (price == "Price") {
      filteredPrice = data;
    } else if (price == filterPrice[0]) {
      filteredPrice = data
        .filter(
          (item) => item.price >= filterPrice[0] && item.price < filterPrice[1]
        )
        .sort((a, b) => a.price - b.price);
    } else if (price == filterPrice[1]) {
      filteredPrice = data
        .filter(
          (item) => item.price >= filterPrice[1] && item.price < filterPrice[2]
        )
        .sort((a, b) => a.price - b.price);
    } else if (price == filterPrice[2]) {
      filteredPrice = data
        .filter(
          (item) => item.price >= filterPrice[2] && item.price < filterPrice[3]
        )
        .sort((a, b) => a.price - b.price);
    } else if (price == filterPrice[3]) {
      filteredPrice = data
        .filter((item) => item.price >= filterPrice[3] && item.price < 60000)
        .sort((a, b) => a.price - b.price);
    }
    let filteredCategory = [];
    if(category == "All"){
      filteredCategory = data;
    }else{
      filteredCategory = data.filter((item) => item.category == category);
    }
    console.log(price)
    const finalFilteredData = data.filter((item) => {
      if (open == true && price == "Price" && category == "Categories") {
        return filteredOpenNow.includes(item);
      }else if(open == false && price !== "Price" && category == "Categories"){
        return filteredPrice.includes(item);
      }else if(open == false && price == "Price" && category !== "Categories"){
        return filteredCategory.includes(item);
      }else if(open == true && price == "Price" && category !== "Categories"){
        return filteredOpenNow.includes(item) && filteredCategory.includes(item);
      }else if(open == true && price !== "Price" && category == "Categories"){
        return filteredOpenNow.includes(item) && filteredPrice.includes(item);
      }else if(open == false && price !== "Price" && category !== "Categories"){
        return filteredPrice.includes(item) && filteredCategory.includes(item);
      }
      else if (open == true && price !== "Price" && category !== "Categories") {
        return filteredOpenNow.includes(item) && filteredPrice.includes(item) && filteredCategory.includes(item);
      }

      return true;
    });

    setFilteredData(finalFilteredData);
  }, [open, price, category]);

  return (
    <div className="lg:px-[100px] md:px-[100px] sm:px-[30px] px-[30px] py-[30px]">
      <div className="text-header text-4xl mb-3">Restaurant</div>
      <div className="text-c-text text-[14px]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod <br />
        aspernatur vero praesentium veniam nesciunt.
      </div>
      <div className="w-full h-[1px] bg-[#d6d6d6] mt-5"></div>
      <div className="flex flex-row items-center">
        <p className="text-[12px] text-c-text me-3">Filter By:</p>
        <input
          onClick={handleOpen}
          type="checkbox"
          id="checkbox"
          className="rounded-full me-1"
          value=""
        />
        <label htmlFor="checkbox" className="text-header me-3 text-[10px]">
          Open Now <div className="w-full h-[1px] bg-[#d6d6d6]"></div>
        </label>
        <FilterDropdown
          onChange={handlePrice}
          type={"Price"}
          value={filterPrice}
        ></FilterDropdown>
        <FilterDropdown onChange={handleCategory} type={"Categories"} value={categories}></FilterDropdown>
      </div>

      <h3 className="text-header text-xl mt-3 mb-3">All Restaurant</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1">
        {filteredData.map((item, index) => (
          <CardRestaurant
            key={index}
            id={item.id}
            price={item.price}
            openNow={item.openNow}
            img={item.pictureId}
            rating={item.rating}
            city={item.category}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
