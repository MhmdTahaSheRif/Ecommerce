import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Product from "./Product";
import Cart from "./Cart"
import "./ProductDetails.css"; 

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [params.productId]);

  return (
    <div className="container">
      <div className="product-details-container">
        <Product product={product} showButton={false} showDescription={true} />
        <Link className="btn btn-info m-3" to="/Cart">
        Buy
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
