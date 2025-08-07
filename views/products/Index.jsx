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
            <p id="thewebname">PC PARTS BH</p>
          </div>
          <div id="actions">
            {user ? (
              <>
                <a href={`/products/all${token ? `?token=${token}` : ''}`} id="allproducts" className="btn btn-primary">📦 ALL PRODUCTS</a>
                <p id="welcominguser"  >Welcome, {user.name}</p>
                <form action="/users" method="POST">
                  <button type="submit" className="btn btn-secondary">Log Out</button>
                </form>
              </>
            ) : (
              <>
                <p><a href="/users/login" className="btn btn-primary">Sign In</a></p>
                <form action="/users" method="GET">
                  <button type="submit" className="btn btn-secondary">Sign Up</button>
                </form>
              </>
            )}
          </div>
        </nav>

        <section id="hero">
          <div id="headers">
            <h1>Best Website for Saving Your PC Parts.</h1>
            <h2>Post your Computer part now!</h2>
          </div>
        </section>

        <main>
          <div className="d-flex justify-between align-center mb-3">
            <h2>🖥Your Products Inventory</h2>
            <a href={`/products/new?token=${token}`} className="btn btn-primary">
              ➕ Add New Product
            </a>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product._id} className="product-card">
                <div className="product-name">{product.name}</div>
                <div className="product-description">📝 {product.description || 'No description'}</div>
                <div className="product-price">💰 Price: ${product.price}</div>
                <div className="product-quantity">📦 In Stock: {product.quantity}</div>
                <div className="product-supplier">🏢 Supplier: {user?.name || '—'}</div>
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
