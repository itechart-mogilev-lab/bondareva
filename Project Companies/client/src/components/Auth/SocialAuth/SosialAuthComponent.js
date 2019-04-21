import React from "react";
import { GoogleLogin } from "react-google-login";
import "./Social.css";

export  function SocialComponent({authSocial}) {

  return (
    <div className="social">
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_DI}`}
        onSuccess={(response)=>authSocial("google", response)}
        buttonText="Войти через Google"
      />
    </div>
  );
}
