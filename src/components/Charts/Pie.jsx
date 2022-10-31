import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PieSeries,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";
import { pieChartData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Pie = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pie" title="Sales Rate Percentage" />
      <div className="w-full ">
        <AccumulationChartComponent 
        id="charts"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
        legendSettings={{
          textStyle: {
            color: `${currentMode === "Dark" ? "#fff" : "#33373E"}`,
          },
        }}
        >
          <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective 
              
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>

      </div>
    </div>
  );
};

export default Pie;
