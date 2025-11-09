import { useEffect, useState } from "react";

const NoRecordsFound = () => {
  return (
    <div>No records found</div>
  )
}

export const Product = () => {

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/getProducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      }).finally(() => {
        setLoading(false);
      })
  }, []);

  if (Array.isArray(products) && products.length === 0) {
    return <NoRecordsFound />
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="row">
        {
          products?.map((product) => {
            return (
              <div className="col-md-3">
                <div className="card">
                  <img src={product.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">
                      {product.description}
                    </p>
                    <button className="btn btn-primary">Add to cart {product.price}</button>

                    <div className="badge text-primary">{product.inStock ? "In stock" : "Out of stock"}</div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};
