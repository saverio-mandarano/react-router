import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../ProductCard";

export default function Product() {
  const endpoint = "https://fakestoreapi.com/products";

  //var di stato per lista prodotti
  const [products, setProducts] = useState([]);

  //funzione che fa chiamata Ajax verso endopint API
  function fetchProducts() {
    axios
      .get(endpoint)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(`errore nella richiesta end.API`))
      .finally(() => console.log(`end call`));
  }

  //
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container">
        <h3>Prodotti</h3>
        <h6>List of product fetcher from fakestoreapi</h6>
        {console.log(products)}
        <div className="card-container d-flex flex-wrap">
          {products.map((product) => (
            <ProductCard key={product.id} productProp={product} />
          ))}
        </div>
      </div>
    </>
  );
}
