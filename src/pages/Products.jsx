import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineAddShoppingCart } from "react-icons/md";

import { productData } from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const Products = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="mt-14 md:mt-12 sm:mt-12">
      {/* <div className="flex flex-wrap lg:flex-nowrap justify-center"> */}
      <div className="p-4 flex flex-wrap gap-6 justify-center">
        {productData.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col w-64 box-border bg-white dark:bg-opacity-5 drop-shadow-sm dark:text-gray-50 rounded-2xl">
              <img
                src={item.image}
                alt={item.name}
                style={{
                  borderRadius: "16px",
                  aspectRatio: "4/3",
                  objectFit: "cover",
                }}
              />
              <p className="mt-2 ml-2 text-l font-semibold">{item.name}</p>
              <div className="flex justify-between items-center mx-2 mb-1">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {item.category}
                  </p>
                  <p className="text-lg font-semibold"> {item.price} </p>
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
                      // onClick={customFunc}
                      style={{ color: currentColor }}
                      className="relative text-2xl rounded-full p-4 hover:bg-opacity-70 dark:hover:bg-opacity-10 hover:bg-gray-200"
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
