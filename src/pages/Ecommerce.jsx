import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

import { Button, SparkLine, StackedChart } from "../components";
import {
  salesActivity,
  SparklineAreaData,
  ecomPieChartData,
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center dark:bg-blend-overlay border border-gray-100 dark:border-gray-600">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-4xl dark:text-gray-400 text-white">Earnings</p>
              <p className="text-2xl mt-2b">$45,567.56</p>
            </div>
          </div>
          {/* <div className="mt-6">
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div> */}
        </div>

        {/* 📝these are divs for the small stats cards
        <div className=" flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-40 p-4 pt-9 rounded-2xl"
            >
              <button type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
            </div>
          ))}
        </div> */}
        <div className=" flex m-3 flex-wrap justify-center gap-1 items-center">
          {salesActivity.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-40 p-4 pt-4 rounded-2xl text-center border border-gray-100 dark:border-gray-600"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-xl font-semibold">{item.amount}</span>
                {/* <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span> */}
              </p>
              <span className="text-sm font-extralight text-gray-500 text-center">
                {item.text}
              </span>
              <p className="text-sm font-thin mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 border border-gray-100 dark:border-gray-600">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span><GoPrimitiveDot /></span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span><GoPrimitiveDot /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">
                    $93,435
                  </span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">
                    $48,435
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
                <StackedChart
                  width="320px" 
                  height="360px"
                  data={stackedCustomSeries}
                  xAxisData={stackedPrimaryXAxis}
                  yAxisData={stackedPrimaryYAxis}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
