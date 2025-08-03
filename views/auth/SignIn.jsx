const React = require('react')
const Layout = require('../layouts/Layout')

function SignIn (props) {
    return(
        <Layout>
            <h1> Sign In</h1>
            
            <h2 className="text-center mb-3">Welcome Back!</h2>
            
            <form action="/users/login" method="POST">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email"
                        name="email" 
                        placeholder="Enter your email..."
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password"
                        name="password" 
                        placeholder="Enter your password..."
                        required 
                    />
                </div>
                
                <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-primary">
                         Sign In
                    </button>
                    <a href="/users" className="btn btn-secondary">
                         Create Account Insted
                    </a>
                </div>
            </form>
        </Layout>
    )
}

module.exports = SignIn