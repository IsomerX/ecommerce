import React from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  signInWithGoogle,
  SignInWithGoogle,
} from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            type="email"
            label="email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            value={this.state.password}
            type="password"
            label="password"
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
          <CustomButton type="submit" value="Submit Form">
            SIGN IN
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            SIGN IN WITH GOOGLE
          </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
