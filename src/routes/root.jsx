import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Input from "../components/Input";
import { useEffect } from "react";

export default function Root() {
  const navigate = useNavigate();
  const redirectToCreate = () => {
    navigate(`Create`);
  };
  const location = useLocation();

  return (
    <div id="main-container">
      <div id="top-container">
        <div>
          <Input id="search-bar" placeholder="Search Task Name" />
          <i
            id="icon-add"
            onClick={redirectToCreate}
            className="fa-solid fa-circle-plus fa-xl"
          ></i>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
