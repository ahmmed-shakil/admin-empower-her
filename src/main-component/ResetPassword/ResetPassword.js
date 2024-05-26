import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import { useNavigate } from "react-router-dom";
import { Grid, TextField } from "@mui/material";
import { Button } from "bootstrap";

const ResetPassword = () => {
  const push = useNavigate();

  const [value, setValue] = useState({
    email: "",
    full_name: "",
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
          <h2>Reset Password</h2>
          {/* <p>Signup your account</p> */}
          <form onSubmit={submitForm}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="Old Password"
                  value={value.password}
                  variant="outlined"
                  name="old_password"
                  label="Old Password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                />
                {validator.message("old password", value.password, "required")}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="New Password"
                  value={value.password}
                  variant="outlined"
                  name="new_password"
                  label="New Password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                />
                {validator.message("new password", value.password, "required")}
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
                  <button
                    fullWidth
                    className=" border-0 w-100 cBtn cBtnLarge cBtnTheme"
                    type="submit"
                  >
                    Reset
                  </button>
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

export default ResetPassword;
