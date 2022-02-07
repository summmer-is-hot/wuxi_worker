import React, { useEffect } from 'react';
import { Line } from '@ant-design/plots';
import store from '@/store';
import chartService from '@/services/chartService';

const CompanyChart: React.FC = () => {
  const [chartState, chartDispatchers] = store.useModel('chart');

  const getChartForCoNumber = async () => {
    const chartRes = await chartService.getChartForCoNumber();
    if (chartRes) {
      chartDispatchers.saveChart({ companyChart: chartRes.result });
    }
  };

  useEffect(() => {
    // (async function () {
    //   await fetchRepos();
    // }());
    getChartForCoNumber();
  }, []);

  const config = {
    data: chartState.companyChart,
    // padding: 'auto',
    height: 360,
    xField: 'date',
    yField: 'num',
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
export default CompanyChart;

