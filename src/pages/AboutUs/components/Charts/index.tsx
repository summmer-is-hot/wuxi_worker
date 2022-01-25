import React, { useEffect, useState } from 'react';
import { Line } from '@ant-design/plots';
import { useRequest } from 'ice';

const LineChart: React.FC = () => {
  const { data, error, loading, request: getCompanyNumForChart } = useRequest({ url: '/api/getCompanyNumForChart' });
  const { chartData = [] } = data || {};

  useEffect(() => {
    // (async function () {
    //   await fetchRepos();
    // }());
    getCompanyNumForChart();
  }, []);

  const config = {
    data: chartData,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };
  return <Line {...config} />;
};
export default LineChart;

