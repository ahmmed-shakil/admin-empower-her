import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/hero/hero";
import About from "../../components/about/about";
import CategorySection from "../../components/CategorySection/CategorySection";
import CourseSection from "../../components/CourseSection/CourseSection";
import Testimonial from "../../components/Testimonial/Testimonial";
import TeamSection from "../../components/TeamSection/TeamSection";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import BlogSection from "../../components/BlogSection/BlogSection";
import Newslatter from "../../components/Newslatter/Newslatter";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import HomeComponent from "./HomeComponent";
import HomeFeatures from "./HomeFeatures";

const HomePage = () => {
  return (
    <AdminLayout>
      <HomeFeatures />
      <HomeComponent />
    </AdminLayout>
  );
};
export default HomePage;
