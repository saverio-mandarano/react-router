//utilizzo l'hook useParams per estrarre il parametro id dall'url
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  return (
    <>
      <p>quì il dettaglio prodotto</p>
      <div>
        <h1>ID prodotto: {id}</h1>
      </div>
    </>
  );
}
