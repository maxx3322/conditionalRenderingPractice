import React from "react";
import Input from "./Input";
import App from "./App";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="UserName" />
      <Input type="password" placeholder="Password" />

      {props.isRegistered ? null : (
        <Input type="password" placeholder="ConfirmPassword" />
      )}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
