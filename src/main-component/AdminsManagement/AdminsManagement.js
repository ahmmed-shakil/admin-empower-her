import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import PageTitle from "../../components/pagetitle/PageTitle";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const AdminsManagement = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const result = await axios.get(`${base_url}/admin`);
        setAdmins(result.data);
      } catch (error) {
        toast.error("Failed to fetch admins");
      }
    };
    fetchAdmins();
  }, [isDeleted]);
  return (
    <AdminLayout>
      <PageTitle PageTitle="Admins" pagesub="Admins" />
      <div className="cart-area section-padding">
        <div className=" mb-4 d-flex justify-content-end pe-4">
          <Link to={"/admin/add-admin"}>
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
                          <th className="product-2">Name</th>
                          <th className="pr">Email</th>
                          <th className="pr">Contact</th>
                          <th className="remove remove-b">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {admins?.length ? (
                          admins?.map((admin) => (
                            <tr key={admin?._id}>
                              <td className="product">
                                <ul>
                                  <li className="first-cart">
                                    {admin?.fullName}
                                  </li>
                                  {/* <li>Brand : {catItem.brand}</li> */}
                                  {/* <li>Size : {catItem.size}</li> */}
                                </ul>
                              </td>

                              <td className="stock">{admin?.email}</td>
                              <td className="stock">{admin?.contact}</td>
                              <td className="action">
                                <ul>
                                  {/* <Link
                                    className="me-2"
                                    to={`/admin/update-admin/:2323`}
                                  >
                                    <li
                                      className="w-btn me-2"
                                      // onClick={() =>
                                      //   props.removeFromCart(catItem.id)
                                      // }
                                    >
                                      <i className="fi ti-link"></i>
                                    </li>
                                  </Link> */}
                                  <Link
                                    className="me-2"
                                    to={`/admin/update-admin/${admin?._id}`}
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
                                          `${base_url}/admin/${admin?._id}`
                                        );
                                        console.log(
                                          "🚀 ~ onClick={ ~ response:",
                                          response
                                        );
                                        if (response?.data?.success) {
                                          toast.success(
                                            "Admin deleted successfully"
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
                          <tr>No admin found</tr>
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

export default AdminsManagement;
