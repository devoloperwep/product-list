import React from "react";
import Cards from "../components/Cards";

function Main({ data }) {
  return (
    <main className="main">
      <section className="desserts">
        <h2 className="desserts__title">Desserts</h2>
        <div className="cards">{data && <Cards data={data} />}</div>
      </section>
      <section className="shop">
        <div className="cart">
          <h2 className="cart__title">Your Cart (0)</h2>

          <div className="card__info">
            <img
              src="./public/images/illustration-empty-cart.svg"
              alt=""
              width={125}
              height={100}
            />
            <p>Your added items will appear here</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
