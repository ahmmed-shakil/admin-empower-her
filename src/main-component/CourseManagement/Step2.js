import { Grid, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const Step2 = ({ value, changeHandler, validator, setStep, setValue }) => {
  const [modules, setModules] = useState(value.modules ? value.modules : []);

  const handleAddModule = () => {
    setModules([...modules, { title: "", lessons: [] }]);
  };

  useEffect(() => {
    setValue({ ...value, modules });
  }, [modules?.length]);

  const handleModuleChange = (event, moduleIndex, field) => {
    const newModules = [...modules];
    newModules[moduleIndex][field] = event.target.value;
    setModules(newModules);
  };

  const handleRemoveModule = (index) => {
    const newModules = [...modules];
    newModules.splice(index, 1);
    setModules(newModules);
  };

  const handleLessonChange = (event, moduleIndex, lessonIndex) => {
    const newModules = [...modules];
    newModules[moduleIndex].lessons[lessonIndex] = {
      ...newModules[moduleIndex].lessons[lessonIndex],
      [event.target.name]: event.target.value,
    };
    setModules(newModules);
  };

  const handleAddLesson = (moduleIndex) => {
    const newModules = [...modules];
    newModules[moduleIndex].lessons.push({ lessonTitle: "", lessonUrl: "" });
    setModules(newModules);
  };

  const handleRemoveLesson = (moduleIndex, lessonIndex) => {
    const newModules = [...modules];
    newModules[moduleIndex].lessons.splice(lessonIndex, 1);
    setModules(newModules);
  };

  return (
    <Grid container spacing={3} style={{ justifyContent: "center" }}>
      <Grid item xs={12} mb={4}>
        <h4 className=" mb-4">Course Modules</h4>
        {modules.length === 0 && (
          <p>Click "Add Module" to create a new module.</p>
        )}
        {modules.map((module, moduleIndex) => (
          <Grid container key={moduleIndex} spacing={2} mb={2}>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Module Title"
                value={module.title}
                variant="outlined"
                name="title"
                label="Module Title"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => handleModuleChange(e, moduleIndex, "title")}
              />
            </Grid>
            <Grid item xs={12}>
              <h4 className=" mb-4">Lessons</h4>
              {module.lessons.length === 0 && (
                <p>Click "Add Lesson" to create lessons for this module.</p>
              )}
              {module.lessons.map((lesson, lessonIndex) => (
                <Grid container key={lessonIndex} spacing={2} mb={1}>
                  <Grid item xs={12}>
                    <TextField
                      className="inputOutline"
                      fullWidth
                      placeholder="Lesson Title"
                      value={lesson.title}
                      variant="outlined"
                      name="title"
                      label="Lesson Title"
                      InputLabelProps={{ shrink: true }}
                      onBlur={(e) =>
                        handleLessonChange(e, moduleIndex, lessonIndex)
                      }
                      onChange={(e) =>
                        handleLessonChange(e, moduleIndex, lessonIndex)
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className="inputOutline"
                      fullWidth
                      placeholder="Lesson URL"
                      value={lesson.url}
                      variant="outlined"
                      name="url"
                      label="Lesson URL"
                      InputLabelProps={{ shrink: true }}
                      onBlur={(e) =>
                        handleLessonChange(e, moduleIndex, lessonIndex)
                      }
                      onChange={(e) =>
                        handleLessonChange(e, moduleIndex, lessonIndex)
                      }
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ display: "flex", justifyContent: "end" }}
                  >
                    <button
                      className=" btn btn-danger px-4 py-2"
                      onClick={() =>
                        handleRemoveLesson(moduleIndex, lessonIndex)
                      }
                    >
                      Remove
                    </button>
                  </Grid>
                </Grid>
              ))}
              <Button
                variant="outlined"
                size="small"
                onClick={() => handleAddLesson(moduleIndex)}
              >
                + Add Lesson
              </Button>
            </Grid>
            {module.moduleTitle && module.lessons.length > 0 && (
              <Grid
                item
                xs={12}
                className=" mb-4"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  variant="contained"
                  style={{ background: "red" }}
                  onClick={() => handleRemoveModule(moduleIndex)}
                >
                  Remove Module
                </Button>
              </Grid>
            )}
            <hr />
          </Grid>
        ))}
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {!modules?.length || modules[modules?.length - 1]?.lessons?.length ? (
            <Button variant="contained" onClick={handleAddModule}>
              Add {modules?.length ? "Another Module" : "Module"}
            </Button>
          ) : null}
        </Grid>
      </Grid>
      {modules?.length && modules[modules?.length - 1]?.lessons?.length ? (
        <Grid item xs={12} md={6}>
          <Grid className="formFooter">
            <button
              className=" border-0 w-100 cBtn cBtnLarge  btn-secondary"
              type="button"
              onClick={() => {
                setStep(1);
              }}
            >
              Previous
            </button>
          </Grid>
        </Grid>
      ) : null}
      {modules?.length && modules[modules?.length - 1]?.lessons?.length ? (
        <Grid item xs={12} md={6}>
          <Grid className="formFooter">
            <button
              className=" border-0 w-100 cBtn cBtnLarge bg-primary"
              type="submit"
              onClick={() => {
                setStep(2);
              }}
            >
              Submit
            </button>
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default Step2;
