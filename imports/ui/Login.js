import React from 'react'; 

const Login = () => {
  return (
    <form>
      <input type="email" name="loginEmail" />
      <input type="password" name="loginPassword" />
      <input type="submit" value="Login" />
    </form>
  )
}

export default Login; 