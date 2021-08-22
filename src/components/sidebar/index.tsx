import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "antd";
import {
  MailOutlined,
  UsergroupAddOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const Sidebar = () => {
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([]);
  const [defaultOpenKeys, setDefaultOpenKeys] = useState([]);

  const handleClick = (event) => {
    console.log(event);
  };

  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      onClick={handleClick}
      mode="inline"
    >
      <Menu.ItemGroup key="g1" title="Cadastros">
        <Menu.Item icon={<UsergroupAddOutlined />} key="1">
          <Link href="/members">
            <a>Membros</a>
          </Link>
        </Menu.Item>
        <Menu.Item icon={<HomeOutlined />} key="3">
          Congregações
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup key="g2" title="Financeiro">
        <SubMenu key="sub1" icon={<MailOutlined />} title="Financeiro">
          <Menu.Item key="1">
            <Link href="/financial">
              <a>Fluxo de caixa</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">Contas financeiras</Menu.Item>
          <Menu.Item key="3">Contas a pagar</Menu.Item>
          <Menu.Item key="4">Contas a receber</Menu.Item>
        </SubMenu>
      </Menu.ItemGroup>
    </Menu>
  );
};

export default Sidebar;
