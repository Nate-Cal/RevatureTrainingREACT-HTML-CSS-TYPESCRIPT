import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form> 
            <h1>Login Page</h1>
            <p>Please login to access your account.</p>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <br />
            <button type="submit">Login</button>
        </form>
        

        
      </div>
    );
  }
}

export default Login;