import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { useContext } from "react";
import Card from "./components/Card";
import { ContextProvider } from "./context/MainContext";
function App() {
  const { data, isPanding, error } = useContext(ContextProvider);
  const [cards, setCards] = useState([]);
  if (isPanding) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  console.log(cards);
  return (
    <main className="main">
      <section className="desserts">
        <h2 className="desserts__title">Desserts</h2>
        <div className="cards">
          {data &&
            data.data.map((item) => {
              return (
                <Card
                  cards={cards}
                  item={item}
                  setCards={setCards}
                  image={item.image.thumbnail}
                  name={item.name}
                  category={item.category}
                  price={item.price}
                />
              );
            })}
        </div>
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

export default App;
