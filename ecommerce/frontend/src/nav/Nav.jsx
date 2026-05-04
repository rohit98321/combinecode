import { NavLink } from "react-router-dom";

const Nav = () => {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold"
      : "text-gray-700";

  return (
    <nav className="flex justify-between items-center  p-4 shadow-md">
      <h1 className=" font-bold">
        <NavLink to={"/"} > Logo</NavLink>
      </h1>
      <div className="space-x-6">
        <NavLink to="/" className={linkStyle}>Home</NavLink>
        <NavLink to="/login" className={linkStyle}>Login</NavLink>
        <NavLink to="/register" className={linkStyle}>Register</NavLink>
      </div>
    </nav>
  );
};

export default Nav;