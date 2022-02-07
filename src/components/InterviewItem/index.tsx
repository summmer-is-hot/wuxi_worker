import { headImg } from '@/utils/const';
import { Skeleton, Switch, Card, Avatar, Typography } from 'antd';
import { useState } from 'react';
import NewParagraph from '../NewParagraph';
import styles from './index.module.scss';

const { Title, Text } = Typography;


const { Meta } = Card;

const InterviewItem = (props: any) => {
  const [loading, setLoading] = useState(false);
  const value = `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
  Design, a design language for background applications, is refined by Ant UED Team. Ant
  Design, a design language for background applications, is refined by Ant UED Team. Ant
  Design, a design language for background applications, is refined by Ant UED Team. Ant
  Design, a design language for background applications, is refined by Ant UED Team. Ant
  Design, a design language for background applications, is refined by Ant UED Team.`
  const { interviewItem } = props;

  const onChange = checked => {
    setLoading(!checked);
  };

  const title =
    (
      <>
        <Text ellipsis className={styles.name}>{interviewItem.nickName}</Text>
        <Text className={styles.time}>{interviewItem.createTime}</Text>
      </>
    );

  return (
    <>
      <Card
        style={{ width: 500 }}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src={headImg(interviewItem.head)} />}
            title={title}
            description={
              <NewParagraph value={interviewItem.interviewDetail} tooltip={false} />
            }
          />
        </Skeleton>
      </Card>
    </>
  );
};
export default InterviewItem;
