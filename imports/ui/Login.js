import React  from 'react'; 

import LoginForm from './LoginForm';

const Login = () => {
  <h1 className="h3 push-10-t">Create Account</h1>
    return (
      <div className="bg-white pulldown">
        <div className="content content-boxed overflow-hidden">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
              <div className="push-30-t push-50 animated fadeIn">
                <div className="text-center">
                  <i className="fab fa-connectdevelop fa-3x"></i>
                  <h1 className="h3 push-10-t">Login</h1>
                  <p className="text-muted push-15-t">Team Interface, The BEST Team Building Application</p>
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Login; 