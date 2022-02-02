//importing apis
import server from "./server.api";

//importing interfaces
import OptionsInterface from "../globals/options";

//declaring constants
const CONTACTS_API_ENDPOINTS = "/api/contacts";

class Contact {
  public async handleGetContacts(options: OptionsInterface) {
    const url = `${CONTACTS_API_ENDPOINTS}?limit=${options.limit}&sort=${options.sort}&page=${options.page}&${options.filter}`;
    return await server(url, "GET");
  }
}

const contact = new Contact();
export default contact;