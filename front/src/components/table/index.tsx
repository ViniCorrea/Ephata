import React from 'react';
import { Table } from 'antd';

const TableComponent = (props) => {
  const { columns, data } = props;
  return (
    <Table columns={columns} dataSource={data} />
  );
};

export default TableComponent;