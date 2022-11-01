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

import { pieChartData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const PieChart = () => {
  const { currentMode } = useStateContext();

  return (
        <AccumulationChartComponent
          id="charts"
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
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
              dataSource={pieChartData}
              xName="x"
              yName="y"
              innerRadius="40%"
              startAngle={0}
              endAngle={360}
              radius="75%"
              explode={true}
              explodeOffset="10%"
              explodeIndex={0}
              dataLabel={{
                visible: true,
                position: "Outside",
                name: "text",
                font: {
                  fontWeight: "600",
                },
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
  );
};

export default PieChart;
