import React from 'react';
import { Empty, Table, Tag, Space } from 'antd';
import data, { routes } from './data';
import Layout from '../../components/layout';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size='middle'>
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const MembersPage = () => {
  return (
    <Layout breadcrum={routes}>
      {data.length > 0 ? (
        <Table columns={columns} dataSource={data} />
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </Layout>
  );
};

export default MembersPage;
