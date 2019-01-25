import React from 'react'; 
import RegisterForm from './RegisterForm';

const Register = () => {
  return ( 
  <div className="bg-white pulldown">
        <div className="content content-boxed overflow-hidden">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
              <div className="push-30-t push-20 animated fadeIn">
                <div className="text-center">
                  <i className="fas fa-lemon fa-3x"></i>
                  <h1 className="h3 push-10-t">Create Account</h1>
                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Register; 