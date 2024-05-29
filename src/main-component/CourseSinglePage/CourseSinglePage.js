import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { useParams } from "react-router-dom";
import Courses from "../../api/Courses";
import Footer from "../../components/footer/Footer";
import CoureseTab from "./Tabs/CoureseTab";
import Sidebar from "./sidebar";
import axios from "axios";
import { toast } from "react-toastify";
import { base_url } from "../../utils/baseUrl";

const CourseSinglePage = (props) => {
  const { slug } = useParams();
  const [courseDetails, setCourseDetails] = useState({});
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const fetchSingleCourse = async () => {
      try {
        const result = await axios.get(`${base_url}/course/${slug}`);
        console.log("🚀 ~ fetchSingleCourse ~ result:", result);
        setCourseDetails(result?.data?.course);
        setModules(result?.data?.modules);
      } catch (error) {
        console.log("🚀 ~ fetchSingleCourse ~ error:", error);
        toast.error("Failed to fetch course");
      }
    };
    fetchSingleCourse();
  }, [slug]);
  //   const CoursesDetails = Courses.find((item) => item.slug === slug);

  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={courseDetails?.title} pagesub={"Course"} />
      <div className="wpo-course-details-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-lg-8">
              <div className="wpo-course-details-wrap">
                <div className="wpo-course-details-img">
                  <img src={courseDetails?.thumb} alt={courseDetails?.title} />
                </div>
                <CoureseTab CoursesDetails={courseDetails} modules={modules} />
              </div>
            </div>
            <Sidebar course={courseDetails} />
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default CourseSinglePage;
