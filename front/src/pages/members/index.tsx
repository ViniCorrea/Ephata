import React from 'react';
import { Empty, Table } from 'antd';
import data, { columns, routes } from './data';
import Layout from '../../components/layout';

const MembersPage = () => {
  // Creating action buttons
  const actionButtons = [
    {
      title: 'Adicionar Membro',
      action: () => console.log,
    },
  ];

  return (
    <Layout breadcrum={routes} title='Membros' buttons={actionButtons}>
      {data.length > 0 ? (
        <Table columns={columns} dataSource={data} />
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </Layout>
  );
};

export default MembersPage;
