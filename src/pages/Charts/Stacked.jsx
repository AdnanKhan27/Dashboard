import React from "react";
import { Header, StackedChart } from "../../components";

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from "../../data/dummy";

const Stacked = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Stacked Chart" />
      <div className="w-full ">
        <StackedChart
          height="360px"
          data={stackedCustomSeries}
          xAxisData={stackedPrimaryXAxis}
          yAxisData={stackedPrimaryYAxis}
        />
      </div>
    </div>
  );
};

export default Stacked;
