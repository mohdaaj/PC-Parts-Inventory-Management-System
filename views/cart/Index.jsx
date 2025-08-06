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
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/cart-index.css" />

      </head>
      <body>
        <div className="container" style={{ maxWidth: '500px', margin: '0 auto', background: 'rgba(68, 66, 68, 0.85)', borderRadius: '15px', padding: '2rem', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}>
          <h1 className="cart-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem', color: '#ba2ecc' }}>🛒 Your Cart</h1>
          <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <a href={`/products/all${token ? `?token=${token}` : ''}`} className="btn btn-secondary back-to-inventory-btn">
              ← Back to All Products
            </a>
          </div>
          {cart.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#e9d1ec', fontWeight: 600 }}>Your cart is empty.</p>
          ) : (
            cart.map((item, idx) => (
              <div className="cart-product" key={item._id || idx} style={{ background: '#e9f7ef', borderRadius: '10px', marginBottom: '18px', padding: '18px 14px', boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}>
                <div className="cart-product-name" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#1e3a8a' }}>{item.name}</div>
                <div>Price: ${item.price}</div>
                <div>Quantity: {item.quantity}</div>
                <div className="cart-product-controls" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
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
