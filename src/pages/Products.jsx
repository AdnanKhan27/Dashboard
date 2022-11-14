import { React, useEffect, useState } from "react";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineAddShoppingCart } from "react-icons/md";

// import { productData } from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const Products = () => {
  const { currentColor, items, setItems, cart, setCart } = useStateContext();

  useEffect(() => {
    const url = "https://fakestoreapi.com/products?limit=10";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json);
        setItems(json);
        // console.log(items);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
    // console.log(json.)
    // return () => {
    //   second
    // }
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
};

  return (
    <div className="mt-14 md:mt-10 sm:mt-12">
      {/* <div className="flex flex-wrap lg:flex-nowrap justify-center"> */}
      <div className="p-4 flex flex-wrap gap-8 justify-center">
        {items.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col  w-64 sm:w-60 box-border justify-between min-h-[320px] bg-white dark:bg-opacity-5 drop-shadow-sm dark:text-gray-50 rounded-2xl">
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    borderRadius: "16px",
                    aspectRatio: "4/3",
                    // width: "100%",
                    // height: "100px",
                    objectFit: "contain",
                    backgroundColor: "white",
                  }}
                />
                <div className="mt-2 mx-3 text-sm">
                  <p className="font-semibold">{item.title}</p>
                  <p className="font-medium text-gray-500 dark:text-gray-400">
                    {item.category}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mx-2 ml-3">
                <div>
                  <p className="text-lg font-semibold"> $ {item.price}</p>
                </div>
                {/* <button>
                  <MdOutlineAddShoppingCart />
                  </button> */}
                <div>
                  <TooltipComponent
                    content="Add to Cart"
                    position="BottomCenter"
                  >
                    <button
                      type="button"
                      onClick={() => addToCart(item)}
                      style={{ color: currentColor }}
                      className="relative text-2xl rounded-full p-3 hover:bg-opacity-70 dark:hover:bg-opacity-10 hover:bg-gray-200"
                    >
                      <MdOutlineAddShoppingCart />
                    </button>
                  </TooltipComponent>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Products;
