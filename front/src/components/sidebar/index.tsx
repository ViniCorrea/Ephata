import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import { UsergroupAddOutlined, HomeOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Sidebar = () => {
  const handleClick = e => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <Menu.ItemGroup key="g1" title="Cadastros">
        <Menu.Item icon={<UsergroupAddOutlined />} key="1">
          <Link href="/members">Membros</Link>
        </Menu.Item>
        <Menu.Item icon={<HomeOutlined />} key="2">Congregações</Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );
};

export default Sidebar;