import React from "react";
import Button from "./Button";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { cartData } from "../data/dummy";

import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

import { useStateContext } from "../contexts/ContextProvider";

/* const CartItems = ({ image, name, category, price }) => (
  // <TooltipComponent content={title} position="BottomCenter">
  //   <button type="button" onClick={customFunc}
  //   style={{ color }}
  //   className="relative text-xl rounded-full p-3 hover:bg-gray-200"
  //   >
  //     <span style={{ background: dotColor }}
  //     className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
  //     />
  //     {icon}
  //   </button>
  // </TooltipComponent>

  <div>TEst</div>
); */

const Cart = () => {
  const { currentColor, cart, setCart } = useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:bg-secondary-dark-bg dark:text-gray-200 bg-white dark:[#484B52] w-96">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-bold text-2xl">Shopping Cart</p>
          <TooltipComponent content="Close" position="BottomCenter">
            <Button
              icon={<MdOutlineCancel />}
              color={currentColor}
              bgHoverColor="bg-gray-200"
              size="2xl"
              borderRadius="50%"
            />
          </TooltipComponent>
        </div>

        {cartData?.map((item, index) => (
          <div key={index}>
            <div className=" flex justify-center items-center">
              <div className="flex flex-row bg-white dark:text-gray-200 dark:bg-secondary-dark-bg mx-6 mt-2 px-4 py-6 text-center border-b-1 border-gray-200 dark:border-gray-600">
                <img
                  src={item.image}
                  style={{
                    borderRadius: "10px",
                    maxWidth: "30%",
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <div className="ml-4 flex flex-col items-start">
                  <p className="text-l font-semibold">{item.name}</p>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {" "}
                    {item.category}{" "}
                  </p>

                  <div className="flex items-center gap-10 mt-4">
                    <p className="text-lg font-semibold"> {item.price} </p>

                    <div className="flex flex-row border items-center border-gray-300 dark:border-gray-700 rounded-lg box-border">
                      <button className="text-red-500 hover:bg-gray-300 p-2 rounded-l-lg">
                        <AiOutlineMinus />
                      </button>
                      <p className="border-x-1 border-gray-300 dark:border-gray-700 px-2">
                        0
                      </p>
                      <button className="text-green-500 hover:bg-gray-300 p-2 rounded-r-lg">
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="my-4 mx-6 flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-gray-600 text-l dark:text-gray-200">Sub Total</p>
            <p className="text-gray-600 text-l font-semibold dark:text-gray-200">
              $890
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600 dark:text-gray-200 text-l">Total</p>
            <p className="text-gray-600 dark:text-gray-100 text-l font-semibold">
              $890
            </p>
          </div>
          <button
            type="button"
            className={`text-lg text-white p-2 hover:drop-shadow-xl hover:opacity-70 `}
            style={{ background: currentColor, borderRadius: "10px", }}
            // onClick={  },
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
