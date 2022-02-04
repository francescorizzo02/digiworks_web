//importing dependences
import React from "react";

//importing api
import contact from "../../api/contacts.api";

//importing globals
import { INITIAL_OPTIONS } from "../../globals/options";
import { contactsInterface } from "../../globals/data";
import { OptionsInterface } from "../../globals/options";
import { DEFAULT_PAGINATION } from "../../globals/options";

//importing scripts
import buildSorter from "../../scripts/buildSorter";

//importing commons
import Page from "../../commons/Page";
import SearchableTitle from "../../commons/searchableTitle/SearchableTitle";

//importing project components
import ContactsAdd from "./ContactsAdd";

//importing antd components
import { Table, TablePaginationConfig } from "antd";
import { Card } from "antd";
import { FilterValue } from "antd/lib/table/interface";

export default function Contacts() {
  //declaring state variables
  const [options, setOptions] = React.useState(INITIAL_OPTIONS);
  const [contactsData, setContactsData] = React.useState([]);
  const [isComponentLoading, setIsComponentLoading] = React.useState(true);
  const [totalCount, setTotalCount] = React.useState(0);
  const [tablePagination, setTablePagination] =
    React.useState(DEFAULT_PAGINATION);

  //managing the component lifecycle
  React.useEffect(() => {
    (async function onMount() {
      await fetchContacts(options);
    })();
  }, []);

  const columns = [
    {
      title: () => (
        <SearchableTitle
          options={options}
          setOptions={setOptions}
          fetchContacts={fetchContacts}
        />
      ),
      dataIndex: "name",
      key: "name",
      sorter: true,
    },
    {
      title: "Cognome",
      dataIndex: "surname",
      key: "surname",
      sorter: true,
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
            pagination={{ ...tablePagination, total: totalCount }}
            onChange={handleTableChange}
            scroll={{ y: 500 }}
            showSorterTooltip={false}
          />
        </Card>
      </Page>
    </>
  );

  async function fetchContacts(options: OptionsInterface = INITIAL_OPTIONS) {
    //declaration spot
    let response = await contact.handleGetContacts(options);
    let json = await response.json(); //Prendi solo i dati contenuti in postman
    setTotalCount(json.data.totalCount);
    setContactsData(json.data.documents);
    setIsComponentLoading(false);
  }

  function handleTableChange(
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: any
  ) {
    //declaration spot
    let currentPagination = tablePagination;
    let currentOptions = options;
    let sort = buildSorter(sorter);

    //organaicing pagination
    currentPagination.current = pagination.current!;
    currentOptions.page = pagination.current!;
    currentOptions.limit = pagination.pageSize!;
    currentPagination.pageSize = pagination.pageSize!;
    currentOptions.sort = sort;

    setIsComponentLoading(true);
    setTablePagination(currentPagination);
    setOptions(currentOptions);
    fetchContacts(currentOptions);
  }
}
