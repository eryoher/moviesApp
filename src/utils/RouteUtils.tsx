import { Route } from "react-router-dom";

export const RouteWithSubRoutes = ({
  component: Component,
  routes,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={(props: any) => <Component {...props} routes={routes} />}
    />
  );
};
