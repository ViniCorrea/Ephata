import React from "react";
import { useRouter } from "next/router";
import { Empty, Table } from "antd";
import data, { columns, routes } from "./data";
import Layout from "../../components/layout";

const MembersPage = () => {
  const router = useRouter();

  // Creating action buttons
  const buttons = [
    {
      title: "Adicionar Membro",
      action: () => router.push("/members/form"),
    },
  ];

  return (
    <Layout breadcrumb={{ routes: routes }} title="Membros" buttons={buttons}>
      {data.length > 0 ? (
        <Table columns={columns} dataSource={data} />
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </Layout>
  );
};

export default MembersPage;
