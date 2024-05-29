import React from "react";
import { Link } from "react-router-dom";
import blog3 from "../../images/blog-details/comments-author/img-1.jpg";
import blog4 from "../../images/blog-details/comments-author/img-2.jpg";
import blog5 from "../../images/blog-details/comments-author/img-3.jpg";
import blog6 from "../../images/blog-details/author.jpg";
import gl1 from "../../images/blog-details/1.jpg";
import gl2 from "../../images/blog-details/2.jpg";
import blogs from "../../api/blogs";
import { useParams } from "react-router-dom";
import BlogSidebar from "../BlogSidebar/BlogSidebar.js";

const BlogSingle = ({ blog }) => {
  const { slug } = useParams();

  const BlogDetails = blogs.find((item) => item.slug === slug);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="wpo-blog-single-section section-padding">
      <div className="container">
        <div className="row">
          <div className={`col col-lg-8 mx-auto col-12 ${blog?.blRight}`}>
            <div className="wpo-blog-content">
              <div className="post format-standard-image">
                <div className="entry-media">
                  <img src={blog?.thumb} alt={blog?.title} />
                </div>
                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="fi flaticon-user"></i> By{" "}
                      <Link to="/blog-single/Letraset-Sheets-Passage-And-Recently">
                        {blog?.author}
                      </Link>{" "}
                    </li>
                    {/* <li>
                      <i className="fi flaticon-comment-white-oval-bubble"></i>{" "}
                      Comments {blog?.comment}
                    </li> */}
                    <li>
                      <i className="fi flaticon-calendar"></i>{" "}
                      {new Date(blog?.createdAt).getDate()}-
                      {new Date(blog?.createdAt).getMonth() + 1}-
                      {new Date(blog?.createdAt).getFullYear()}
                    </li>
                  </ul>
                </div>
                <h2>{blog?.title}</h2>
                <p>{blog?.intro}</p>
                {/* <blockquote>
                  Combined with a handful of model sentence structures, generate
                  Lorem Ipsum which looks reasonable. The generated Lorem Ipsum
                  is therefore always free from repetition, injected humour, or
                  non-characteristic words etc.
                </blockquote> */}
                <p>{blog?.desc}</p>

                {/* <div className="gallery">
                                    <div>
                                        <img src={gl1} alt="" />
                                    </div>
                                    <div>
                                        <img src={gl2} alt="" />
                                    </div>
                                </div> */}
              </div>

              {/* <div className="tag-share clearfix">
                <div className="tag">
                  <span>Share: </span>
                  <ul>
                    <li>
                      <Link to="/blog-single/Letraset-Sheets-Passage-And-Recently">
                        Education
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single/Letraset-Sheets-Passage-And-Recently">
                        Web Design
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single/Letraset-Sheets-Passage-And-Recently">
                        Course
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className="tag-share-s2 clearfix">
                <div className="tag">
                  <span>Share: </span>
                  <ul>
                    <li>
                      <Link to="/blog-single/Letraset-Sheets-Passage-And-Recently">
                        facebook
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single/Letraset-Sheets-Passage-And-Recently">
                        twitter
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single/Letraset-Sheets-Passage-And-Recently">
                        linkedin
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single/Letraset-Sheets-Passage-And-Recently">
                        pinterest
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="author-box">
                {/* <div className="author-avatar">
                  <Link
                    to="/blog-single/Letraset-Sheets-Passage-And-Recently"
                    target="_blank"
                  >
                    <img src={blog6} alt="" />
                  </Link>
                </div> */}
                <div className="author-content">
                  {/* <Link
                    to="/blog-single/Letraset-Sheets-Passage-And-Recently"
                    className="author-name"
                  > */}
                  Author: {blog?.author}
                  {/* </Link> */}
                  {/* <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis.
                  </p> */}
                  {/* <div className="socials">
                    <ul className="social-link">
                      <li>
                        <Link to="/blog-single/Letraset-Sheets-Passage-And-Recently">
                          <i className="ti-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-single/Letraset-Sheets-Passage-And-Recently">
                          <i className="ti-twitter-alt"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-single/Letraset-Sheets-Passage-And-Recently">
                          <i className="ti-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-single/Letraset-Sheets-Passage-And-Recently">
                          <i className="ti-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>

              {/* <div className="more-posts">
                <div className="previous-post">
                  <Link to="/blog">
                    <span className="post-control-link">Previous Post</span>
                    <span className="post-name">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium.
                    </span>
                  </Link>
                </div>
                <div className="next-post">
                  <Link to="/blog-left-sidebar">
                    <span className="post-control-link">Next Post</span>
                    <span className="post-name">
                      Dignissimos ducimus qui blanditiis praesentiu deleniti
                      atque corrupti quos dolores
                    </span>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
          {/* <BlogSidebar blLeft={props.blLeft} /> */}
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
