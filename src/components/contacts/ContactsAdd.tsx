//importing dependences
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//importing api
import contact from "../../api/contacts.api";

//importing components antd
import { Modal } from "antd";
import { Button } from "antd";
import { Tooltip } from "antd";
import { Form } from "antd";
import { Input } from "antd";
import { Row } from "antd";
import { message } from "antd";

//importing icons
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function ContactsAdd(props: any) {
  //extracting from hooks
  const [form] = Form.useForm();
  const {setIsComponentLoading, fetchContacts}  = props; 

  //declaration spot
  let tooltip;
  let button;
  let icon;

  //declaring state variables
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  //allocation spot
  icon = <FontAwesomeIcon icon={faPlus} />;
  button = (
    <Button type="primary" shape="circle" size="large" onClick={toggleModal}>
      {icon}
    </Button>
  );
  tooltip = <Tooltip title="Aggiungi un nuovo contatto"> {button} </Tooltip>;

  return (
    <>
      {tooltip}
      <Modal
        title="Aggiungi"
        visible={isModalOpen}
        onCancel={toggleModal}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Nome"
            name="contactsAdd__name"
            rules={[{ required: true, message: "Inserisci il nome" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Cognome"
            name="contactsAdd__surname"
            rules={[{ required: true, message: "Inserisci il cognome" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="contactsAdd__email"
            rules={[{ required: true, message: "Inserisci un'email valida" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="Telefono"
            name="contactsAdd__phoneNumber"
            rules={[
              { required: true, message: "Inserisci il numero di telefono" },
            ]}
          >
            <Input type="tel" />
          </Form.Item>
          <Row justify="end">
            <Button type="primary" htmlType="submit">
              Crea
            </Button>
          </Row>
        </Form>
      </Modal>
    </>
  );

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  async function handleSubmit(fields: ContactsAddInterface) {
    //declaration spot
    let name = fields.contactsAdd__name;
    let surname = fields.contactsAdd__surname;
    let email = fields.contactsAdd__email;
    let phoneNumber = fields.contactsAdd__phoneNumber;
    let payload;
    let response;

    //organaicing payload
    payload = {
      name: name,
      surname: surname,
      email: email,
      phoneNumber: phoneNumber,
    };

    response = await contact.handlePostContact(payload);

    let json = await response.json();
    console.log(json);

    if (response.status === 200) {
      setIsComponentLoading(true);
      fetchContacts();
      toggleModal();
      setIsComponentLoading(false);
      return;
    }

    message.error("Non siamo riusciti ad inserire il contatto");
  }
}

interface ContactsAddInterface {
  contactsAdd__name: string;
  contactsAdd__surname: string;
  contactsAdd__email: string;
  contactsAdd__phoneNumber: string;
}
