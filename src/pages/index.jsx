import { NavLink, Outlet } from "react-router-dom";
export default function Index() {
  return (
    <>
      <div id="nav-container">
        <nav>
          <ul>
            <li>
              <a>
                <NavLink to={`All`}>All</NavLink>
              </a>
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
