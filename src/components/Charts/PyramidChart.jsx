import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PyramidSeries,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";

const PyramidChart = ({ data, radius }) => {
  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent
      id="pie-charts"
      // chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true, fill: `${currentMode === "Dark" ? "#fff" : "#33373E"}`, textStyle: { color: `${currentMode === "Dark" ? "#33373E" : "#fff"}` } }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      legendSettings={{
        textStyle: {
          color: `${currentMode === "Dark" ? "#fff" : "#33373E"}`,
        },
      }}
    >
      <Inject
        services={[
          AccumulationLegend,
          PyramidSeries,
          AccumulationDataLabel,
          AccumulationTooltip,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={data}
          xName="x"
          yName="y"
          type="Pyramid"
          // innerRadius="40%"
          explode={true}
          explodeOffset="5%"
          explodeIndex={3}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PyramidChart;
