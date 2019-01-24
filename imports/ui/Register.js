import React from 'react'; 
import RegisterForm from './RegisterForm';

const Register = () => {
  return (
    <div className="content overflow-hidden">
    <div className="row">
      <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
        <div className="block block-themed animated fadeIn">
          <div className="block-header bg-success">
            <ul className="block-options">
              <li>
                <a href="#" data-toggle="modal" data-target="#modal-terms">View Terms</a>
              </li>
              <li>
                <a href="base_pages_login.html" data-toggle="tooltip" data-placement="left" title="Log In"><i className="si si-login" /></a>
              </li>
            </ul>
            <h3 className="block-title">Register</h3>
          </div>
          <div className="block-content block-content-full block-content-narrow">
            <h1 className="h2 font-w600 push-30-t push-5">OneUI</h1>
            <p>Please fill the following details to create a new account.</p>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  </div>    
  )
}

export default Register; 