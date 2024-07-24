import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Product.css';

function Product({ product, showButton, showDescription }) {
  const [showDescriptionState, setShowDescriptionState] = useState(showDescription);

  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.category}</p>
          <p className="card-price">Price: {product.price}$</p>
          {showDescriptionState && <p className="card-text">{product.description}</p>}
          {showButton && (
            <Link className="btn btn-primary" to={`/product/${product.id}`}>
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
