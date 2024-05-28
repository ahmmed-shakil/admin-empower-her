import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import PageTitle from "../../components/pagetitle/PageTitle";
import { Link } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { toast } from "react-toastify";

const StudentManagement = () => {
  const [students, setStudents] = useState([]);

  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`${base_url}/student`);
        setStudents(response?.data);
        console.log("🚀 ~ fetchStudents ~ response:", response);
      } catch (error) {
        toast.error("Failed to fetch students");
      }
    };
    fetchStudents();
  }, [isDeleted]);
  return (
    <AdminLayout>
      <PageTitle PageTitle="Students" pagesub="Students" />
      <div className="cart-area section-padding">
        <div className=" mb-4 d-flex justify-content-end pe-4">
          <Link to={"/admin/add-student"}>
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
                          <th className="images images-b">ID</th>
                          <th className="product-2">Name</th>
                          <th className="pr">Email</th>
                          <th className="pr">Contact</th>
                          <th className="remove remove-b">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {students?.length ? (
                          students?.map((student) => (
                            <tr key={student._id}>
                              <td>
                                {student?.id}
                                {/* <img src={catItem.proImg} alt="" /> */}
                              </td>
                              <td>
                                <ul>
                                  <li className="first-cart">
                                    {student?.fullName}
                                  </li>
                                  {/* <li>Brand : {catItem.brand}</li> */}
                                  {/* <li>Size : {catItem.size}</li> */}
                                </ul>
                              </td>

                              <td>{student?.email}</td>
                              <td>{student?.contact}</td>
                              <td className="action">
                                <ul>
                                  <Link
                                    className=" me-2"
                                    to={`/admin/update-student/${student?._id}`}
                                  >
                                    <li
                                      className="w-btn me-2"
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
                                          `${base_url}/student/${student?._id}`
                                        );
                                        console.log(
                                          "🚀 ~ onClick={ ~ response:",
                                          response
                                        );
                                        if (response?.data?.success) {
                                          toast.success(
                                            "Student deleted successfully"
                                          );
                                          setIsDeleted(!isDeleted);
                                        }
                                      } catch (error) {
                                        toast.error("Failed to delete student");
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
                          <tr>
                            <td>No student found</td>
                          </tr>
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

export default StudentManagement;
