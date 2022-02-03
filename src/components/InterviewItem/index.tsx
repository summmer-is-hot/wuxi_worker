import { Skeleton, Switch, Card, Avatar, Typography } from 'antd';
import { useState } from 'react';
import NewParagraph from '../NewParagraph';
import styles from './index.module.scss';

const { Title, Text } = Typography;


const { Meta } = Card;

const InterviewItem = () => {
  const [loading, setLoading] = useState(false);
  const value = `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
  Design, a design language for background applications, is refined by Ant UED Team. Ant
  Design, a design language for background applications, is refined by Ant UED Team. Ant
  Design, a design language for background applications, is refined by Ant UED Team. Ant
  Design, a design language for background applications, is refined by Ant UED Team. Ant
  Design, a design language for background applications, is refined by Ant UED Team.`

  const onChange = checked => {
    setLoading(!checked);
  };

  const title =
    (
      <>
        <Text ellipsis className={styles.name}>frank111111111111111111111111111111111111111111</Text>
        <Text className={styles.time}>2022年01月01日</Text>
      </>
    );

  return (
    <>
      <Card
        style={{ width: 500 }}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={title}
            description={
              <NewParagraph value={value} tooltip={false} />
            }
          />
        </Skeleton>
      </Card>
    </>
  );
};
export default InterviewItem;
