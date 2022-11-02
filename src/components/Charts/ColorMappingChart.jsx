import React from 'react';

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";

const ColorMappingChart = (height, width, range, xAxisData, yAxisData, data) => {
  const { currentMode } = useStateContext();
  
  return (
    <ChartComponent
      id="color-mapping-chart"
      height={height}
      width={width}
      primaryXAxis={xAxisData}
      primaryYAxis={yAxisData}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      legendSettings={{
        textStyle: { color: `${currentMode === "Dark" ? "#fff" : "#33373E"}` },
      }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {data.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default ColorMappingChart;