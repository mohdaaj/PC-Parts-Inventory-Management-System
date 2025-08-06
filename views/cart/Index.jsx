const React = require('react');

function CartIndex(props) {
  const cart = props.cart || [];
  const token = props.token;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Your Cart</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/allproducts.css" />

      </head>
      <body>
        <div className="cart-container">
          <div className="cart-title">🛒 Your Cart</div>
          <div style={{ marginBottom: '1rem' }}>
            <a href={`/products/all${token ? `?token=${token}` : ''}`} className="btn btn-secondary back-to-inventory-btn">
              ← Back to All Products
            </a>
          </div>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item, idx) => (
              <div className="cart-product" key={item._id || idx}>
                <div className="cart-product-name">{item.name}</div>
                <div>Price: ${item.price}</div>
                <div>Quantity: {item.quantity}</div>
                <div className="cart-product-controls">
                  <form action={`/cart/${item._id}/decrease${token ? `?token=${token}` : ''}`} method="POST" style={{display:'inline'}}>
                    <button type="submit" className="cart-btn">-</button>
                  </form>
                  <form action={`/cart/${item._id}/delete${token ? `?token=${token}` : ''}`} method="POST" style={{display:'inline'}}>
                    <button type="submit" className="cart-btn">Delete</button>
                  </form>
                </div>
              </div>
            ))
          )}
        </div>
      </body>
    </html>
  );
}

module.exports = CartIndex;
