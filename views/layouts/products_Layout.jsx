const React = require('react');

function ProductsLayout(props) {
  const user = props.user;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>
          {!props.product?.name
            ? 'products App - The Greatest Of All Time'
            : `${props.product.name} - products App`}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/products-index.css" />
      </head>
      <body>
        <nav>
          <div id="destinations">
            <p>   </p>
          </div>

              <div id="actions">
                {props.user ? (
                  <>
                    <p>Welcome, {props.user.name}</p>
                    <form action="/users/login" method="POST">
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
          {props.children}
        </main>
      </body>
    </html>
  );
}

module.exports = ProductsLayout;
