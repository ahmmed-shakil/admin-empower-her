import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import { Button, Grid, TextField } from "@mui/material";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import { useNavigate } from "react-router-dom";

const AddNewBlog = () => {
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
          <h2>Post New Blog</h2>
          <form onSubmit={submitForm}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="Blog Title"
                  value={value.full_name}
                  variant="outlined"
                  name="title"
                  label="Blog Title"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                />
                {validator.message(
                  "blog title",
                  value.full_name,
                  "required|alpha"
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="Author"
                  value={value.full_name}
                  variant="outlined"
                  name="auuthor"
                  label="Author"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                />
                {validator.message("author", value.full_name, "required|alpha")}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="Blog Introduction"
                  value={value.email}
                  variant="outlined"
                  name="intro"
                  multiline
                  rows={6}
                  label="Blog Introduction"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                />
                {validator.message(
                  "blog introduction",
                  value.email,
                  "required|alpha"
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="Blog Content"
                  value={value.email}
                  variant="outlined"
                  name="content"
                  label="Blog Content"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  multiline
                  rows={8}
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                />
                {validator.message(
                  "blog content",
                  value.email,
                  "required|numeric"
                )}
              </Grid>
              <Grid item xs={12}>
                {/* <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group form-group-in"> */}
                <label htmlFor="file" className=" d-block mb-2">
                  Upload Blog Thumbnail Image
                </label>
                <input
                  value={value.file}
                  type="file"
                  name="thumb"
                  id="file"
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                  placeholder="Blog Thumbnail"
                />
                {validator.message(
                  "blog thumbnail",
                  value.thumb,
                  "required|file"
                )}
                <i className="ti-cloud-up"></i>
                {/* </div> */}
              </Grid>
              <Grid item xs={12}>
                <Grid className="formFooter">
                  <Button
                    fullWidth
                    className="cBtn cBtnLarge cBtnTheme"
                    type="submit"
                  >
                    Post
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

export default AddNewBlog;
