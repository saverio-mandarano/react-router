//utilizzo l'hook useParams per estrarre il parametro id dall'url
import { useParams } from "react-router-dom";
//utilizzo hook useEffect per gestione chiamata
import { useEffect } from "react";
import axios from "axios";

const endpointBase = "https://fakestoreapi.com/products/";

export default function ProductDetail() {
  //recupero valore parametro dinamico grazie ad hook useParams
  const { id } = useParams();

  //utilizzo il parametro per la chiamata
  useEffect(() => {
    axios
      .get(`${endpointBase}${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(`errore nella richiesta end.API`))
      .finally(() => console.log(`end call`));
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
