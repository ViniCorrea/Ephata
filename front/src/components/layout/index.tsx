import React from 'react';
import { Layout, PageHeader, Button, Tag } from 'antd';
import { LayoutStyled, SiderStyled } from './styles';
import Sidebar from '../sidebar';

const { Header, Footer, Content } = Layout;

const LayoutApp = (props) => {
  const { children, title, buttons, breadcrumb } = props;

  // Mount action buttons
  const actions = () => {
    if( buttons && buttons.length > 0) {
      return buttons.map((button, index) => <Button key={`button${index}`} onClick={button.action} type="primary">{button.title}</Button>)
    } else {
      return []
    }
  }

  return (
    <LayoutStyled>
      <Header>Header</Header>
      <Layout>
        <SiderStyled width={256}>
          <Sidebar/>
        </SiderStyled>
        <Content>
          <PageHeader
            title={title || 'Title'}
            className="site-page-header"
            subTitle="This is a subtitle"
            tags={<Tag color="blue">Running</Tag>}
            extra={actions()}
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