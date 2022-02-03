//importing components ant
import { Card } from "antd";
import { Table } from "antd";
import { Button } from "antd";
import { Tooltip } from "antd";

//importing commons
import Page from "../commons/Page";

export default function Deals() {
  return (
    <>
      <Page>
        <Card title="Deals" className="dw__card">
          <Table columns={[]} dataSource={[]} />
        </Card>
      </Page>
    </>
  );
}
