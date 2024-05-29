import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../HomePage/HomePage";
import CategorySinglePage from "../CategorySinglePage/CategorySinglePage";
import CoursePage from "../CoursePage/CoursePage";
import CoursePageS2 from "../CoursePageS2/CoursePageS2";
import CoursePageS3 from "../CoursePageS3/CoursePageS3";
import CourseSinglePage from "../CourseSinglePage/CourseSinglePage";
import HomePage2 from "../HomePage2/HomePage2";
import HomePage3 from "../HomePage3/HomePage3";
import HomePage4 from "../HomePage4/HomePage4";
import HomePage5 from "../HomePage5/HomePage5";
import AboutPage from "../AboutPage/AboutPage";
import TestimonialPage from "../TestimonialPage/TestimonialPage";
import TeamPage from "../TeamPage/TeamPage";
import TeamSinglePage from "../TeamSinglePage/TeamSinglePage";
import EventSinglePage from "../EventSinglePage/EventSinglePage";
import GalleryPage from "../GalleryPage/GalleryPage";
import ShopPage from "../ShopPage";
import ProductSinglePage from "../ProductSinglePage";
import CartPage from "../CartPage";
import CheckoutPage from "../CheckoutPage";
import OrderRecived from "../OrderRecived";
import BlogPage from "../BlogPage/BlogPage";
import BlogPageLeft from "../BlogPageLeft/BlogPageLeft";
import BlogPageFullwidth from "../BlogPageFullwidth/BlogPageFullwidth";
import BlogDetails from "../BlogDetails/BlogDetails";
import BlogDetailsFull from "../BlogDetailsFull/BlogDetailsFull";
import BlogDetailsLeftSiide from "../BlogDetailsLeftSiide/BlogDetailsLeftSiide";
import ContactPage from "../ContactPage/ContactPage";
import FaqPage from "../FaqPage";
import BeComeTeacherPage from "../BeComeTeacherPage/BeComeTeacherPage";
import LessonPage from "../LessonPage/LessonPage";
import PrivacyPage from "../PrivacyPage/PrivacyPage";
import TermsPage from "../TermsPage/TermsPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import ForgotPassword from "../ForgotPassword";
import CourseManagement from "../CourseManagement/CourseManagement";
import StudentManagement from "../StudentManagement/StudentManagement";
import BlogManagement from "../BlogManagement/BlogManagement";
import AdminsManagement from "../AdminsManagement/AdminsManagement";
import { AdminProfile } from "../AdminProfile/AdminProfile";
import ResetPassword from "../ResetPassword/ResetPassword";
import AddNewCourse from "../CourseManagement/AddNewCourse";
import UpdateCourse from "../CourseManagement/UpdateCourse";
import AddNewStudent from "../StudentManagement/AddNewStudent";
import UpdateStudent from "../StudentManagement/UpdateStudent";
import AddNewBlog from "../BlogManagement/AddNewBlog";
import AddNewAdmin from "../AdminsManagement/AddNewAdmin";
import UpdateAdmin from "../AdminsManagement/UpdateAdmin";
import MyProfile from "../LoginPage/Myprofile";

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Homepage />} />
          <Route path="home" element={<LoginPage />} />
          <Route path="home-2" element={<HomePage2 />} />
          <Route path="home-3" element={<HomePage3 />} />
          <Route path="home-4" element={<HomePage4 />} />
          <Route path="home-5" element={<HomePage5 />} />
          <Route path="about" element={<AboutPage />} />
          <Route
            path="category-single/:slug"
            element={<CategorySinglePage />}
          />
          <Route path="course-single/:slug" element={<CourseSinglePage />} />
          <Route path="course" element={<CoursePage />} />
          <Route path="course-2" element={<CoursePageS2 />} />
          <Route path="course-3" element={<CoursePageS3 />} />
          <Route path="lesson" element={<LessonPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="testimonial" element={<TestimonialPage />} />
          <Route path="teacher" element={<TeamPage />} />
          <Route path="team-single/:slug" element={<TeamSinglePage />} />
          <Route path="event-single/:slug" element={<EventSinglePage />} />
          <Route path="become-teacher" element={<BeComeTeacherPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="product-single/:slug" element={<ProductSinglePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="order_received" element={<OrderRecived />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog-left-sidebar" element={<BlogPageLeft />} />
          <Route path="blog-fullwidth" element={<BlogPageFullwidth />} />
          <Route path="blog-single/:slug" element={<BlogDetails />} />
          <Route
            path="blog-single-left-sidebar/:slug"
            element={<BlogDetailsLeftSiide />}
          />
          <Route
            path="blog-single-fullwidth/:slug"
            element={<BlogDetailsFull />}
          />
          <Route path="404" element={<ErrorPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<SignUpPage />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="admin/course" element={<CourseManagement />} />
          <Route path="admin/student" element={<StudentManagement />} />
          <Route path="admin/blog" element={<BlogManagement />} />
          <Route path="admin/admins" element={<AdminsManagement />} />
          <Route path="admin/profile" element={<AdminProfile />} />
          <Route path="admin/reset-password" element={<ResetPassword />} />
          <Route path="admin/add-course" element={<AddNewCourse />} />
          <Route path="admin/add-student" element={<AddNewStudent />} />
          <Route path="admin/add-blog" element={<AddNewBlog />} />
          <Route path="admin/add-admin" element={<AddNewAdmin />} />
          <Route
            path="admin/update-course/:courseId"
            element={<UpdateCourse />}
          />
          <Route
            path="admin/update-student/:studentId"
            element={<UpdateStudent />}
          />
          <Route path="admin/update-admin/:adminId" element={<UpdateAdmin />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
