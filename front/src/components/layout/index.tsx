import React from 'react';
import { Layout, PageHeader, Button, Tag } from 'antd';
import { LayoutStyled, SiderStyled } from './styles';
import Sidebar from '../sidebar';

const { Header, Footer, Content } = Layout;

const LayoutApp = (props) => {
  const { children, breadcrumb } = props;
  return (
    <LayoutStyled>
      <Header>Header</Header>
      <Layout>
        <SiderStyled width={256}>
          <Sidebar/>
        </SiderStyled>
        <Content>
          <PageHeader
            title="Title"
            className="site-page-header"
            subTitle="This is a subtitle"
            tags={<Tag color="blue">Running</Tag>}
            extra={[
              <Button key="3">Operation</Button>,
              <Button key="2">Operation</Button>,
              <Button key="1" type="primary">
                Primary
              </Button>,
            ]}
            breadcrumb={{ breadcrumb }}
          />
            {children}
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </LayoutStyled>
  );
};

export default LayoutApp;