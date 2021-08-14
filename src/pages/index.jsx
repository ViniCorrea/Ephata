import React from "react";
import Layout from "../components/layout";

import { Empty } from "antd";

const routes = [
  {
    path: "index",
    breadcrumbName: "First-level Menu",
  },
  {
    path: "first",
    breadcrumbName: "Second-level Menu",
  },
  {
    path: "second",
    breadcrumbName: "Third-level Menu",
  },
];

const Home = () => {
  return (
    <Layout breadcrum={routes}>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    </Layout>
  );
};

export default Home;
