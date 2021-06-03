import styled from "styled-components";
import { Layout } from "antd";
const { Sider } = Layout;

export const LayoutStyled = styled(Layout)`
  min-height: 100vh;
`;

export const LayoutInnerStyled = styled(Layout)`
  min-height: 100%;
`;

export const SiderStyled = styled(Sider)`
  background-color: #ffffff;
`;
