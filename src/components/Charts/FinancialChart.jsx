import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Tooltip,
  Zoom,
  Crosshair,
  DateTime,
  Logarithmic,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";

const FinancialChart = ({ width, height, xAxisData, yAxisData, data }) => {
  const { currentMode } = useStateContext(); /* getting the current active mode (dark/light) from contexts */

  const date1 = new Date('2017, 1, 1');

  function filterValue(value) {
    if (value.x >= date1) {
      // eslint-disable-next-line no-sequences
      return value.x, value.high, value.low;
    }
  }
  const returnValue = data.filter(filterValue);

  return (
    <ChartComponent
      width={width}
      height={height}
      id="financial-charts"
      primaryXAxis={xAxisData}
      primaryYAxis={yAxisData}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true, shared: true, fill: `${currentMode === "Dark" ? "#fff" : "#33373E"}`, textStyle: { color: `${currentMode === "Dark" ? "#33373E" : "#fff"}` } }}
      /* 👇changing the legend text color acc. to theme mode(dark/light) */
      legendSettings={{
        visible: false,
        textStyle: { color: `${currentMode === "Dark" ? "#fff" : "#33373E"}` },
      }}
      /* 👇changing the background color of whole chart acc. to theme mode(dark/light) */
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 },  }}
    >
      <Inject services={[HiloSeries, Tooltip, DateTime, Crosshair, Zoom, Logarithmic]} />
      <SeriesCollectionDirective>
        {/* {data.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))} */}
        <SeriesDirective 
            dataSource={returnValue}
            xName="x"
            yName="low"
            name="XYZ Inc"
            type="Hilo"
            low="low"
            high="high"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default FinancialChart;
