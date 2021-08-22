const cashFlowItem = {
  financialAccount: "Caixa",
  date: "22/08/2021 06:15",
  type: "credit",
  description: "Oferta",
  value: 150.5,
};

export const cashFlowList = (quantity = 15) => {
  const list = [];
  for (var i = 0; i < quantity; i++) {
    list.push({ id: i, ...cashFlowItem });
  }
  return list;
};

export const accountsBalanceList = [
  {
    id: 1,
    name: "Caixa da secretaria",
    total: 512.85,
  },
  {
    id: 2,
    name: "SICOB",
    total: 623.96,
  },
  {
    id: 3,
    name: "Banco Brasil",
    total: 3000.0,
  },
  {
    id: 4,
    name: "Bradesco",
    total: -150.0,
  },
];
