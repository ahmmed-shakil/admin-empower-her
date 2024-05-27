import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import { Button, Grid, TextField } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddNewBlog = () => {
  const push = useNavigate();

  const [Blog_Details,Set_Blog_Detials] = useState({
    Title: "",
    Author: "",
    Intro: "",
    Content: "",
    URL: ""
  })

const changeHandler = ({...detials}) => {
  const { key,value } = detials;

  if (value === null){
    toast.error("Empty fields are not allowed!");
    return ;
  }
  else{
    Set_Blog_Detials((PrevDetails)=>({
      ...PrevDetails,
      [key]: value
    }))
  }

  };

  const submitForm = (e) => {
    e.preventDefault();
    const allFilled = Object.values(Blog_Details).every(x => x.trim() !== "");
    if(allFilled){
      toast.success("Blog added successfully!");
      push("/login");
    }else{
      toast.error("Empty fields are not allowed!");
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
                  variant="outlined"
                  name="title"
                  label="Blog Title"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={(e) => changeHandler({key: "Title",value: e.target.value})}
                  onChange={(e) => changeHandler({key: "Title",value: e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="Author"
                  variant="outlined"
                  name="auuthor"
                  label="Author"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={(e) => changeHandler({key: "Author",value: e.target.value})}
                  onChange={(e) => changeHandler({key: "Author",value: e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="Blog Introduction"
                  variant="outlined"
                  name="intro"
                  multiline
                  rows={6}
                  label="Blog Introduction"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={(e) => changeHandler({key: "Intro",value: e.target.value})}
                  onChange={(e) => changeHandler({key: "Intro",value: e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="Blog Content"
                  variant="outlined"
                  name="content"
                  label="Blog Content"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  multiline
                  rows={8}
                  onBlur={(e) => changeHandler({key: "Content",value: e.target.value})}
                  onChange={(e) => changeHandler({key: "Content",value: e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="Blog Thumbnail Url"
                  variant="outlined"
                  name="content"
                  label="Blog Thumbnail Url"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  multiline
                  rows={8}
                  onBlur={(e) => changeHandler({key: "URL",value: e.target.value})}
                  onChange={(e) => changeHandler({key: "URL",value: e.target.value})}
                />
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
