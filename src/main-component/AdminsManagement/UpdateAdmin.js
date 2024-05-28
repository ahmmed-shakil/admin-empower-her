import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import { Button, Grid, TextField } from "@mui/material";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const UpdateAdmin = () => {
  const push = useNavigate();

  const { adminId } = useParams();
  console.log("🚀 ~ UpdateAdmin ~ param:", adminId);

  const [value, setValue] = useState({
    email: "",
    first_name: "",
    last_name: "",
    contact: null,
  });

  useEffect(() => {
    const fetchStudent = async () => {
      const response = await axios.get(`${base_url}/admin/${adminId}`);
      const data = {
        first_name: response?.data?.firstName,
        last_name: response?.data?.lastName,
        email: response?.data?.email,
        contact: response?.data?.contact,
      };
      setValue(data);
    };
    fetchStudent();
  }, [adminId]);

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
    try {
      const data = {
        firstName: value.first_name,
        lastName: value.last_name,
        contact: value?.contact,
        email: value?.email,
      };
      if (validator.allValid()) {
        setValue({
          email: "",
          first_name: "",
          last_name: "",
          contact: null,
        });

        validator.hideMessages();
        const response = await axios.put(`${base_url}/admin/${adminId}`, data);
        if (response.data?.success) {
          toast.success("Admin info updated successfully!");
          push("/admin/admins");
        }
      } else {
        validator.showMessages();
        toast.error("Empty field is not allowed!");
      }
    } catch (error) {
      console.log("🚀 ~ submitForm ~ error:", error);
      toast.error(error?.response?.data?.message);
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
                  value={value.first_name}
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
                  value.first_name,
                  "required|alpha"
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="Last Name"
                  value={value.last_name}
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
                  value.last_name,
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
                  "conaact no",
                  value.contact,
                  "required|numeric"
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
