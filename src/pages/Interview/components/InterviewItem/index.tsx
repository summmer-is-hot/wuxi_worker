import { headImg } from '@/utils/const';
import { dateFormat } from '@/utils/utils';
import { Skeleton, Card, Avatar, Typography } from 'antd';
import NewParagraph from '../NewParagraph';
import styles from './index.module.scss';

const { Text } = Typography;


const { Meta } = Card;

const InterviewItem = (props: any) => {
  const { interviewItem } = props;


  const title =
    (
      <>
        <Text ellipsis className={styles.name}>{interviewItem.nickName}</Text>
        <Text className={styles.time}>{dateFormat(interviewItem.createTime, 'YYYY-mm-dd')}</Text>
      </>
    );

  return (
    <>
      <Card
        style={{ width: 500 }}
      >
        <Skeleton loading={false} avatar active>
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
