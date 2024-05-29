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
import AdminLayout from "../../components/AdminLayout/AdminLayout";

const MyProfile = (props) => {
  const push = useNavigate();
  const { userId, login, logout } = useUser();
  useEffect(() => {
    !userId && push("/");
  }, [userId, push]);

  const [value, setValue] = useState({});

  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const result = await axios.get(`${base_url}/admin/profile/${userId}`);
        setValue(result?.data);
        console.log("🚀 ~ fetchProfile ~ result:", result);
      } catch (error) {
        // toast.error("Failed to fetch profile");
      }
    };
    fetchProfile();
  }, [userId]);

  return (
    <AdminLayout>
      <Grid className="loginWrapper">
        <Grid className="loginForm">
          <h2>Profile</h2>
          <form>
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
                  disabled
                />
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
                  disabled
                />
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
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="Contact No"
                  value={value.contact}
                  variant="outlined"
                  name="contact"
                  type="number"
                  label="Contact No"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                {/* <Grid className="formAction">
              
                <Link to="/forgot-password">Forgot Password?</Link>
              </Grid> */}

                {/* <p className="noteHelp">
                Don't have an account?{" "}
                <Link to="/register">Create free account</Link>
              </p> */}
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

export default MyProfile;
