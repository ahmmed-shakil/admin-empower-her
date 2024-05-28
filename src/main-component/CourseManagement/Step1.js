import { Grid, TextField } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";

const Step1 = ({ value, changeHandler, validator, setStep }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          className="inputOutline"
          fullWidth
          placeholder="Course Title"
          value={value.title}
          variant="outlined"
          name="title"
          label="Title"
          InputLabelProps={{
            shrink: true,
          }}
          onBlur={(e) => changeHandler(e)}
          onChange={(e) => changeHandler(e)}
        />
        {validator.message("title", value.title, "required|alpha")}
      </Grid>
      <Grid item xs={12}>
        <TextField
          className="inputOutline"
          fullWidth
          placeholder="Course Description"
          value={value.desc}
          variant="outlined"
          name="desc"
          label="Description"
          InputLabelProps={{
            shrink: true,
          }}
          onBlur={(e) => changeHandler(e)}
          onChange={(e) => changeHandler(e)}
        />
        {validator.message("Description", value.desc, "required|alpha")}
      </Grid>
      <Grid item xs={12}>
        <TextField
          className="inputOutline"
          fullWidth
          placeholder="Course Thumbnail Url"
          value={value.thumb}
          variant="outlined"
          name="thumb"
          label="Thumbnail Url"
          InputLabelProps={{
            shrink: true,
          }}
          onBlur={(e) => changeHandler(e)}
          onChange={(e) => changeHandler(e)}
        />
        {validator.message("Description", value.thumb, "required")}
      </Grid>
      {/* <Grid item xs={12}>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group form-group-in">
        <label htmlFor="file" className=" d-block mb-2">
          Upload Course Thumbnail Image
        </label>
        <input
          value={value.file}
          type="file"
          name="thumb"
          id="file"
          onBlur={(e) => changeHandler(e)}
          onChange={(e) => changeHandler(e)}
          placeholder="Course Thumbnail"
        />
        {validator.message("Course Thumbnail", value.thumb, "required|file")}
        <i className="ti-cloud-up"></i>
        </div>
      </Grid> */}

      <Grid item xs={12}>
        <Grid className="formFooter">
          <button
            fullWidth
            className=" border-0 w-100 cBtn cBtnLarge cBtnTheme"
            type="button"
            onClick={() => {
              if (!value.title) {
                toast.error("Course title is missing");
                return;
              }
              if (!value.desc) {
                toast.error("Course description is missing");
                return;
              }
              if (!value.thumb) {
                toast.error("Course thumbnail is missing");
                return;
              }
              setStep(2);
            }}
          >
            Next
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Step1;
