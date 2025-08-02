import { jwtDecode } from "jwt-decode";

export const isAdmin = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    return decoded.role === "admin"; // Hoặc decoded.isAdmin === true
  } catch (err) {
    return false;
  }
};
