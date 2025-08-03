const React = require('react');
const ProductsLayout = require('../layouts/products_Layout');

function Index(props) {
  const products = props.products;

  return (
    <ProductsLayout token={props.token}>
      <h1>🛒 All Products</h1>

      <div className="d-flex justify-between align-center mb-3">
        <h2>Product Inventory</h2>
        <a href={`/products/new?token=${props.token}`} className="btn btn-primary">
          ➕ Add New Product
        </a>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <div className="product-name"><strong>{product.name}</strong></div>
            <div className="product-description">📝 {product.description || 'No description'}</div>
            <div className="product-price">💰 Price: ${product.price.toFixed(2)}</div>
            <div className="product-quantity">📦 In Stock: {product.quantity}</div>
            <div className="product-supplier">🏢 Supplier: {product.supplier?.name || '—'}</div>
            <div className="product-date">📅 Added: {new Date(product.createdAt).toLocaleDateString()}</div>
            <div className="d-flex gap-2 mt-2">
              <a href={`/products/${product._id}?token=${props.token}`} className="btn btn-secondary">
                👁️ View
              </a>
              <a href={`/products/${product._id}/edit?token=${props.token}`} className="btn btn-primary">
                ✏️ Edit
              </a>
            </div>
          </div>
        ))}
      </div>
    </ProductsLayout>
  );
}

module.exports = Index;
