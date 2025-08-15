import React from "react";
import "../App.css";

function Card({ image, name, category, price, item }) {
  return (
    <div className="card">
      <img src={image} alt="" width={250} height={250} />
      <button>
        <img
          src="../images/icon-add-to-cart.svg"
          alt=""
          width={20}
          height={20}
        />
        Add to Cart
      </button>
      {/* {cards.length > 0 && (
        <button className={hidden}>
          <img
            src="../images/icon-add-to-cart.svg"
            alt=""
            width={20}
            height={20}
            l
          />
          em
        </button>
      )} */}
      <p className="card__category">{category}</p>
      <h4>{name}</h4>
      <p className="card__price">${price}</p>
    </div>
  );
}

export default Card;
