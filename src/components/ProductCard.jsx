function ProductCard({ productProp }) {
  return (
    <div className="card">
      <span className="pt-3 actress-title">
        {productProp.title.toUpperCase()}
      </span>
      <div className="actress-img px-3 pb-1 pt-4 d-flex align-items-center justify-content-center ">
        <img src={productProp.image} alt={productProp.title} />
      </div>
      <div className="actress-info px-4 pb-5">
        <p className="actress-birth-year actress-nationality">
          {productProp.category} {productProp.price}
        </p>
        <p className="actress-biography">{productProp.description}</p>
      </div>
    </div>
  );
}

export default ProductCard;
