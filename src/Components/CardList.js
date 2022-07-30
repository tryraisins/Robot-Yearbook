import React from "react";
import Card from "./Card";

const CardList = ({ arr }) => {
  const CardArray = arr.map((user, i) => {
    return (
      <Card
        key={arr[i].id}
        id={arr[i].id}
        name={arr[i].name}
        email={arr[i].email}
      />
    );
  });
  return <div>{CardArray}</div>;
};
export default CardList;
