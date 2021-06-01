import React from "react";
import { STARRED_PATH, TODOS_LIST_PATH } from "../../../store/constants/Routes";
import ListElement from "../ListElement";

const List: React.FC = () => {

  const urlMappings = [
    {text: "General", url: TODOS_LIST_PATH, exact: true},
    {text: "Starred", url: STARRED_PATH, exact: true},
  ]

  return (
    <>
      { urlMappings.map(el => 
        <ListElement text={el.text} to={el.url} exact={el.exact}/>) }
    </>
  )
}

export default List;
