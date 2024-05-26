import React from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import PageTitle from "../../components/pagetitle/PageTitle";
import { Link } from "react-router-dom";

const BlogManagement = () => {
  return (
    <AdminLayout>
      <PageTitle PageTitle="Blogs" pagesub="Blogs" />
      <div className="cart-area section-padding">
        <div className=" mb-4 d-flex justify-content-end pe-4">
          <Link to={"/admin/add-blog"}>
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
                          <th className="product-2">Blog Title</th>
                          <th className="pr">Date</th>
                          <th className="remove remove-b">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="images">
                            {/* <img src={catItem.proImg} alt="" /> */}
                          </td>
                          <td className="product">
                            <ul>
                              <li className="first-cart">
                                Basic English For Beginners
                              </li>
                              {/* <li>Brand : {catItem.brand}</li> */}
                              {/* <li>Size : {catItem.size}</li> */}
                            </ul>
                          </td>

                          <td className="stock">10/10/2024</td>
                          <td className="action">
                            <ul>
                              <Link to={`/`} className=" me-2">
                                <li
                                  className="w-btn"
                                  // onClick={() =>
                                  //   props.removeFromCart(catItem.id)
                                  // }
                                >
                                  <i className="fi ti-link"></i>
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

export default BlogManagement;
