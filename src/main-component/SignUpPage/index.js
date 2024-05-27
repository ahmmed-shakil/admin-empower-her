import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";
import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { useUser } from "../../context/userContext";

const SignUpPage = (props) => {
  const push = useNavigate();
  const { userId, login, logout } = useUser();
  useEffect(() => {
    userId && push("/dashboard");
  }, [push, userId]);
  const [value, setValue] = useState({
    email: "",
    firstName: "",
    lastName: "",
    contact: "",
    password: "",
    confirm_password: "",
  });

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const [validator] = React.useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const submitForm = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (value.password !== value.confirm_password) {
      toast.error("Passwords did not match");
      return;
    }

    // Prepare data object
    const data = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      contact: value.contact,
      password: value.password,
    };

    try {
      // Send POST request to create admin
      const response = await axios.post(`${base_url}/admin/create-admin`, data);

      console.log("🚀 ~ submitForm ~ response:", response);
      // Check if response indicates success
      if (response.data.success) {
        console.log("Calling logins");
        login(response.data?.data?._id, response?.data?.data?.fullName);
        toast.success("Registration completed successfully!");
      } else {
        toast.error(response?.data?.message);
      }

      // Validate fields and reset form if valid
      if (validator.allValid()) {
        setValue({
          email: "",
          firstName: "",
          lastName: "",
          contact: "",
          password: "",
          confirm_password: "",
        });
        validator.hideMessages();
      } else {
        validator.showMessages();
        toast.error("Empty field is not allowed!");
      }
    } catch (error) {
      // Handle error
      toast.error(error?.response?.data?.message);
      console.error("Error creating admin:", error?.response?.data?.message);
    }
  };

  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>Signup</h2>
        <p>Signup your account</p>
        <form onSubmit={submitForm}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="First Name"
                value={value.firstName}
                variant="outlined"
                name="firstName"
                label="First Name"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {validator.message(
                "first name",
                value.firstName,
                "required|alpha"
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Last Name"
                value={value.lastName}
                variant="outlined"
                name="lastName"
                label="Last Name"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {validator.message("last name", value.lastName, "required|alpha")}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="E-mail"
                value={value.email}
                variant="outlined"
                name="email"
                label="E-mail"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {validator.message("email", value.email, "required|email")}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Contact No"
                value={value.contact}
                variant="outlined"
                name="contact"
                label="Conact No"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {validator.message(
                "contact no",
                value.contact,
                "required|numeric"
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Password"
                value={value.password}
                variant="outlined"
                name="password"
                label="Password"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {validator.message("password", value.password, "required")}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Confirm Password"
                value={value.confirm_password}
                variant="outlined"
                name="confirm_password"
                label="Confirm Password"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {validator.message(
                "confirm password",
                value.confirm_password,
                `in:${value.password}`
              )}
            </Grid>
            <Grid item xs={12}>
              <Grid className="formFooter">
                <Button
                  fullWidth
                  className="cBtn cBtnLarge cBtnTheme"
                  type="submit"
                >
                  Create
                </Button>
              </Grid>
              <p className="noteHelp">
                Already have an account?{" "}
                <Link to="/login">Return to Sign In</Link>
              </p>
            </Grid>
          </Grid>
        </form>
        <div className="shape-img">
          <i className="fi flaticon-honeycomb"></i>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
