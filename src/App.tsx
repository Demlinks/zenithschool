import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import LoginLayout from "./layouts/LoginLayout";


// STYLES/CSS
import "./style/profile.css";
import "./style/staff.css";
import "./style/student.css";
import "./style/results.css";
import "./style/calendar.css";
import "./style/tuition.css";
// STYLES/CSS ENDS

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import Loader from "./shared/Loader";

import ProfileLayout from "./layouts/role/ProfileLayout";
import StaffLayout from "./layouts/role/StaffLayout";
import TuitionLayout from "./layouts/role/TuitionLayout";
import ToastNotification from "./shared/ToastNotification";

const LandingPage = lazy(() => import("./pages/landing/LandingPage"));
const ForgotPassword = lazy(() => import("./pages/login/ForgotPassword"));
const Login = lazy(() => import("./pages/login/Login"));
const AdminLogin = lazy(() => import("./pages/login/AdminLogin"));
const StaffLogin = lazy(() => import("./pages/login/StaffLogin"));
const GuardianLogin = lazy(() => import("./pages/login/GuardianLogin"));
const Overview = lazy(() => import("./pages/dashboard/Overview"));
const Calendar = lazy(() => import("./pages/dashboard/Calendar"));
const Attendance = lazy(() => import("./pages/dashboard/Attendance"));
const Results = lazy(() => import("./pages/dashboard/Results"));
const Chat = lazy(() => import("./pages/dashboard/Chat"));
const Certificates = lazy(() => import("./pages/dashboard/Certificates"));
const ErrorPage = lazy(() => import("./shared/ErrorPage"));
const StudentAdminLayout = lazy(() => import("./layouts/StudentAdminLayout"));
const StudentAdminOverview = lazy(
  () => import("./pages/admin-dashboard/student/StudentAdminOverview")
);
const StudentAdminNames = lazy(
  () => import("./pages/admin-dashboard/student/StudentAdminNames")
);
const StudentAdminNamesOverviewMobile = lazy(
  () =>
    import("./pages/admin-dashboard/student/StudentAdminNamesOverviewMobile")
);
const StudentAdminDatabase = lazy(
  () => import("./pages/admin-dashboard/student/StudentAdminDatabase")
);
const TimetablesGuardian = lazy(
  () => import("./pages/guardian-dashboard/TimetableGuardian")
);
function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<RootLayout />}>
          <Route index element={<Login />} />
          <Route element={<LoginLayout />}>
            <Route path="admin" element={<AdminLogin />} />
            <Route path="staff" element={<StaffLogin />} />
            <Route path="guardian" element={<GuardianLogin />} />
          </Route>
        </Route>
        <Route path={`forgot-password/:id`} element={<ForgotPassword />} />
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          {/* ROLE INTERCHANGING FOR STUDENT*/}
          <Route path="student" element={<StudentAdminLayout />}>
            <Route index element={<StudentAdminOverview />} />
            <Route path=":id" element={<StudentAdminNames />}>
              <Route index element={<StudentAdminNamesOverviewMobile />} />
              <Route path=":id" element={<StudentAdminDatabase />} />
            </Route>
          </Route>
          {/* ENDS */}

          {/* ROLE INTERCHANGING FOR PROFILE*/}
          <Route path="profile" element={<ProfileLayout />} />
          {/* ENDS */}

          {/* ROLE INTERCHANGING FOR STAFF*/}
          <Route path="staff" element={<StaffLayout />} />

          {/* ENDS */}
          <Route path="calendar" element={<Calendar />} />
          {/* ROLE INTERCHANGING FOR TUITION*/}
          <Route path="tuition" element={<TuitionLayout />} />
          {/* ENDS */}
          <Route path="timetable" element={<TimetablesGuardian />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="results" element={<Results />} />
          <Route path="chat" element={<Chat />} />
          <Route path="certificates" element={<Certificates />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return (
    <div className="min-h-screen">
      <ToastNotification />
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </div>
  );
}

export default App;
