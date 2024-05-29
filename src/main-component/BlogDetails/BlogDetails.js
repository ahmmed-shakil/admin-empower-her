import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { useParams } from "react-router-dom";
import blogs from "../../api/blogs";
import BlogSingle from "../../components/BlogDetails/BlogSingle.js";
import Footer from "../../components/footer/Footer";
import { toast } from "react-toastify";
import axios from "axios";
import { base_url } from "../../utils/baseUrl.js";

const BlogDetails = () => {
  const { slug } = useParams();

  const [blogDetails, setBlogDetails] = useState({});

  // const BlogDetails = blogs.find(item => item.slug === slug)
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const result = await axios.get(`${base_url}/blog/${slug}`);
        console.log("🚀 ~ fetchBlog ~ result:", result);
        setBlogDetails(result?.data?.data);
      } catch (error) {
        toast.error("Blog not found");
      }
    };
    fetchBlog();
  }, [slug]);

  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={blogDetails?.title} pagesub={"Blog"} />
      <BlogSingle blog={blogDetails} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default BlogDetails;
