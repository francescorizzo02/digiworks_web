//importing dependences
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

//importing antd components
import { Row } from "antd";
import { Input } from "antd";

//importing interface
import { OptionsInterface } from "../../globals/options";

//importing icons
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

//importing styles
import "./searchableTitle.scss";

export default function SearchableTitle(props: SearchableTitleInterface) {
  //declaring refs
  //continuare da qua
  
  //declaring states variabols
  const [isInputVisible, setIsInputVisible] = React.useState(false);

  //extracting from props
  const { options, setOptions, fetchContacts } = props;

  return (
    <>
      <Row
        onClick={(event) => event.stopPropagation()}
        align="middle"
        justify="space-between"
      >
        <div>Nome</div>
        <Input
          className="dw__no-py searchable__input"
          style={
            isInputVisible
              ? { width: "60%", opacity: 1 }
              : { width: "0%", opacity: 0 }
          }
          onKeyUp={onKeyUp}
          autoFocus
        />
        <div
          className="dw__mr-sm searchable__icon"
          onClick={onClick}
          style={{ backgroundColor: isInputVisible ? "#df0101" : "#acb1ac" }}
        >
          <FontAwesomeIcon
            style={{ fontSize: 13 }}
            color="white"
            icon={isInputVisible ? faTimes : faSearch}
          />
        </div>
      </Row>
    </>
  );

  function onClick(event: any) {
    setIsInputVisible(!isInputVisible);
  }

  function onKeyUp(event: any) {
    //declaration spot
    let value = event.target.value;
    let regex;
    let currentOptions = options;

    //allocation spot
    regex = `name={"$regex":"${value}","$options":"i"}`;

    //organizing options
    currentOptions.filter = regex;

    //updating state variables
    setOptions(currentOptions);
    fetchContacts(currentOptions);
  }
}

interface SearchableTitleInterface {
  options: OptionsInterface;
  setOptions: React.Dispatch<React.SetStateAction<OptionsInterface>>;
  fetchContacts: Function;
}
