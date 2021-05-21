import React from "react";
import ListElement from "../ListElement";

const List: React.FC = () => {

  const urlMappings = [
    {text: "General", url: "/", exact: true},
    {text: "Today", url: "/today", exact: true},
    {text: "History", url: "/history", exact: true},
  ]

  return (
    <>
      {urlMappings.map(el => <ListElement text={el.text} to={el.url} exact={el.exact}/>)}
    </>
  )
}

export default List;
