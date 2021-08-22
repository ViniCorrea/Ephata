import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Alert, Empty, Table } from "antd";
import { columns, routes } from "../../constants/pages/cashFlow";
import Layout from "../../components/layout";
import AccountsBalance from "./_balances";

const FinancialPage = () => {
  // Local states
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const router = useRouter();

  // Creating action buttons
  const buttons = [
    {
      title: "Adicionar transação",
      action: () => router.push("/members/form"),
    },
  ];

  useEffect(() => {
    fetch("/api/cashFlow")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setError(response.statusText);
        }
      })
      .then((result) => setData(result));
  }, []);

  return (
    <Layout
      breadcrumb={{ routes: routes }}
      title="Financeiro"
      buttons={buttons}
    >
      {error && (
        <Alert message="Error" description={error} type="error" showIcon />
      )}
      <AccountsBalance />
      {data.length > 0 ? (
        <Table columns={columns} dataSource={data} />
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </Layout>
  );
};

export default FinancialPage;
