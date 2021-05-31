import React from 'react';
import { Layout, PageHeader, Button, Tag } from 'antd';
import { LayoutStyled, SiderStyled } from './styles';
import Sidebar from '../sidebar';

const { Header, Footer, Content } = Layout;

const LayoutApp = (props) => {
  const { children, title, buttons, routes, subtitle } = props;

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
            subTitle={subtitle || 'This is a subtitle'}
            //tags={<Tag color="blue">Running</Tag>} //Tratar exceções de paginas que não precisam das tags 30/05/2021
            extra={actions()}
            breadcrumb={{ routes }}
          />
            {children}
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </LayoutStyled>
  );
};

export default LayoutApp;