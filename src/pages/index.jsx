import { NavLink, Outlet } from "react-router-dom";
export default function Index() {
  return (
    <>
      <div id="nav-container">
        <nav>
          <ul>
            <li>
              <NavLink to={`All`}>All</NavLink>
            </li>
            <li>
              <NavLink to={`Pending`}>Pending</NavLink>
            </li>
            <li>
              <NavLink to={`Completed`}>Completed</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="bottom-container">
        <Outlet />
      </div>
    </>
  );
}
