// utilizzo l'hook useParams per accedere alle informazioni provenienti dalla rotta dinamica mappata
import { useParams } from "react-router-dom";
//utilizzo hook useEffect per gestione chiamata
import { useEffect, useState } from "react";
import axios from "axios";
import ProductDetailCard from "../ProductDetailCard";

const endpointBase = "https://fakestoreapi.com/products/";

export default function ProductDetail() {
  //estraggo valore parametro dinamico definito nella rotta grazie all'hook useParams
  const { id } = useParams();

  //var di stato per salvare informazioni su dettaglio prodotto
  const [productInfo, setProductInfo] = useState({});

  //funzione che fa chiamata Ajax per fetch dati usando l'id
  function fetchProductInfo() {
    axios
      .get(`${endpointBase}${id}`)
      .then((res) => setProductInfo(res.data))
      .catch((err) => console.log(`errore nella richiesta end.API`))
      .finally(() => console.log(`end call`));
  }

  useEffect(() => {
    fetchProductInfo();
  }, []);

  return (
    <>
      <h1>Dettaglio del prodotto con ID: {id}</h1>
      <div className="container">
        <h6>product details fetched from fakestoreapi</h6>
        <div className="card-container">
          <ProductDetailCard />
        </div>
      </div>
    </>
  );
}
