import { Link } from "react-router-dom";

function ProductCard({ productProp }) {
  return (
    <div className="card">
      <span className="pt-3 product-title">
        {productProp.title.toUpperCase()}
      </span>
      <div className="product-img px-3 pb-1 pt-4 d-flex align-items-center justify-content-center ">
        <img src={productProp.image} alt={productProp.title} />
      </div>
      <div className="product-info px-4 pb-5">
        <p className="product-price">
          {productProp.category} - &#x20AC; {productProp.price}
        </p>
        <p className="product-description">{productProp.description}</p>
      </div>
      <Link to={"/prodotti/2"}>Vedi dettagli</Link>
    </div>
  );
}

export default ProductCard;
