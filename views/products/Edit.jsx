const React = require('react');
const Layout = require('../layouts/Layout');

function Edit(props) {
  const { name, _id, description, price, quantity, supplier } = props.product;

  return (
    <Layout>
      <h1>✏️ Edit {name}</h1>

      <form action={`/products/${_id}?_method=PUT&token=${props.token}`} method="POST">
        <div className="form-group">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={name}
            placeholder="Enter product name..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            defaultValue={description}
            placeholder="Enter description..."
            rows="3"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price (USD):</label>
          <input
            type="number"
            id="price"
            name="price"
            defaultValue={price}
            step="0.01"
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            defaultValue={quantity}
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="supplier">Supplier ID:</label>
          <input
            type="text"
            id="supplier"
            name="supplier"
            defaultValue={supplier}
            placeholder="Enter supplier ObjectId..."
          />
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            💾 Update Product
          </button>
          <a href={`/products/${_id}?token=${props.token}`} className="btn btn-secondary">
            ← Back to {name}
          </a>
        </div>
      </form>
    </Layout>
  );
}

module.exports = Edit;
