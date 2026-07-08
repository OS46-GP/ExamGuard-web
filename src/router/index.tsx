import { BrowserRouter, Route, Routes } from "react-router";

import { PATHS } from "./paths";

import AuthLayout from "@/layouts/AuthLayout";
import ExamLayout from "@/layouts/ExamLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

import GuestRoute from "@/components/shared/GuestRoute";
import ProtectedRoute from "@/components/shared/ProtectedRoute";

import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

import Dashboard from "@/pages/dashboard/Dashboard";

import NotFound from "@/pages/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestRoute />}>
          <Route element={<AuthLayout />}>
            <Route path={PATHS.LOGIN} element={<Login />} />
            <Route path={PATHS.REGISTER} element={<Register />} />
          </Route>
        </Route>

        {/* ── Protected: All Roles ──────────────────── */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path={PATHS.DASHBOARD} element={<Dashboard />} />
            <Route path={PATHS.EXAMS} element={<div>Exams</div>} />
            <Route path={PATHS.RESULTS} element={<div>Results</div>} />
          </Route>
        </Route>

        {/* ── Protected: Teacher & Admin Only ───────── */}
        <Route element={<ProtectedRoute allowedRoles={["teacher", "admin"]} />}>
          <Route element={<DashboardLayout />}>
            <Route path={PATHS.EXAM_CREATE} element={<div>Create Exam</div>} />
          </Route>
        </Route>

        {/* ── Protected: Exam Session ───────────────── */}
        <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
          <Route element={<ExamLayout />}>
            <Route path="/exams/:examId/take" element={<div>Take Exam</div>} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
