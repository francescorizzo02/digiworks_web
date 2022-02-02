//importing dependences
import React from "react";

//importing antd components
import { Table } from "antd";
import { Card } from "antd";

//importing commons
import Page from "../commons/Page";

export default function Contacts() {
  //declaring state variables
  const [counter, setCounter] = React.useState(0);

  //managing the component lifecycle
  React.useEffect(() => {
    if (counter > 10) {
      return
    }
    window.setTimeout(() => setCounter(counter + 1), 1500);
  }, [counter]);

  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Cognome",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Telefono",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
  ];

  return (
    <>
      <Page>
        {/* This is children */}
        <Card title="Contatti">
          <Table columns={columns} dataSource={[]} />
        </Card>
        {counter}
      </Page>
    </>
  );
}
