const React = require('react');

function Index(props) {
  const products = props.products;
  const user = props.user;
  const token = props.token;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>All Products - products App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/products-index.css" />
      </head>
      <body>
        <nav>
          <div id="destinations">
            <p>   </p>
          </div>
          <div id="actions">
            {user ? (
              <>
                <p>Welcome, {user.name}</p>
                <form action="/users" method="GET">
                  <button type="submit">Log Out</button>
                </form>
              </>
            ) : (
              <>
                <p><a href="/users/login">Sign In</a></p>
                <form action="/users" method="GET">
                  <button type="submit">Sign Up</button>
                </form>
              </>
            )}
          </div>
        </nav>

        <section id="hero">
          <div id="headers">
            <h1>Best website for finding PC parts.</h1>
            <h2>Post your Computer part now!</h2>
          </div>
        </section>

        <div id="subnav">
          <button id="sort">Popular</button>
          <button id="filter">Filter</button>
        </div>

        <main>
          <h1>🛒 All Products</h1>

          <div className="d-flex justify-between align-center mb-3">
            <h2>Product Inventory</h2>
            <a href={`/products/new?token=${token}`} className="btn btn-primary">
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
                  <a href={`/products/${product._id}?token=${token}`} className="btn btn-secondary">
                    👁️ View
                  </a>
                  <a href={`/products/${product._id}/edit?token=${token}`} className="btn btn-primary">
                    ✏️ Edit
                  </a>
                </div>
              </div>
            ))}
          </div>
        </main>
      </body>
    </html>
  );
}

module.exports = Index;
