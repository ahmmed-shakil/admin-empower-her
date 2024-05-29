import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import PageTitle from "../../components/pagetitle/PageTitle";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const result = await axios.get(`${base_url}/blog`);
        setBlogs(result?.data?.data);
        console.log("🚀 ~ fetchBlogs ~ result:", result);
      } catch (error) {
        toast.error("Failed to fetch blogs");
      }
    };
    fetchBlogs();
  }, [isDeleted]);
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
                        {blogs?.length ? (
                          blogs?.map((blog) => (
                            <tr key={blog?._id}>
                              <td className="images">
                                <img src={blog?.thumb} alt={blog?.title} />
                              </td>
                              <td className="product">
                                <ul>
                                  <li className="first-cart">{blog?.title}</li>
                                  {/* <li>Brand : {catItem.brand}</li> */}
                                  {/* <li>Size : {catItem.size}</li> */}
                                </ul>
                              </td>

                              <td className="stock">
                                {new Date(blog?.createdAt).getDate()}/{" "}
                                {new Date(blog?.createdAt).getMonth() + 1}/{" "}
                                {new Date(blog?.createdAt).getFullYear()}
                              </td>
                              <td className="action">
                                <ul>
                                  <Link
                                    to={`/blog-single/${blog?._id}`}
                                    className=" me-2"
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
                                  <li
                                    className="w-btn"
                                    // onClick={() =>
                                    //   props.removeFromCart(catItem.id)
                                    // }
                                    onClick={async () => {
                                      try {
                                        const response = await axios.delete(
                                          `${base_url}/blog/${blog?._id}`
                                        );
                                        console.log(
                                          "🚀 ~ onClick={ ~ response:",
                                          response
                                        );
                                        if (response?.data?.success) {
                                          toast.success(
                                            "Blog deleted successfully"
                                          );
                                          setIsDeleted(!isDeleted);
                                        }
                                      } catch (error) {
                                        toast.error("Failed to delete blog");
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
                          <tr>No blog found</tr>
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

export default BlogManagement;
