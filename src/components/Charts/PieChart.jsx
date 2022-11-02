import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PieSeries,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";

const PieChart = ({ data, radius }) => {
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
          PieSeries,
          AccumulationDataLabel,
          AccumulationTooltip,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius={radius}
          explode={true}
          explodeOffset="10%"
          explodeIndex={0}
          dataLabel={{
            visible: true,
            position: "Inside",
            name: "text",
            font: {
              fontWeight: "600",
              color: "white"
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PieChart;
