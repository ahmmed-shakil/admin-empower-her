import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";
import { useUser } from "../../context/userContext";
import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const LoginPage = (props) => {
  const push = useNavigate();
  const { userId, login } = useUser();
  useEffect(() => {
    userId && push("/dashboard");
  }, [userId, push]);

  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const rememberHandler = () => {
    setValue({ ...value, remember: !value.remember });
  };

  const [validator] = React.useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const submitForm = async (e) => {
    e.preventDefault();

    const userRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const email = value.email;
    console.log("🚀 ~ submitForm ~ email:", email, email.match(userRegex));

    if (email.match(userRegex)) {
      try {
        if (!value.password) {
          toast.error("Password is required");
          return;
        }
        const response = await axios.post(`${base_url}/admin/login`, {
          email,
          password: value.password,
        });

        console.log("Response", response);

        if (response?.data?.data?._id) {
          login(response?.data?.data?.id, response?.data?.data?.fullName);
          toast.success("You successfully logged in on Eduko!");
          // push("/home");
        } else {
          toast.error("Failed to log in. Please check your credentials.");
        }
      } catch (error) {
        // Handle error
        toast.error(error?.response?.data?.message);
        console.error("Error during login:", error);
      }
    } else {
      toast.error("Email format is invalid.");
    }

    if (validator.allValid()) {
      setValue({
        email: "",
        password: "",
      });
      validator.hideMessages();
    }
  };

  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
        <form onSubmit={submitForm}>
          <Grid container spacing={3}>
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
                placeholder="Password"
                value={value.password}
                variant="outlined"
                name="password"
                type="password"
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
              <Grid className="formAction">
                {/* <FormControlLabel
                  control={
                    <Checkbox
                      checked={value.remember}
                      onChange={rememberHandler}
                    />
                  }
                  label="Remember Me"
                /> */}
                <Link to="/forgot-password">Forgot Password?</Link>
              </Grid>
              <Grid className="formFooter">
                <Button fullWidth className="cBtnTheme" type="submit">
                  Login
                </Button>
              </Grid>
              <p className="noteHelp">
                Don't have an account?{" "}
                <Link to="/register">Create free account</Link>
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

export default LoginPage;
