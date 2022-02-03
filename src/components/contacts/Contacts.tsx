//importing dependences
import React from "react";

//importing api
import contact from "../../api/contacts.api";

//importing globals
import { INITIAL_OPTIONS } from "../../globals/options";
import { contactsInterface } from "../../globals/data";
import { OptionsInterface } from "../../globals/options";

//importing commons
import Page from "../../commons/Page";

//importing project components
import ContactsAdd from "./ContactsAdd";

//importing antd components
import { Table } from "antd";
import { Card } from "antd";

export default function Contacts() {
  //declaring state variables
  const [options, setOptions] = React.useState(INITIAL_OPTIONS);
  const [contactsData, setContactsData] = React.useState([]);
  const [isComponentLoading, setIsComponentLoading] = React.useState(true);

  //managing the component lifecycle
  React.useEffect(() => {
    (async function onMount() {
      await fetchContacts(options);
      setIsComponentLoading(false);
    })();
  }, []);

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
        <Card
          title="Contatti"
          className="dw__card"
          extra={
            <ContactsAdd
              setIsComponentLoading={setIsComponentLoading}
              fetchContacts={fetchContacts}
            />
          }
        >
          <Table
            loading={isComponentLoading}
            columns={columns}
            dataSource={contactsData}
            rowKey={(contact: contactsInterface) => {
              return contact._id;
            }}
          />
        </Card>
      </Page>
    </>
  );

  async function fetchContacts(options: OptionsInterface = INITIAL_OPTIONS) {
    //declaration spot
    let response = await contact.handleGetContacts(options);
    let json = await response.json(); //Prendi solo i dati contenuti in postman
    setContactsData(json.data.documents);
  }
}
