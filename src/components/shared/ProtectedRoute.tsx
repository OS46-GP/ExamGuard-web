import { Navigate, Outlet } from "react-router";

import { PATHS } from "@/router/paths";
import type { Role } from "@/types/common.types";

interface Props {
  allowedRoles?: Role[];
}

const ProtectedRoute = ({ allowedRoles }: Props) => {
  const { isAuthenticated, user } = {
    isAuthenticated: true,
    user: {
      role: "admin",
    },
  };

  if (!isAuthenticated) {
    return <Navigate to={PATHS.LOGIN} replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role as Role)) {
    return <Navigate to={PATHS.DASHBOARD} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
