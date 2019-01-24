import React from 'react'; 

const Register = () => {
  return (
    <div>
      <form>
          <input type="email" name="registerEmail" />
          <input type="password" name="registerPassword" />
          <input type="submit" value="Register" />
      </form>
    </div>
  )
}

export default Register; 