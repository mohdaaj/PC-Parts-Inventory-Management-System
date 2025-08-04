const React = require('react');
const Layout = require('../layouts/Layout');

function Show(props) {
  const { product, token } = props;

  return (
    <Layout product={product}>
      <h1>🖥️ {product.name}</h1>

      <div className="product-card">
        <div className="product-name"><strong>Name:</strong> {product.name}</div>
        <div className="product-description"><strong>Description:</strong> {product.description || 'N/A'}</div>
        <div className="product-price"><strong>Price:</strong> ${product.price.toFixed(2)}</div>
        <div className="product-quantity"><strong>Quantity:</strong> {product.quantity}</div>
        <div className="product-created"><strong>Added On:</strong> {new Date(product.createdAt).toLocaleDateString()}</div>
        {product.supplier && (
          <div className="product-supplier"><strong>Supplier ID:</strong> {product.supplier}</div>
        )}

        <div className="mt-3 d-flex gap-2">
          <a href={`/products?token=${token}`} className="btn btn-secondary">
            ← Back to All Products
          </a>
          <a href={`/products/${product._id}/edit?token=${token}`} className="btn btn-primary">
            ✏️ Edit {product.name}
          </a>
        </div>

        <div className="mt-3">
          <form action={`/products/${product._id}?_method=DELETE&token=${token}`} method="POST">
            <button type="submit" className="btn btn-danger">
              🗑️ Delete {product.name}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Show;
