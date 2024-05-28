import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import { Button, Grid, TextField } from "@mui/material";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const AddNewBlog = () => {
  const push = useNavigate();

  const [value, setValue] = useState({
    title: "",
    author: "",
    intro: "",
    desc: "",
    thumb: "",
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
    try {
      const data = {
        title: value?.title,
        author: value?.author,
        intro: value?.author,
        desc: value?.desc,
        thumb: value?.thumb,
      };
      const response = await axios.post(`${base_url}/blog/post-blog`, data);
      if (response?.data?.success) {
        toast.success("Blog posted successfully");
        push("/admin/blog");
      }
      if (validator.allValid()) {
        setValue({
          title: "",
          author: "",
          intro: "",
          desc: "",
          thumb: "",
        });
        validator.hideMessages();
      } else {
        validator.showMessages();
        toast.error("Empty field is not allowed!");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
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
                  value={value.title}
                  variant="outlined"
                  name="title"
                  label="Blog Title"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                />
                {validator.message("blog title", value.title, "required")}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="Author"
                  value={value.author}
                  variant="outlined"
                  name="author"
                  label="Author"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                />
                {validator.message("author", value.author, "required")}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="Blog Introduction"
                  value={value.intro}
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
                  value.intro,
                  "required"
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="Blog Content"
                  value={value.desc}
                  variant="outlined"
                  name="desc"
                  label="Blog Content"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  multiline
                  rows={8}
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                />
                {validator.message("blog content", value.desc, "required")}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="Blog Thumbnail Url"
                  value={value.thumb}
                  variant="outlined"
                  name="thumb"
                  label="Blog Thumbnail Url"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  multiline
                  rows={3}
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                />
                {validator.message("blog content", value.thumb, "required")}
              </Grid>
              {/* <Grid item xs={12}>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group form-group-in">
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
                </div>
              </Grid> */}
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
