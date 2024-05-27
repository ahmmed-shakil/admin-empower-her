import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import SimpleReactValidator from "simple-react-validator";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Grid, TextField } from "@mui/material";
import Step1 from "./Step1";
import Step2 from "./Step2";

const AddNewCourse = () => {
  const push = useNavigate();

  const [step, setStep] = useState(1);

  const [value, setValue] = useState({
    title: "",
    thumb: "",
    desc: "",
    modules: [],
  });

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
                value={value}
                validator={validator}
                changeHandler={changeModuleHandler}
                setStep={setStep}
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
