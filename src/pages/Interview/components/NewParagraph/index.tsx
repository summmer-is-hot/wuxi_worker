import React, { ReactNode, useState, useEffect } from 'react';
import { Typography, Tooltip } from 'antd';
import { ParagraphProps } from 'antd/lib/typography/Paragraph';

export interface ILabelValueProps {
  label?: ReactNode;
  value: ReactNode;
  valueConfig?: ParagraphProps;
  colon?: boolean;
  tooltip?: boolean;
}
type Props = ILabelValueProps;

const { Paragraph } = Typography;

export function NewParagraph(props: Readonly<Props>) {
  const { value, tooltip, valueConfig } = props;
  const rows = tooltip ? 1 : 3;
  const [key, setKey] = useState(0);
  const [fold, setFold] = useState(true);
  const onExpand = () => {
    setFold(false);
  };
  const onCollapse = () => {
    setFold(true);
    setKey(key + 1);
  };
  return (
    <>
      <div key={key}>
        <Paragraph
          ellipsis={{
            rows,
            expandable: !tooltip,
            onExpand,
          }}
          {...valueConfig}
        >
          {value}
          {!fold && (
            <a onClick={onCollapse}>
              收起
            </a>
          )}
        </Paragraph>
      </div>
    </>
  );
}

export default NewParagraph;
