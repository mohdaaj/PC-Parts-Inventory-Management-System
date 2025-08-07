const React = require('react');

function Index(props) {
  const products = (props.data && props.data.products) || props.products || [];
  const token = (props.data && props.data.token) || props.token || '';
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>All Products - All Users</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/allproducts.css" />
      </head>
      <body>
        <nav>
          <div id="destinations">
            <p id="thewebname">All PC PARTS</p>
          </div>
          <div id="actions" style={{marginLeft: '890px', fontSize: '20px'}}>
            <a href={`/cart${props.data && props.data.token ? `?token=${props.data.token}` : ''}`}
             className="btn btn-secondary back-to-inventory-btn">🛒
            </a>
          </div>
          <div id="actions" style={{marginLeft: 'auto'}}>
            <a href={`/products${props.data && props.data.token ? `?token=${props.data.token}` : ''}`}
              className="btn btn-secondary back-to-inventory-btn">← Back to Your Inventory</a>
          </div>
        </nav>

        <section id="hero">
          <div id="headers">
            <h1>All Products from All Users</h1>
            <h2>Browse every computer part in the system!</h2>
          </div>
        </section>

        <main>
          <h1>🛒 All Products</h1>

          <div className="products-grid">
            {products && products.length > 0 ? (
              products.map((product) => (
                <div key={product._id} className="product-card">
                  <div className="product-name">{product.name}</div>
                  <div className="product-description">📝 {product.description || 'No description'}</div>
                  <div className="product-price">💰 Price: ${product.price}</div>
                  <div className="product-quantity">📦 In Stock: {product.quantity}</div>
                  <div className="product-supplier">🏢 Supplier: {product.supplier?.name || '—'}</div>
                  <div className="product-date">📅 Added: {new Date(product.createdAt).toLocaleDateString()}</div>
                  <div className="d-flex gap-2 mt-2">
                  <form action={`/cart/${product._id}/add${token ? `?token=${token}` : ''}`} method="POST">
                    <button type="submit" className="btn btn-primary">
                      🛒 Add to cart
                    </button>
                  </form>
                </div>
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </main>
      </body>
    </html>
  );
}

module.exports = Index;