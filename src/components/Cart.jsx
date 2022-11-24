import { React, useEffect } from "react";
import Button from "./Button";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// import { cartData } from "../data/dummy";

import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineDelete, AiOutlineMinus } from "react-icons/ai";

import { useStateContext } from "../contexts/ContextProvider";

const Cart = () => {
  const {
    currentColor,
    /* cart, setCart, */ cartTotal,
    setCartTotal,
    state: { cart },
    dispatch,
  } = useStateContext();

  /* 🖋function to remove duplicates from the cart */
  let uniqueIds = [];

  const uniqueItems = cart.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.id);

    if (!isDuplicate) {
      uniqueIds.push(element.id);

      return true;
    }

    return false;
  });
  // console.log(uniqueItems);

  // old function for calc. total price (not a proper method for react)
  // const total = () => {
  //   let totalVal = 0;
  //   for (let i = 0; i < uniqueItems.length; i++) {
  //     totalVal += uniqueItems[i].price;
  //   }
  //   setCartTotal(totalVal);
  // };
  // total();
  // console.log(cartTotal);

  const removeFromCart = (item) => {
    // let hardCopy = [...cart];
    // /* returns cartItems which other than the item passed */
    // hardCopy = hardCopy.filter((cart) => cart.id !== item.id);
    // setCart(hardCopy);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
  };

  /* Changing quantity of the cart */
  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        qty,
      },
    });
  };

  /* 🖋Rendering the total price of products in cart */
  useEffect(() => {
    setCartTotal(
      uniqueItems.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [uniqueItems]);

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0 scroll-smooth">
      <div className="float-right h-screen dark:bg-secondary-dark-bg dark:text-gray-200 bg-white dark:[#484B52] sm:w-96 md:w-96 w-full">
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

        <div className="h-[70vh] overflow-scroll border-b-1">
          {uniqueItems?.map((item) => (
            <div key={item.id} className="">
              <div className="flex items-center">
                <div className="flex flex-row gap-3 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg mx-0 sm:mx-4 md:mx-4 mt-2 px-4 py-6 text-center border-b-1 border-gray-200 dark:border-gray-600">
                  <img
                    src={item.image}
                    style={{
                      borderRadius: "10px",
                      maxWidth: "30%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                  <div className="flex flex-col text-left justify-between w-full">
                    <div className="flex flex-row justify-between gap-2">
                      <div className="text-sm">
                        <p className="font-semibold">{item.title} </p>
                        <p className="font-medium text-gray-500 dark:text-gray-400">
                          {" "}
                          {item.category}{" "}
                        </p>
                      </div>
                      <div className="">
                        <button
                          className="text-lg p-2 text-red-400 rounded-full bg-gray-100 dark:bg-gray-600 hover:drop-shadow-xl hover:bg-opacity-70 dark:hover:bg-opacity-10"
                          onClick={() => removeFromCart(item)}
                        >
                          <AiOutlineDelete />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-10 mt-4">
                      <p className="text-l font-semibold"> ${item.price} </p>

                      <div className="flex flex-row border items-center border-gray-300 dark:border-gray-700 rounded-lg box-border">
                        <button
                          name="subtractQuantity"
                          onClick={() => changeQty(item.id, item.qty - 1)}
                          className="text-red-500 hover:bg-gray-300 p-2 rounded-l-lg"
                        >
                          <AiOutlineMinus />
                        </button>
                        <p className="border-x-1 border-gray-300 dark:border-gray-700 px-2">
                          {item.qty}
                        </p>
                        <button
                          name="addQuantity"
                          onClick={() => changeQty(item.id, item.qty + 1)}
                          className="text-green-500 hover:bg-gray-300 p-2 rounded-r-lg"
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-2 mx-6">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p className="text-gray-600 text-l dark:text-gray-200">
                Sub Total
              </p>
              <p className="text-gray-600 text-l font-semibold dark:text-gray-200">
                $ {cartTotal}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600 dark:text-gray-200 text-l">Total</p>
              <p className="text-gray-600 dark:text-gray-100 text-l font-semibold">
                $ {cartTotal}
              </p>
            </div>
            <button
              type="button"
              className={`text-lg text-white p-2 hover:drop-shadow-xl hover:opacity-70 `}
              style={{ background: currentColor, borderRadius: "10px" }}
              // onClick={  },
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
