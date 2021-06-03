import React from "react";
import { Layout, PageHeader, Button, Tag } from "antd";
import { LayoutStyled, LayoutInnerStyled, SiderStyled } from "./styles";
import Sidebar from "../sidebar";

const { Header, Footer, Content } = Layout;

interface LayoutProps {
  title?: string;
  subtitle?: string;
  buttons: {
    title: string;
    action: () => {};
  }[];
  routes: {
    path: string;
    breadcrumbName: string;
  }[];
}

const LayoutApp: React.FC<LayoutProps> = (props) => {
  const { children, title, buttons, routes, subtitle } = props;

  // Mount action buttons
  const actions = () => {
    if (buttons && buttons.length > 0) {
      return buttons.map((button, index) => (
        <Button key={`button${index}`} onClick={button.action} type="primary">
          {button.title}
        </Button>
      ));
    } else {
      return [];
    }
  };

  return (
    <LayoutStyled>
      <Header>Header</Header>
      <LayoutInnerStyled>
        <SiderStyled width={256}>
          <Sidebar />
        </SiderStyled>
        <Content>
          <PageHeader
            title={title || "Title"}
            className="site-page-header"
            subTitle={subtitle || "This is a subtitle"}
            //tags={<Tag color="blue">Running</Tag>} //Tratar exceções de paginas que não precisam das tags 30/05/2021
            extra={actions()}
            breadcrumb={{ routes }}
          />
          {children}
        </Content>
      </LayoutInnerStyled>
      <Footer>Footer</Footer>
    </LayoutStyled>
  );
};

export default LayoutApp;
