import React from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import PageTitle from "../../components/pagetitle/PageTitle";
import { Link } from "react-router-dom";

const StudentManagement = () => {
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
                        <tr>
                          <td className="images">
                            2024001
                            {/* <img src={catItem.proImg} alt="" /> */}
                          </td>
                          <td className="product">
                            <ul>
                              <li className="first-cart">John Doe</li>
                              {/* <li>Brand : {catItem.brand}</li> */}
                              {/* <li>Size : {catItem.size}</li> */}
                            </ul>
                          </td>

                          <td className="stock">johndoe@gmail.com</td>
                          <td className="stock">9102325252</td>
                          <td className="action">
                            <ul>
                              <Link
                                className=" me-2"
                                to={`/admin/update-student/12213`}
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
                              >
                                <i className="fi ti-trash"></i>
                              </li>
                            </ul>
                          </td>
                        </tr>
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
