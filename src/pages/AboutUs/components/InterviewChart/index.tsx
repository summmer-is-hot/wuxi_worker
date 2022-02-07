import React, { useEffect } from 'react';
import { Line } from '@ant-design/plots';
import store from '@/store';
import chartService from '@/services/chartService';

const InterviewChart: React.FC = () => {
  const [chartState, chartDispatchers] = store.useModel('chart');

  const getChartForInterviewNumber = async () => {
    const chartRes = await chartService.getChartForInterviewNumber();
    if (chartRes) {
      chartDispatchers.saveChart({ interviewChart: chartRes.result });
    }
  };

  useEffect(() => {
    getChartForInterviewNumber();
  }, []);

  const config = {
    data: chartState.interviewChart,
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
export default InterviewChart;

