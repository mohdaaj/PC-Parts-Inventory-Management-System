const React = require('react')

function Layout(props){
 return(
    <html>
        <head>
            <title>{!props.product?.name ? 'products App - The Greatest Of All Time' : `${props.product.name} - products App`}</title>
            <link rel="stylesheet" href="/styles.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
            <div className="container">
                {props.children}
            </div>
        </body>
    </html>
 )
}

module.exports = Layout