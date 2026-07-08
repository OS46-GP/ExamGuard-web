import { Navigate, Outlet } from "react-router";

import { PATHS } from "@/router/paths";

const GuestRoute = () => {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Navigate to={PATHS.DASHBOARD} replace />;
  }

  return <Outlet />;
};

export default GuestRoute;
