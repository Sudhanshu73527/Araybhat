import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/Applayout";
import App from "../App";

import AboutSchool from "../pages/about/AboutSchool";
import ChairmanMessage from "../pages/about/ChairmanMessage";
import Visionmission from "../pages/about/Visionmission";
import OurInfrastructure from "../pages/about/OurInfrastructure";
import Gallary from "../pages/gallary/Gallary";
import Rte from "../pages/about/Rte";
import Admissionprocess from "../pages/admission/Admissionprocess";
import Onlineregistrartion from "../pages/admission/Onlineregistrartion";
import Teacherdetails from "../pages/about/Teacherdetails";
import Admissionnotification from "../pages/admission/Admissionnotification";
import Feestructure from "../pages/mandatory/Feestructure";
import Studentdetails from "../pages/mandatory/Studentdetails";
import Prospectus from "../pages/Prospectus";
import Parentsenquiry from "../pages/admission/Parentsenquiry";
import Library from "../pages/Facilities/Library";
import Transport from "../pages/Facilities/Transport";
import Sports from "../pages/Facilities/Sports";
import Cbseinfo from "../pages/mandatory/Cbseinfo";
import Dance from "../pages/Extracuricullam/Dance";
import Music from "../pages/Extracuricullam/Music";
import Yoga from "../pages/Extracuricullam/Yoga";
import Academicssection from "../pages/Academicssection";
import Login from "../pages/Login";
import NoticeManager from "../admin/pages/NoticeManager";
// import Notices from "../admin/pages/Notices";
import Dashboard from "../admin/Dashboard";
import AdminNotices from "../pages/AdminNotices";
import AdminGallery from "../pages/AdminGallery";
import AdminEvents from "../admin/AdminEvents";
import AdminUpcomingEvents from "../admin/AdminUpcomingEvents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <App /> },   // 👈 Home page
      { path: "about-school", element: <AboutSchool /> },
      { path: "chairman-message", element: <ChairmanMessage /> },
      {path: "/visionmission", element: <Visionmission/>},
      {path: "/Infrastructure", element: <OurInfrastructure/>},
      {path: "/gallery", element: <Gallary/>},
      {path: "/rte", element: <Rte/>},
      {path: "/admission-process", element: <Admissionprocess/>},
      {path: "/online-registration", element: <Onlineregistrartion/>},
      {path: "/teacher", element: <Teacherdetails/>},
      {path: "/notification", element: <Admissionnotification/>},
      {path:"/mandatory/fee", element: <Feestructure/>},
      {path: "/mandatory/student", element: <Studentdetails/>},
      {path: "/academics/prospectus", element: <Prospectus/>},
      {path:"/enquiry-form", element: <Parentsenquiry/>},
      {path:"/facilities/library", element: <Library/>},
      {path: "/facilities/transport", element: <Transport/>},
      {path: "/facilities/sports", element: <Sports/>},
      {path: "/mandatory/cbse-info", element: <Cbseinfo/>},
      {path : "/extra-curriculum/dance", element: <Dance/>},
      {path: "/extra-curriculum/music", element: <Music/>},
      {path: "/extra-curriculum/yoga", element: <Yoga/>},
      {path: "/academics/section", element: <Academicssection/>},
      {path: "/login", element: <Login/>},
      {path: "/admin/notices", element: <NoticeManager/>},
      // {path: "/admin/notices", element: <Notices/>},
      {path: "/admin/dashboard", element: <Dashboard/>},
      {path: "/admin-notices", element: <AdminNotices/>},
      {path: "/admin-gallery", element: <AdminGallery/>},
      {path: "/admin-events", element: <AdminEvents/>},
      {path: "/admin-upcoming-events", element: <AdminUpcomingEvents/>}
    ],
  },
]);

export default router;
