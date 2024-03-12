import React, { useEffect, useState } from "react";
import axios from "axios";
import bg from "./../images/bg.jpg";
const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const Productsapi = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/");
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.log("error occured at api calling", error);
      }
    };
    Productsapi();
  }, []);
  return (
    <div className="bg-[#DEE4EA]">
      <h1 className="text-3xl font-bold text-red-500 text-center my-3 mb-2  p-2 bg-[#0D324D]">
        Products
      </h1>

      <div className="grid grid-cols-3 gap-12 mx-8 sm:grid-col-2 rounded mt-5 ">
        {product.map((data) => (
          <div
            key={data.id}
            className="border-2  flex justify-around align-middle flex-col bg-white p-2 h-80 w-42 rounded-md"
          >
            <div className="flex justify-center flex-col text-center font-semibold">
              <h1>{data.title}</h1>
              <p>INR:{data.price}</p>
            </div>
            <div className="flex justify-center ">
              <img src={data.image} className="w-21 h-20 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
