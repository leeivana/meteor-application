import React, { Component } from 'react'; 

import LoginForm from './LoginForm';

const Login = () => {
    return (
      <div className="bg-white pulldown">
        <div className="content content-boxed overflow-hidden">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
              <div className="push-30-t push-50 animated fadeIn">
                <div className="text-center">
                  <i className="far fa-lemon fa-3x"></i>
                  <p className="text-muted push-15-t">The BEST Team Building Application</p>
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