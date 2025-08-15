import React from "react";
import Card from "./Card";

function Cards({ data }) {
  return (
    <>
      {data.data.map((item) => {
        return (
          <Card
            key={item.id}
            item={item}
            image={item.image.thumbnail}
            name={item.name}
            category={item.category}
            price={item.price}
          />
        );
      })}
    </>
  );
}

export default Cards;
