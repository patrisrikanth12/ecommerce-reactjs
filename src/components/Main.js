import React, { useEffect, useState } from "react";

const loadProducts = (products) => {
  console.log("products loaded");
  if (products.length != 0) {
    console.log("products loaded");
    return (
      <div className="products-container">
        {products.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <img
                className="product-card__img"
                src={product.image}
              />
              <div className="product-card__body">
                <p className="product-card__name">{product.title}</p>
                <p className="product-card__desc">{product.description}</p>
                <p className="product-card__price">${product.price}</p>
                <button className="btn__primary">Add to card</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    console.log("shimmer loaded");
    return (
      <div className="products-container">
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
      </div>
    );
  }
};

const Main = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);

      // to test shimmer effect
      setTimeout(() => {
        setProducts((prevData) => data);
      }, 2000);

      // setProducts((prevData) => data.products);
    })();
  }, []);

  return (
    <main className="container">
      {loadProducts(products)}
    </main>
  );
};

export default Main;
