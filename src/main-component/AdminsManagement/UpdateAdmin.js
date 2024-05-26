import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import { Button, Grid, TextField } from "@mui/material";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import { useNavigate } from "react-router-dom";

const UpdateAdmin = () => {
  const push = useNavigate();

  const [value, setValue] = useState({
    email: "",
    full_name: "",
    last_name: "",
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

  const submitForm = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      setValue({
        email: "",
        full_name: "",
        password: "",
        confirm_password: "",
      });
      validator.hideMessages();
      toast.success("Registration Complete successfully!");
      push("/login");
    } else {
      validator.showMessages();
      toast.error("Empty field is not allowed!");
    }
  };
  return (
    <AdminLayout>
      <Grid className="loginWrapper">
        <Grid className="loginForm">
          <h2>Update Admin</h2>
          <form onSubmit={submitForm}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="First Name"
                  value={value.full_name}
                  variant="outlined"
                  name="first_name"
                  label="First Name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                />
                {validator.message(
                  "first name",
                  value.full_name,
                  "required|alpha"
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="Last Name"
                  value={value.full_name}
                  variant="outlined"
                  name="last_name"
                  label="Last Name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                />
                {validator.message(
                  "last name",
                  value.full_name,
                  "required|alpha"
                )}
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
                  value={value.email}
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
                  "conaact no",
                  value.email,
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
                  value={value.password}
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
                    Update
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
          <div className="shape-img">
            <i className="fi flaticon-honeycomb"></i>
          </div>
        </Grid>
      </Grid>
    </AdminLayout>
  );
};

export default UpdateAdmin;
