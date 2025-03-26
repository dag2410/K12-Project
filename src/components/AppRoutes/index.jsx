import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import DefaultLayout from "@/layouts/DefaultLayout";
import NoLayout from "@/layouts/NoLayout";
import ProtectedRoute from "@/components/ProtectedRoute";
import routes from "@/routes";

function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => {
        const Layout = route.layout === undefined ? DefaultLayout : route.layout || NoLayout;
        const Component = route.component;
        const RouteElement = route.protected ? ProtectedRoute : Fragment;

        return (
          <Route key={route.path} element={<Layout />}>
            <Route
              path={route.path}
              element={
                <RouteElement>
                  <Component />
                </RouteElement>
              }
            />
          </Route>
        );
      })}
    </Routes>
  );
}

export default AppRoutes;
