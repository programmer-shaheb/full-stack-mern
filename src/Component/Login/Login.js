import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  const [isLoggedIn, setIsLoggedIn] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  const provider = new firebase.auth.GoogleAuthProvider();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const email = result.user.email;
        setIsLoggedIn(email);
        history.replace(from);
      });
  };

  const handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setIsLoggedIn("");
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-4 col-10 mx-auto mt-4 mb-2">
                {!isLoggedIn ? (
                  <>
                    <button
                      className="btn btn-outline-info"
                      style={{ borderRadius: "20px" }}
                      onClick={handleGoogleLogin}
                    >
                      Continue With Google
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-outline-danger"
                      style={{ borderRadius: "20px" }}
                      onClick={handleLogOut}
                    >
                      Sign Out
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
