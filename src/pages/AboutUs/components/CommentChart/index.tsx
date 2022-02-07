import React, { useEffect } from 'react';
import { Line } from '@ant-design/plots';
import store from '@/store';
import chartService from '@/services/chartService';

const CommentChart: React.FC = () => {
  const [chartState, chartDispatchers] = store.useModel('chart');

  const getChartForCommentNumber = async () => {
    const chartRes = await chartService.getChartForCommentNumber();
    if (chartRes) {
      chartDispatchers.saveChart({ commentChart: chartRes.result });
    }
  };

  useEffect(() => {
    getChartForCommentNumber();
  }, []);

  const config = {
    data: chartState.commentChart,
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
export default CommentChart;

