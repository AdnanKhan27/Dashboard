import React from 'react'

import { Header, ColorMappingChart } from '../../components';

import {
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  rangeColorMapping
} from "../../data/dummy";

const ColorMapping = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Color-Mapped Chart" />
      <div className="w-full ">
        <ColorMappingChart 
          height="420px"
          xAxisData={ColorMappingPrimaryXAxis}
          yAxisData={ColorMappingPrimaryYAxis}
          data={colorMappingData}
          range={rangeColorMapping}
        />
      </div>
    </div>
  )
}

export default ColorMapping