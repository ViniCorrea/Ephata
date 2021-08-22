import React, { useEffect, useState } from "react";
import { Statistic, Card, Row, Col, Divider } from "antd";
import { AccountsBalanceWrap } from "./styles";

const AccountsBalance = () => {
  // Local states
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/cashFlow/accountsBalance")
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
    <AccountsBalanceWrap>
      <Row gutter={[16, 16]} justify="space-around">
        {data?.length > 0 &&
          data.map((account) => (
            <Col flex={100}>
              <Card>
                <Statistic
                  title={account.name}
                  value={account.total.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                  valueStyle={{
                    color: account.total >= 0 ? "#008653" : "#860021",
                  }}
                />
              </Card>
            </Col>
          ))}
      </Row>
      <Divider />
    </AccountsBalanceWrap>
  );
};

export default AccountsBalance;
