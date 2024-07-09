import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FilterDropdown from "./components/FilterDropdown";
import CardRestaurant from "./components/CardRestaurant";
function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const filterPrice = [200000, 30000, 40000, 50000];
  const categories = ["All", "Fast Food", "Pizza", "Pasta", "Burger"];

  const additionalData = [
    { id: "rqdv5juczeskfw1e867", openNow: true, price: 50000, category: "Fast Food" },
    { id: "s1knt6za9kkfw1e867", openNow: false, price: 30000, category: "Cafe" },
    { id: "w9pga3s2tubkfw1e867", openNow: true, price: 45000, category: "Cafe" },
    { id: "uewq1zg2zlskfw1e867", openNow: true, price: 35000, category: "Coffee Shop" },
    { id: "ygewwl55ktckfw1e867", openNow: false, price: 60000, category: "Restaurant" },
    { id: "fnfn8mytkpmkfw1e867", openNow: true, price: 25000, category: "Street Food" },
    { id: "dwg2wt3is19kfw1e867", openNow: true, price: 20000, category: "Cafe" },
    { id: "6u9lf7okjh9kfw1e867", openNow: false, price: 50000, category: "Fast Food" },
    { id: "zvf11c0sukfw1e867", openNow: true, price: 45000, category: "Fast Food" },
    { id: "ughslf146iqkfw1e867", openNow: false, price: 30000, category: "Cafe" },
    { id: "w7jca3irwykfw1e867", openNow: true, price: 55000, category: "Cafe" },
    { id: "8maika7giinkfw1e867", openNow: false, price: 35000, category: "Restaurant" },
    { id: "e1elb86snf8kfw1e867", openNow: true, price: 40000, category: "Cafe" },
    { id: "69ahsy71a5gkfw1e867", openNow: true, price: 25000, category: "Fast Food" },
    { id: "ateyf7m737ekfw1e867", openNow: false, price: 30000, category: "Cafe" },
    { id: "02hfwn4bh8uzkfw1e867", openNow: true, price: 50000, category: "Restaurant" },
    { id: "p06p0wr8eedkfw1e867", openNow: false, price: 20000, category: "Cafe" },
    { id: "uqzwm2m981kfw1e867", openNow: true, price: 45000, category: "Fast Food" },
    { id: "dy62fuwe6w8kfw1e867", openNow: true, price: 30000, category: "Street Food" },
    { id: "vfsqv0t48jkfw1e867", openNow: false, price: 55000, category: "Restaurant" }
  ];


  const setAdditional = (data, additionalData) => {
    return data.map(item => {
      const additionalInfo = additionalData.find(additional => additional.id === item.id);
      if (additionalInfo) {
        return {
          ...item,
          openNow: additionalInfo.openNow,
          price: additionalInfo.price,
          category: additionalInfo.category
        };
      }
      return item;
    });
  };
    


  const getApi = async () => {
    try{
      const response = await fetch("https://restaurant-api.dicoding.dev/list");
      const { restaurants } = await response.json();
      const updatedData = setAdditional(restaurants, additionalData);
      console.log(updatedData)
      setData(updatedData);
    }catch(error){
      console.log(error);
    }
  
  };
  useEffect(() => {
    getApi();
  },[]);

  return (
    <div className="px-[100px] py-[30px]">
      <div className="text-header text-4xl mb-3">Restaurant</div>
      <div className="text-c-text text-[14px]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod <br />
        aspernatur vero praesentium veniam nesciunt.
      </div>
      <div className="w-full h-[1px] bg-[#d6d6d6] mt-5"></div>
      <div className="flex flex-row items-center">
        <p className="text-[12px] text-c-text me-3">Filter By:</p>
        <input
          type="checkbox"
          id="checkbox"
          className="rounded-full me-1"
          value=""
        />
        <label htmlFor="checkbox" className="text-header me-3 text-[10px]">
          Open Now <div className="w-full h-[1px] bg-[#d6d6d6]"></div>
        </label>
        <FilterDropdown type={"Price"} value={filterPrice}></FilterDropdown>
        <FilterDropdown type={"Categories"} value={categories}></FilterDropdown>
      </div>

      <h3 className="text-header text-xl mt-3 mb-3">All Restaurant</h3>
      <div className="grid grid-cols-3">
      {data.map((item, index) => (
    
            <CardRestaurant key={item.id} img={item.pictureId} rating={item.rating} city={item.city} name={item.name}/>
         
      
      ))}

      </div>
    </div>
  );
}

export default App;
