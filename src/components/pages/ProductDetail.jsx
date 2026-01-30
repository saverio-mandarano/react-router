// utilizzo l'hook useParams per accedere alle informazioni provenienti dalla rotta dinamica mappata
import { useParams } from "react-router-dom";
//utilizzo hook useEffect per gestione chiamata
import { useEffect, useState } from "react";
import axios from "axios";

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
      <p>quì il dettaglio prodotto</p>
      <div>
        <h1>ID prodotto: {id}</h1>
      </div>
    </>
  );
}
