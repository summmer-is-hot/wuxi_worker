/* eslint-disable @typescript-eslint/quotes */
import React, { useEffect, useState } from 'react';
import { Line } from '@ant-design/plots';
import { useRequest } from 'ice';

const LineChart: React.FC = () => {
  const { data, error, loading, request: getCoNumForChart } = useRequest({ url: '/api/getCoNumForChart' });
  const { chartData = [] } = data || {};

  useEffect(() => {
    // (async function () {
    //   await fetchRepos();
    // }());
    getCoNumForChart();
  }, []);

  const config = {
    data: chartData,
    // padding: 'auto',
    height: 360,
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

