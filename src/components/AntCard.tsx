import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

type CardType = {
    name:string,
    episode:string;
    description:string
}

const AntCard2:React.FC<CardType> = ({name,episode, description}:CardType) => (
    <Card
        style={{ width: 200 }}
        actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
        ]}
    >
        <Meta
            title={name}
            description={episode}
        />
    </Card>
);

export default AntCard2;
