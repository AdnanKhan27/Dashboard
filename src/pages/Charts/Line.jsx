import React from 'react';

import { Header, LineChart } from '../../components';

import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Sales Rate" />
      <div className="w-full ">
        <LineChart 
          height="420px"
          xAxisData={LinePrimaryXAxis}
          yAxisData={LinePrimaryYAxis}
          data={lineCustomSeries}
        />
      </div>
    </div>
  )
}

export default Line