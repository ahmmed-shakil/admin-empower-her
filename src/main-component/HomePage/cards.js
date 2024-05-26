import list from "../../images/list.png";
import dashboard from "../../images/dashboard.png";
import users from "../../images/users.png";
import user from "../../images/user.png";
import reset from "../../images/reset.png";

export const cards = [
  {
    id: 2,
    title: "Courses",
    path: "/admin/course",
    icon: list,
  },
  {
    id: 3,
    title: "Students",
    path: "/admin/student",
    icon: users,
  },

  {
    id: 4,
    title: "Blogs",
    path: "/admin/blog",
    icon: list,
  },
  {
    id: 5,
    title: "Admins",
    path: "/admin/admins",
    icon: users,
  },
  {
    id: 6,
    title: "Personal Information",
    path: "/admin/profile",
    icon: user,
  },
  {
    id: 1,
    title: "Reset Password",
    path: "/admin/reset-password",
    icon: reset,
  },
];
