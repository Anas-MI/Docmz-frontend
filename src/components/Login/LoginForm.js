import React, { PureComponent } from "react";
import { Formik } from "formik";
import LoginFields from "./Loginfields";

const initialValues = {
  selectOptions: ["Doctor", "Patient"]
};

export default class LoginForm extends PureComponent {
  handleSubmit = formProps => {
    const { type, email, password } = formProps;
    alert(
      `Email: ${email} \n Type: ${type}\n Password: ${password}`
    );
  };

  render = () => (
    <Formik
      initialValues={initialValues}
      onSubmit={this.handleSubmit}
      render={LoginFields}
    />
  );
}
