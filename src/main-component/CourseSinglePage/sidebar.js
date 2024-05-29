import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import blogs from "../../api/blogs";
import { toast } from "react-toastify";
import { useUser } from "../../context/userContext";
import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const Sidebar = ({ course }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  const push = useNavigate();
  const { userId } = useUser();
  const [enrolled, setEnrolled] = useState(false);
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const result = await axios.get(
          `${base_url}/enroll/status/${userId}/${course?._id}`
        );
        setEnrolled(result?.data);
      } catch (error) {
        toast.error("Failed to fetch enroll status");
      }
    };
    fetchStatus();
  }, [userId, course?._id]);
  return (
    <div className="col col-lg-4 col-12 course-sitebar">
      <div className="blog-sidebar">
        <div className="widget features-widget">
          <h4>{course?.title}</h4>
          <div className="features-top">
            <h4>Free</h4>
            {/* <span> 5 days left!</span> */}
          </div>
          {enrolled ? (
            <h4 className=" theme-btn">Enrolled</h4>
          ) : (
            <div
              className="cart-btn theme-btn-s3"
              style={{ cursor: "pointer" }}
              onClick={async () => {
                try {
                  const data = {
                    studentId: userId,
                    courseId: course?._id,
                  };
                  const result = await axios.post(`${base_url}/enroll`, data);
                  if (result?.data?.success) {
                    toast.success("Course enrolled successfully");
                    push("/my-courses");
                  }
                } catch (error) {
                  toast.error("Failed to enroll");
                }
              }}
            >
              {/* <Link onClick={ClickHandler} to="/cart" className="theme-btn-s3"> */}
              Enroll Now
              {/* </Link> */}
            </div>
          )}
          <ul>
            {/* <li>
              Duration: <span>20 Hours</span>
            </li> */}
            {/* <li>
              Lessons: <span>24</span>
            </li> */}
            {/* <li>
              Videos <span>10 Hours</span>
            </li> */}
            {/* <li>
              Students: <span>Max 100</span>
            </li> */}
            <li>
              Language: <span>English</span>
            </li>
            <li>
              Skill Level <span>Advanced</span>
            </li>
          </ul>
        </div>
        {/* <div className="widget recent-post-widget">
          <h3>Latest Course</h3>
          <div className="posts">
            {blogs.map((blog, bl) => (
              <div className="post" key={bl}>
                <div className="img-holder">
                  <img src={blog.screens} alt="" />
                </div>
                <div className="details">
                  <h4>
                    <Link
                      onClick={ClickHandler}
                      to={`/blog-single/${blog.slug}`}
                    >
                      {blog.title}
                    </Link>
                  </h4>
                  <span className="date">{blog.create_at}</span>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
