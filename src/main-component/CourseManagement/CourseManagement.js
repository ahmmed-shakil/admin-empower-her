import React, { Fragment, useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import PageTitle from "../../components/pagetitle/PageTitle";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const CourseManagement = () => {
  const [courses, setCourses] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const result = await axios.get(`${base_url}/course`);
        setCourses(result?.data);
        console.log("🚀 ~ fetchCourses ~ result:", result);
      } catch (error) {
        toast.error("Failed to fetch courses");
      }
    };
    fetchCourses();
  }, [isDeleted]);

  return (
    <AdminLayout>
      <PageTitle PageTitle="Courses" pagesub="Courses" />
      <div className="cart-area section-padding">
        <div className=" mb-4 d-flex justify-content-end pe-4">
          <Link to={"/admin/add-course"}>
            <button className=" bg-warning text-white border-0 rounded-2 py-2 px-3">
              Add New
            </button>
          </Link>
        </div>
        <div className="container">
          <div className="form">
            <div className="cart-wrapper">
              <div className="row">
                <div className="col-12">
                  <form action="cart">
                    <table className="table-responsive cart-wrap">
                      <thead>
                        <tr>
                          <th className="images images-b">Image</th>
                          <th className="product-2">Course Name</th>
                          {/* <th className="pr">Total Videos</th> */}
                          <th className="remove remove-b">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {courses?.length ? (
                          courses?.map((course) => (
                            <tr key={course?._id}>
                              <td className="images">
                                <img src={course?.thumb} alt="" />
                              </td>
                              <td className="product">
                                <ul>
                                  <li
                                    style={{ fontSize: "1.2rem" }}
                                    className="first-cart"
                                  >
                                    {course?.title}
                                  </li>
                                  {/* <li>Brand : {catItem.brand}</li> */}
                                  {/* <li>Size : {catItem.size}</li> */}
                                </ul>
                              </td>

                              {/* <td className="stock">10</td> */}
                              <td className="action">
                                <ul>
                                  <Link
                                    className=" me-2"
                                    to={`/admin/update-course/134`}
                                  >
                                    <li
                                      className="w-btn"
                                      // onClick={() =>
                                      //   props.removeFromCart(catItem.id)
                                      // }
                                    >
                                      <i className="fi ti-link"></i>
                                    </li>
                                  </Link>
                                  <Link
                                    className=" me-2"
                                    to={`/admin/update-course/${course?._id}`}
                                  >
                                    <li
                                      className="w-btn"
                                      // onClick={() =>
                                      //   props.removeFromCart(catItem.id)
                                      // }
                                    >
                                      <i className="fi ti-pencil"></i>
                                    </li>
                                  </Link>
                                  <li
                                    className="w-btn"
                                    // onClick={() =>
                                    //   props.removeFromCart(catItem.id)
                                    // }
                                    onClick={async () => {
                                      try {
                                        const response = await axios.delete(
                                          `${base_url}/course/${course?._id}`
                                        );
                                        console.log(
                                          "🚀 ~ onClick={ ~ response:",
                                          response
                                        );
                                        if (response?.data?.success) {
                                          toast.success(
                                            "Course deleted successfully"
                                          );
                                          setIsDeleted(!isDeleted);
                                        }
                                      } catch (error) {
                                        toast.error("Failed to delete course");
                                      }
                                    }}
                                  >
                                    <i className="fi ti-trash"></i>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>No course found</tr>
                        )}
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CourseManagement;
