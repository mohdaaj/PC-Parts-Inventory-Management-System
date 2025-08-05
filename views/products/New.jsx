const React = require('react')
const ProductsLayout = require('../layouts/Layout')

function New(props) {
  return (
    <ProductsLayout user={props.user}>
      <h1>🧩 Add New Product</h1>

      <form action={`/products?token=${props.token}`} method="POST">
        <div className="form-group">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter product name..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Enter product description..."
            rows="3"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price (USD):</label>
          <input
            type="text"
            step="0.01"
            id="price"
            name="price"
            defaultValue={0}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            defaultValue={0}
          />
        </div>


        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            ➕ Create Product
          </button>
          <a href={`/products?token=${props.token}`} className="btn btn-secondary">
            ← Back to All Products
          </a>
        </div>
      </form>
    </ProductsLayout>
  )
}

module.exports = New
