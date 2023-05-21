import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Input from "../components/Input";
import { useEffect, useState, createContext } from "react";
import Button from "../components/Button";

export const TaskContext = createContext(null);
export default function Root() {
  const [tasks, setTask] = useState([]);
  const [isCreatePage, setIsCreatePage] = useState(false);
  const navigate = useNavigate();
  const redirectToCreate = () => {
    navigate(`Create`);
  };
  let location = useLocation();
  useEffect(() => {
    location.pathname == "/Create"
      ? setIsCreatePage(true)
      : setIsCreatePage(false);
    console.log(isCreatePage);
  }, [location]);

  const handleBack = () => {
    navigate(`/`);
  };

  return (
    <TaskContext.Provider value={{ tasks, setTask }}>
      <div id="main-container">
        <div id="top-container">
          {isCreatePage ? (
            <i
              id="icon-back"
              onClick={handleBack}
              className="fa-solid fa-delete-left  fa-xl"
            ></i>
          ) : (
            <Input id="search-bar" placeholder="Search Task Name" />
          )}
          {isCreatePage ? (
            <Button id="button-create-task">Create</Button>
          ) : (
            <i
              id="icon-add"
              onClick={redirectToCreate}
              className="fa-solid fa-circle-plus fa-xl"
            ></i>
          )}
        </div>
        <Outlet />
      </div>
    </TaskContext.Provider>
  );
}
