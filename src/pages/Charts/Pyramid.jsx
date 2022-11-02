import React from 'react';
import { Header, PyramidChart } from '../../components';

import { PyramidData } from "../../data/dummy";

const Pyramid = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Pyramid Chart" />
      <div className="w-full ">
        <PyramidChart
          data={PyramidData}
          radius="75%"
        />
      </div>
    </div>
  )
}

export default Pyramid;