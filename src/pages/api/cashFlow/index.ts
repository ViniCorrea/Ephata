import { cashFlowList } from "../../../mocks/cashFlow";

export default function handler(req, res) {
  res.status(200).json(cashFlowList());
  return;
}
