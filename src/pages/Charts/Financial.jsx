import React from 'react';

import { FinancialChart, Header } from '../../components';

import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';

const Financial = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Financial Chart" />
      <div className="w-full ">
        <FinancialChart 
          height="420px"
          xAxisData={FinancialPrimaryXAxis}
          yAxisData={FinancialPrimaryYAxis}
          data={financialChartData}
        />
      </div>
    </div>
  )
}

export default Financial;