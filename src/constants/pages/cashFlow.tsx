import moment from "moment";
import { Tag, Space } from "antd";

export const columns = [
  {
    title: "Conta Financeira",
    dataIndex: "financialAccount",
    key: "financialAccount",
  },
  {
    title: "Data e Hora",
    dataIndex: "date",
    key: "date",
    render: (date) => moment().format("DD/MM/YYYY hh:mm"),
  },
  {
    title: "Tipo",
    dataIndex: "type",
    key: "type",
    render: (type) => {
      if (type === "credit") {
        return <Tag color="green">ENTRADA</Tag>;
      }
      return <Tag color="volcano">SAÍDA</Tag>;
    },
  },
  {
    title: "Descrição",
    key: "description",
    dataIndex: "description",
  },
  {
    title: "Valor",
    key: "value",
    dataIndex: "value",
    render: (value) =>
      value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
  },
];
export const routes = [
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
