function ProductDetailCard({ productInfoProp }) {
  return (
    <>
      <div className="card">
        <div className="row mt-2 mb-4">
          <h5 className="card-title">Articolo: {productInfoProp.title}</h5>
        </div>
        <div className="row">
          <div className="col">
            <img
              src={productInfoProp.image}
              className="w-100 ms-3"
              alt={productInfoProp.title}
            />
            <p className="card-category my-3">
              Categoria: {productInfoProp.category}
            </p>
          </div>
          <div className="col">
            <div className="card-body">
              <p className="card-description">
                Descrizione prodotto: {productInfoProp.description}
              </p>
              <p className="card-description">
                Prezzo: ${productInfoProp.price}
              </p>
              {productInfoProp.rating && (
                <>
                  <p className="card-text">
                    Rating: {productInfoProp.rating.rate} / 5
                  </p>
                  <p>{productInfoProp.rating.rate} recensioni</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailCard;
