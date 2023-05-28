import React, { useState } from 'react';
import Footer from './footer';
import Navbar from './navbar';

function Login() {
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkUserExists = async (email) => {
    try {
        const response = await fetch(`http://localhost:8000/api/users?email=${encodeURIComponent(email)}`);
      const data = await response.json();
      console.log(data); // Vérifier les données renvoyées par l'API

      return data['hydra:member'].length > 0; // Utiliser data.hydra:member.length pour vérifier s'il y a des membres dans la collection
    } catch (error) {
      console.error("Une erreur s'est produite lors de la vérification de l'utilisateur :", error);
      return false;
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    if (await checkUserExists(email)) {
      setShowAlert(false); // Réinitialiser l'état de showAlert
      console.log('User exists:', await checkUserExists(email));
    } else {
      setShowAlert(true);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <header>
        {Navbar()}
      </header>
      <section className="login-area pt-80px pb-80px position-relative">
        <div className="shape-bg position-absolute top-0 left-0 w-100 h-100 opacity-2 z-index-n1"></div>
        <div className="container">
          <form action="#" className="card card-item login-form" onSubmit={handleLogin}>
            <div className="card-body row p-0">
              <div className="col-lg-6">
                <div className="form-content py-4 pr-60px pl-60px border-right border-right-gray h-100 d-flex align-items-center justify-content-center">
                  <img src="assets/images/undraw-remotely.svg" alt="Image" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-5 mx-auto">
                <div className="form-action-wrapper py-5">
                  <div className="form-group">
                    <h3 className="fs-22 pb-3 fw-bold">Log in to AskMe</h3>
                    <div className="divider"><span></span></div>
                    <p className="pt-3">Enter your email address and login to your account.</p>
                  </div>
                  <div className="form-group">
                    <label className="fs-14 text-black fw-medium lh-18">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form--control"
                      placeholder="Email address"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="fs-14 text-black fw-medium lh-18">Password</label>
                    <div className="input-group">
                      <input
                        className="form-control form--control password-field"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      <div className="input-group-append">
                        <button className="btn theme-btn-outline theme-btn-outline-gray toggle-password" type="button">
                          <i className="fa fa-eye"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {showAlert && (
                    <div className="alert alert-danger" role="alert">
                      User does not exist.
                    </div>
                  )}
                  <div className="form-group mt-4">
                    <button type="submit" className="btn theme-btn w-100">
                      Log in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <footer>
        {Footer()}
      </footer>
    </div>
  );
}

export default Login;
