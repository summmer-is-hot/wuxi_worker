import React, { useEffect } from 'react';
import { Line } from '@ant-design/plots';
import store from '@/store';
import chartService from '@/services/chartService';
import { message } from 'antd';

const CommentChart: React.FC = () => {
  const [chartState, chartDispatchers] = store.useModel('chart');

  const getChartForCommentNumber = async () => {
    const chartRes = await chartService.getChartForCommentNumber();
    if (chartRes.status === 200) {
      chartDispatchers.saveChart({ commentChart: chartRes.result });
    } else {
      message.error('系统出错');
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
export default CommentChart;

