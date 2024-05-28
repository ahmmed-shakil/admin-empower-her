import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import SimpleReactValidator from "simple-react-validator";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Grid, TextField } from "@mui/material";
import Step1 from "./Step1";
import Step2 from "./Step2";
import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const AddNewCourse = () => {
  const push = useNavigate();

  const [step, setStep] = useState(1);

  const [value, setValue] = useState({
    title: "",
    thumb: "",
    desc: "",
  });

  const [moduleValue, setModuleValue] = useState([]);
  console.log("🚀 ~ AddNewCourse ~ moduleValue:", moduleValue);

  console.log("Value", value);

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const changeModuleHandler = (event, moduleIndex, field) => {
    const newModules = [...value.modules];
    newModules[moduleIndex][field] = event.target.value;
    setValue({ ...value, modules: newModules });
  };

  const [validator] = React.useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const courseData = value;
      console.log("🚀 ~ submitForm ~ value:", value);
      const moduels = moduleValue?.modules;
      console.log("🚀 ~ submitForm ~ moduleValue:", moduleValue?.modules);
      if (!moduels?.length) {
        toast.error("No modules added");
        return;
      }

      const result = await axios.post(`${base_url}/course/create-course`, {
        courseData,
        modules: moduels,
      });
      if (result?.data?.success) {
        toast.success("Course created successfully");
        push("/admin/course");
      }

      if (validator.allValid()) {
        setValue({
          title: "",
          thumb: "",
          desc: "",
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
        <Grid style={{ width: "75%" }} className="mx-auto">
          <h2 className=" mb-4 text-center pb-4">
            Add {step === 1 ? "New Course" : "Modules"}
          </h2>
          {/* <p>Signup your account</p> */}
          <form onSubmit={submitForm}>
            {step === 1 && (
              <Step1
                value={value}
                changeHandler={changeHandler}
                validator={validator}
                setStep={setStep}
              />
            )}
            {step === 2 && (
              <Step2
                value={moduleValue}
                validator={validator}
                changeHandler={changeModuleHandler}
                setStep={setStep}
                setValue={setModuleValue}
              />
            )}
          </form>
          <div className="shape-img">
            <i className="fi flaticon-honeycomb"></i>
          </div>
        </Grid>
      </Grid>
    </AdminLayout>
  );
};

export default AddNewCourse;
