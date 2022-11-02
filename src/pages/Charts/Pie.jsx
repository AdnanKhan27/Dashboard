import React from 'react';
import { Header, PieChart } from '../../components';

import { pieChartData } from "../../data/dummy";

const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Pie Chart" />
      <div className="w-full ">
        <PieChart
          data={pieChartData}
          radius="75%"
        />
      </div>
    </div>
  )
}

export default Pie;