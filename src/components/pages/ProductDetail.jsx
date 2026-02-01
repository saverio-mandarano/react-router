// utilizzo l'hook useParams per accedere alle informazioni provenienti dalla rotta dinamica mappata
import { useParams, useNavigate } from "react-router-dom";
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

  //eseguo useNavigate per aver un elemento navigate da utilizzare
  const navigate = useNavigate();

  //var di stato per gestire loading di dettaglio prodotto
  const [isLoading, setIsLoading] = useState(true);

  //transformo id da stringa a numero
  const numberId = Number(id);

  //funzione per navigare al prodotto precedente
  function prevProduct() {
    navigate(`/prodotti/${numberId - 1}`);
  }

  //funzione per navigare al prodotto successivo
  function nextProduct() {
    navigate(`/prodotti/${numberId + 1}`);
  }

  //funzione che fa chiamata Ajax per fetch dati usando l'id
  function fetchProductInfo() {
    setIsLoading(true);
    axios
      .get(`${endpointBase}${id}`)
      .then((res) => {
        //L'API mi restituisce oggetto vuoto per ID inesistente,
        //in tal caso lancio errore per interrompere il then e far entrare nel catch
        if (!res.data.id) throw new Error();
        setProductInfo(res.data);
      })
      .catch((err) => {
        console.log(`errore nella richiesta end.API`, err);
        navigate("/prodotti"); //Se c'è errore, o il prodotto non esiste (throw sopra), reindirizzamento alla pagina listato
      })
      .finally(() => {
        setIsLoading(false);
        console.log(`end call`);
      });
  }

  useEffect(() => {
    fetchProductInfo();
  }, [id]);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <>
      <h1>Dettaglio del prodotto con ID: {id}</h1>

      <div className="d-flex gap-2 my-3">
        <button
          onClick={prevProduct}
          disabled={numberId <= 1}
          className="btn btn-primary"
        >
          Precedente
        </button>

        <button onClick={nextProduct} className="btn btn-primary">
          Prossimo
        </button>
      </div>

      <div className="container">
        <h6>product details fetched from fakestoreapi</h6>
        <div className="card-container">
          <ProductDetailCard productInfoProp={productInfo} />
        </div>
      </div>
    </>
  );
}
