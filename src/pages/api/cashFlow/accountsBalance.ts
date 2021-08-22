import { accountsBalanceList } from "../../../mocks/cashFlow";

export default (req, res) => {
  res.status(200).json(accountsBalanceList);
  return;
};
