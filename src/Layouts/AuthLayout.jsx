import { Outlet } from "react-router-dom";
const AuthLayout = ({ children }) => {
  return (
    <main>
      <Outlet />
    </main>
  );
};
export default AuthLayout;
