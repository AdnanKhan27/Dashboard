import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Tooltip,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
  Selection,
  ColumnSeries,
  Category,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";

const ColorMappingChart = ({
  height,
  width,
  range,
  xAxisData,
  yAxisData,
  data,
}) => {
  const { currentMode } = useStateContext();
  // console.log(data);
  console.log(range);
  console.log(xAxisData);
  console.log(yAxisData);
  return (
    <ChartComponent
      id="color-mapping-chart"
      height={height}
      width={width}
      primaryXAxis={xAxisData}
      primaryYAxis={yAxisData}
      tooltip={{ enable: true, fill: `${currentMode === "Dark" ? "#fff" : "#33373E"}`, textStyle: { color: `${currentMode === "Dark" ? "#33373E" : "#fff"}` } }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      legendSettings={{
        mode: "range",
        textStyle: { color: `${currentMode === "Dark" ? "#fff" : "#33373E"}` },
      }}
    >
      <Inject services={[ColumnSeries, Selection, Legend, Tooltip, Category]} />
      <SeriesCollectionDirective>
      
        <SeriesDirective
          dataSource={data[0]}
          xName="x"
          yName="y"
          type="Column"
          cornerRadius={{
            topLeft: 10,
            topRight: 10,
          }}
        />
      </SeriesCollectionDirective>
      <RangeColorSettingsDirective>
        {range.map((item, index) => (
          <RangeColorSettingDirective key={index} {...item} />
        ))}
      </RangeColorSettingsDirective>
    </ChartComponent>
  );
};

export default ColorMappingChart;
