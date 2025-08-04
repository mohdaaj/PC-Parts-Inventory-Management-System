const React = require('react');
const Layout = require('../layouts/Layout');

function Show(props) {
  const { name, description, price, quantity, createdAt, supplier, _id } = props.product;

  return (
    <Layout product={props.product}>
      <h1>🖥️ {name}</h1>

      <div className="product-card">
        <div className="product-name"><strong>Name:</strong> {name}</div>
        <div className="product-description"><strong>Description:</strong> {description || 'N/A'}</div>
        <div className="product-price"><strong>Price:</strong> ${price}</div>
        <div className="product-quantity"><strong>Quantity:</strong> {quantity}</div>
        <div className="product-created"><strong>Added On:</strong> {new Date(createdAt).toLocaleDateString()}</div>
        {supplier && (
          <div className="product-supplier"><strong>Supplier ID:</strong> {supplier}</div>
        )}

        <div className="mt-3 d-flex gap-2">
          <a href={`/products?token=${props.token}`} className="btn btn-secondary">
            ← Back to All Products
          </a>
          <a href={`/products/${_id}/edit?token=${props.token}`} className="btn btn-primary">
            ✏️ Edit {name}
          </a>
        </div>

        <div className="mt-3">
          <form action={`/products/${_id}?_method=DELETE&token=${props.token}`} method="POST">
            <button type="submit" className="btn btn-danger">
              🗑️ Delete {name}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Show;
