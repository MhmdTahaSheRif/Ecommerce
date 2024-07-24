import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./ProductsList.css";

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductInCategory = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h2 className="text-center p-3 border-2"> Our Products </h2>

      <div className="container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={handleSearch}
            className="control search-input"
          />

          <select
            onChange={(e) => {
              if (e.target.value === "All") {
                getProducts();
              } else {
                getProductInCategory(e.target.value);
              }
            }}
            className="select search-select"
          >
            <option key="All">All</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-3" key={product.id}>
              <Product product={product} showButton={true} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
