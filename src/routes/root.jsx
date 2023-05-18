import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div id="main-container">
      <div id="top-container">
        <div>
          <input id="search-bar" placeholder="Search Task Name" />
          <i id="icon-add" class="fa-solid fa-circle-plus fa-xl"></i>
        </div>
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
    </div>
  );
}
