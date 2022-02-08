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
      tickCount: 5,
    },
    tooltip: {
      formatter: (item: any) => {
        return { name: '数量', value: item.num };
      },
    }
  };
  return <Line {...config} />;
};
export default CompanyChart;

